# 📐 Chrome Extension Spec - EXPANDIDA

## Manifest V3 Completo
```json
{
  "manifest_version": 3,
  "name": "AutoFill Guardian",
  "version": "0.1.0",
  "description": "Auto-captures OTP codes and auto-fills verification fields",
  "permissions": [
    "notifications",
    "storage",
    "activeTab",
    "clipboardWrite",
    "alarms"
  ],
  "optional_permissions": [
    "identity"
  ],
  "host_permissions": [
    "https://mail.google.com/*",
    "https://accounts.google.com/*"
  ],
  "background": {
    "service_worker": "background.js",
    "type": "module"
  },
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon-16.png",
      "32": "icons/icon-32.png",
      "48": "icons/icon-48.png",
      "128": "icons/icon-128.png"
    },
    "default_title": "AutoFill Guardian"
  },
  "icons": {
    "16": "icons/icon-16.png",
    "32": "icons/icon-32.png",
    "48": "icons/icon-48.png",
    "128": "icons/icon-128.png"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content-script.js"],
      "css": ["content-styles.css"],
      "run_at": "document_idle",
      "all_frames": false
    }
  ],
  "web_accessible_resources": [
    {
      "resources": ["icons/*", "popup.html"],
      "matches": ["<all_urls>"]
    }
  ],
  "commands": {
    "_execute_action": {
      "suggested_key": {
        "default": "Ctrl+Shift+A",
        "mac": "Command+Shift+A"
      },
      "description": "Open AutoFill Guardian popup"
    }
  }
}
```

## Background Service Worker - Detalhado

### Listeners
```typescript
// Notification listener
chrome.notifications.onCreated.addListener((notificationId, notification) => {
  // Parse notification for OTP codes
  const code = extractOTP(notification.message);
  if (code) {
    handleCapturedCode({
      code,
      source: 'notification',
      sourceDetail: notification.title,
      capturedAt: Date.now()
    });
  }
});

// Alarm listener (para limpeza periódica)
chrome.alarms.create('cleanup', { periodInMinutes: 60 });
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'cleanup') {
    cleanupExpiredCaptures();
  }
});

// Message listener (comunicação com popup/content script)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.type) {
    case 'GET_CAPTURES':
      sendResponse({ captures: getRecentCaptures() });
      break;
    case 'CLEAR_CAPTURE':
      clearCapture(message.id);
      sendResponse({ success: true });
      break;
    case 'GET_SETTINGS':
      sendResponse({ settings: getSettings() });
      break;
    case 'UPDATE_SETTINGS':
      updateSettings(message.settings);
      sendResponse({ success: true });
      break;
  }
  return true; // Keep message channel open for async response
});

// Tab update listener (detectar campos OTP)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    // Notificar content script para verificar campos OTP
    chrome.tabs.sendMessage(tabId, { type: 'CHECK_OTP_FIELDS' });
  }
});
```

### Storage Management
```typescript
interface StorageData {
  captures: CapturedCode[];
  settings: UserSettings;
  stats: UserStats;
  onboarding: OnboardingState;
}

interface UserSettings {
  autoFill: boolean;
  autoFillDelay: number; // ms
  soundEnabled: boolean;
  theme: 'dark' | 'light' | 'system';
  sources: {
    gmail: boolean;
    notifications: boolean;
    clipboard: boolean;
  };
  security: {
    encryptionEnabled: boolean;
    sessionTimeout: number; // minutes
    autoClearHistory: boolean;
    clearHistoryDays: number;
  };
  notifications: {
    showCaptureToast: boolean;
    showFillToast: boolean;
    showBadge: boolean;
  };
}

interface UserStats {
  totalCaptures: number;
  todayCaptures: number;
  lastCaptureAt: number;
  successRate: number;
}

interface OnboardingState {
  completed: boolean;
  completedAt?: number;
  sourcesSelected: string[];
}

// Storage helpers
async function saveCapture(capture: CapturedCode): Promise<void> {
  const data = await chrome.storage.local.get('captures');
  const captures = data.captures || [];
  captures.unshift(capture); // Add to beginning
  await chrome.storage.local.set({ captures: captures.slice(0, 1000) }); // Keep last 1000
}

async function getRecentCaptures(limit = 50): Promise<CapturedCode[]> {
  const data = await chrome.storage.local.get('captures');
  return (data.captures || []).slice(0, limit);
}

async function cleanupExpiredCaptures(): Promise<void> {
  const data = await chrome.storage.local.get('captures');
  const captures = data.captures || [];
  const now = Date.now();
  const validCaptures = captures.filter(c => 
    !c.expiresAt || c.expiresAt > now
  );
  await chrome.storage.local.set({ captures: validCaptures });
}
```

