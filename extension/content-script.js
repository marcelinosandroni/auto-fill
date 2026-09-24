// AutoFill Guardian - Content Script

// OTP field selectors
const OTP_FIELD_SELECTORS = [
  'input[autocomplete="one-time-code"]',
  'input[name*="otp" i]',
  'input[name*="code" i]',
  'input[name*="token" i]',
  'input[name*="verify" i]',
  'input[id*="otp" i]',
  'input[id*="code" i]',
  'input[maxlength="6"][inputmode="numeric"]',
  'input[maxlength="4"][inputmode="numeric"]',
];

// Detect OTP fields on page
function detectOTPFields() {
  const fields = [];
  
  for (const selector of OTP_FIELD_SELECTORS) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      if (el instanceof HTMLInputElement && !fields.includes(el)) {
        fields.push(el);
      }
    });
  }
  
  return fields;
}

// Auto-fill field with code
function autoFillField(field, code) {
  // Focus the field
  field.focus();
  
  // Clear existing value
  field.value = '';
  
  // Set new value
  field.value = code;
  
  // Dispatch events to trigger React/Vue/Angular change detection
  field.dispatchEvent(new Event('input', { bubbles: true }));
  field.dispatchEvent(new Event('change', { bubbles: true }));
  
  // Show success feedback
  showFillFeedback(field, true);
  
  // Blur the field
  field.blur();
}

// Show visual feedback
function showFillFeedback(field, success) {
  const rect = field.getBoundingClientRect();
  const toast = document.createElement('div');
  
  toast.className = 'autofill-guardian-toast';
  toast.textContent = success ? '✓ Código preenchido' : '✕ Erro ao preencher';
  toast.style.cssText = `
    position: fixed;
    top: ${rect.top - 40}px;
    left: ${rect.left}px;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    z-index: 999999;
    background: ${success ? '#10b981' : '#ef4444'};
    color: white;
    animation: autofill-slide-in 0.2s ease-out;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.2s';
    setTimeout(() => toast.remove(), 200);
  }, 2000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes autofill-slide-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Listen for messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'AUTO_FILL') {
    const fields = detectOTPFields();
    
    if (fields.length > 0) {
      // Fill the first visible OTP field
      const visibleField = fields.find(field => {
        const rect = field.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      });
      
      if (visibleField) {
        autoFillField(visibleField, message.code);
        sendResponse({ success: true });
      } else {
        sendResponse({ success: false, error: 'No visible OTP field found' });
      }
    } else {
      sendResponse({ success: false, error: 'No OTP field detected' });
    }
  }
  
  if (message.type === 'CHECK_OTP_FIELDS') {
    const fields = detectOTPFields();
    sendResponse({ hasFields: fields.length > 0, count: fields.length });
  }
  
  return true;
});

console.log('AutoFill Guardian content script loaded');
