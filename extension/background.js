// AutoFill Guardian - Background Service Worker

// OTP extraction patterns
const OTP_PATTERNS = {
  numeric4: /\b\d{4}\b/,
  numeric6: /\b\d{6}\b/,
  numeric8: /\b\d{8}\b/,
  alphanumeric6: /\b[A-Z0-9]{6}\b/,
  alphanumeric8: /\b[A-Z0-9]{8}\b/,
  googleVerify: /G-\d{6}/,
};

// Extract OTP code from text
function extractOTP(text) {
  if (!text) return null;
  
  // Try Google format first
  const googleMatch = text.match(OTP_PATTERNS.googleVerify);
  if (googleMatch) return googleMatch[0].replace('G-', '');
  
  // Try numeric patterns
  const numeric6 = text.match(OTP_PATTERNS.numeric6);
  if (numeric6) return numeric6[0];
  
  const numeric4 = text.match(OTP_PATTERNS.numeric4);
  if (numeric4) return numeric4[0];
  
  const numeric8 = text.match(OTP_PATTERNS.numeric8);
  if (numeric8) return numeric8[0];
  
  // Try alphanumeric
  const alpha6 = text.match(OTP_PATTERNS.alphanumeric6);
  if (alpha6) return alpha6[0];
  
  const alpha8 = text.match(OTP_PATTERNS.alphanumeric8);
  if (alpha8) return alpha8[0];
  
  return null;
}

// Save capture to storage
async function saveCapture(code, source, sourceDetail) {
  const data = await chrome.storage.local.get('captures');
  const captures = data.captures || [];
  
  const capture = {
    id: crypto.randomUUID(),
    code,
    source,
    sourceDetail,
    capturedAt: Date.now(),
    type: 'otp',
  };
  
  captures.unshift(capture);
  
  // Keep only last 1000 captures
  await chrome.storage.local.set({ 
    captures: captures.slice(0, 1000) 
  });
  
  return capture;
}

// Get recent captures
async function getRecentCaptures(limit = 50) {
  const data = await chrome.storage.local.get('captures');
  return (data.captures || []).slice(0, limit);
}

// Listen for notifications
chrome.notifications.onCreated.addListener(async (notificationId, notification) => {
  const text = `${notification.title} ${notification.message}`;
  const code = extractOTP(text);
  
  if (code) {
    await saveCapture(code, 'notification', notification.title);
    
    // Try to auto-fill if there's an active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) {
      chrome.tabs.sendMessage(tab.id, {
        type: 'AUTO_FILL',
        code,
      });
    }
  }
});

// Listen for messages from popup and content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_CAPTURES') {
    getRecentCaptures().then(captures => {
      sendResponse({ captures });
    });
    return true; // Keep channel open for async response
  }
  
  if (message.type === 'SAVE_CAPTURE') {
    saveCapture(message.code, message.source, message.sourceDetail)
      .then(capture => sendResponse({ capture }));
    return true;
  }
});

// Cleanup old captures every hour
chrome.alarms.create('cleanup', { periodInMinutes: 60 });

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'cleanup') {
    const data = await chrome.storage.local.get('captures');
    const captures = data.captures || [];
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    
    const validCaptures = captures.filter(c => c.capturedAt > oneDayAgo);
    await chrome.storage.local.set({ captures: validCaptures });
  }
});

console.log('AutoFill Guardian background service worker loaded');