## Content Script - Detalhado

### OTP Field Detection
```typescript
const OTP_FIELD_SELECTORS = [
  // Standard autocomplete
  'input[autocomplete="one-time-code"]',
  
  // Common name patterns
  'input[name*="otp" i]',
  'input[name*="code" i]',
  'input[name*="token" i]',
  'input[name*="verify" i]',
  'input[name*="2fa" i]',
  'input[name*="mfa" i]',
  
  // Common id patterns
  'input[id*="otp" i]',
  'input[id*="code" i]',
  'input[id*="token" i]',
  'input[id*="verify" i]',
  
  // Input mode and pattern
  'input[inputmode="numeric"][maxlength="4"]',
  'input[inputmode="numeric"][maxlength="6"]',
  'input[inputmode="numeric"][maxlength="8"]',
  'input[pattern*="digit" i]',
  'input[pattern*="[0-9]" i]',
  
  // Type and maxlength combinations
  'input[type="text"][maxlength="4"]',
  'input[type="text"][maxlength="6"]',
  'input[type="tel"][maxlength="4"]',
  'input[type="tel"][maxlength="6"]',
  
  // Placeholder patterns
  'input[placeholder*="OTP" i]',
  'input[placeholder*="code" i]',
  'input[placeholder*="verification" i]',
];

function detectOTPFields(): HTMLInputElement[] {
  const fields: HTMLInputElement[] = [];
  
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
```

### Auto-Fill Logic
```typescript
async function autoFillField(field: HTMLInputElement, code: string): Promise<boolean> {
  try {
    // Focus the field
    field.focus();
    
    // Clear existing value
    field.value = '';
    
    // Set new value
    field.value = code;
    
    // Dispatch events to trigger React/Vue/Angular change detection
    field.dispatchEvent(new Event('input', { bubbles: true }));
    field.dispatchEvent(new Event('change', { bubbles: true }));
    field.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
    field.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
    
    // Blur the field
    field.blur();
    
    // Show success feedback
    showFillFeedback(field, true);
    
    // Track success
    await trackAutoFill(code, true);
    
    return true;
  } catch (error) {
    console.error('Auto-fill failed:', error);
    showFillFeedback(field, false);
    await trackAutoFill(code, false);
    return false;
  }
}

function showFillFeedback(field: HTMLInputElement, success: boolean): void {
  const rect = field.getBoundingClientRect();
  const toast = document.createElement('div');
  toast.className = `autofill-guardian-toast ${success ? 'success' : 'error'}`;
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
    animation: slideIn 0.2s ease-out;
    background: ${success ? '#10b981' : '#ef4444'};
    color: white;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.2s ease-out';
    setTimeout(() => toast.remove(), 200);
  }, 2000);
}
```

### Clipboard Monitoring
```typescript
let lastClipboardContent = '';

async function monitorClipboard(): Promise<void> {
  // Only monitor if enabled in settings
  const settings = await getSettings();
  if (!settings.sources.clipboard) return;
  
  try {
    const clipboardText = await navigator.clipboard.readText();
    
    if (clipboardText !== lastClipboardContent) {
      lastClipboardContent = clipboardText;
      
      // Check if it's an OTP code
      const code = extractOTP(clipboardText);
      if (code) {
        await handleCapturedCode({
          code,
          source: 'clipboard',
          sourceDetail: 'Clipboard',
          capturedAt: Date.now()
        });
        
        // Try to auto-fill if field is focused
        const focusedField = document.activeElement;
        if (focusedField instanceof HTMLInputElement) {
          const otpFields = detectOTPFields();
          if (otpFields.includes(focusedField)) {
            await autoFillField(focusedField, code);
          }
        }
      }
    }
  } catch (error) {
    // Clipboard access denied or not available
    console.log('Clipboard monitoring not available');
  }
}

// Check clipboard every 2 seconds
setInterval(monitorClipboard, 2000);
```

## Popup - Componentes Detalhados

### Popup App Structure
```typescript
// popup/App.tsx
function App() {
  const [captures, setCaptures] = useState<CapturedCode[]>([]);
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const [capturesData, settingsData] = await Promise.all([
      chrome.runtime.sendMessage({ type: 'GET_CAPTURES' }),
      chrome.runtime.sendMessage({ type: 'GET_SETTINGS' })
    ]);
    
    setCaptures(capturesData.captures);
    setSettings(settingsData.settings);
    setLoading(false);
  }

  if (loading) {
    return <PopupSkeleton />;
  }

  return (
    <div className="w-[350px] h-[500px] flex flex-col bg-slate-900">
      <PopupHeader status={settings?.autoFill ? 'monitoring' : 'paused'} />
      <PopupStats captures={captures} />
      <CaptureList captures={captures} />
      <PopupFooter />
    </div>
  );
}
```

### Capture List Component
```typescript
// popup/components/CaptureList.tsx
interface CaptureListProps {
  captures: CapturedCode[];
}

function CaptureList({ captures }: CaptureListProps) {
  if (captures.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="flex-1 overflow-y-auto p-3 space-y-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-slate-400">Últimas Capturas</span>
        <button className="text-xs text-indigo-400 hover:text-indigo-300">
          Ver tudo
        </button>
      </div>
      
      {captures.slice(0, 10).map((capture) => (
        <CaptureItem key={capture.id} capture={capture} />
      ))}
    </div>
  );
}
```

## Security Considerations - Expandido

### Data Encryption
```typescript
import { webcrypto } from 'crypto';

async function encryptCode(code: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(code);
  
  // Generate a random IV
  const iv = webcrypto.getRandomValues(new Uint8Array(12));
  
  // Get or create encryption key
  const key = await getOrCreateEncryptionKey();
  
  // Encrypt
  const encrypted = await webcrypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    data
  );
  
  // Combine IV + encrypted data and encode as base64
  const combined = new Uint8Array(iv.length + encrypted.byteLength);
  combined.set(iv);
  combined.set(new Uint8Array(encrypted), iv.length);
  
  return btoa(String.fromCharCode(...combined));
}

async function decryptCode(encryptedCode: string): Promise<string> {
  const combined = Uint8Array.from(atob(encryptedCode), c => c.charCodeAt(0));
  const iv = combined.slice(0, 12);
  const data = combined.slice(12);
  
  const key = await getOrCreateEncryptionKey();
  
  const decrypted = await webcrypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    data
  );
  
  return new TextDecoder().decode(decrypted);
}

async function getOrCreateEncryptionKey(): Promise<CryptoKey> {
  const stored = await chrome.storage.local.get('encryptionKey');
  
  if (stored.encryptionKey) {
    // Import existing key
    const keyData = Uint8Array.from(atob(stored.encryptionKey), c => c.charCodeAt(0));
    return webcrypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'AES-GCM' },
      false,
      ['encrypt', 'decrypt']
    );
  } else {
    // Generate new key
    const key = await webcrypto.subtle.generateKey(
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt']
    );
    
    // Export and store
    const exported = await webcrypto.subtle.exportKey('raw', key);
    const keyBase64 = btoa(String.fromCharCode(...new Uint8Array(exported)));
    await chrome.storage.local.set({ encryptionKey: keyBase64 });
    
    return key;
  }
}
```

### Content Security Policy
```json
{
  "content_security_policy": {
    "extension_pages": "script-src 'self'; object-src 'self'; connect-src 'self' https://api.autofillguardian.com"
  }
}
```

## Performance Optimization

### Lazy Loading
```typescript
// Load heavy features only when needed
async function loadGmailIntegration() {
  const { GmailIntegration } = await import('./features/gmail');
  return new GmailIntegration();
}

// Debounce expensive operations
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
```

### Memory Management
```typescript
// Limit stored captures to prevent memory issues
const MAX_CAPTURES = 1000;

async function pruneOldCaptures(): Promise<void> {
  const data = await chrome.storage.local.get('captures');
  const captures = data.captures || [];
  
  if (captures.length > MAX_CAPTURES) {
    await chrome.storage.local.set({ 
      captures: captures.slice(0, MAX_CAPTURES) 
    });
  }
}
```
