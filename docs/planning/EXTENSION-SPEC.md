# 📐 Chrome Extension Spec

## Manifest V3 Structure
```json
{
  "manifest_version": 3,
  "name": "AutoFill Guardian",
  "version": "0.1.0",
  "description": "Auto-captures OTP codes and auto-fills verification fields",
  "permissions": ["notifications", "storage", "activeTab", "clipboardWrite"],
  "optional_permissions": ["gmail"],
  "background": {
    "service_worker": "background.js"
  },
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icons/icon-128.png"
  },
  "content_scripts": [{
    "matches": ["<all_urls>"],
    "js": ["content-script.js"],
    "run_at": "document_idle"
  }]
}
```

## Architecture

### Background Service Worker
- Listener para `chrome.notifications.onCreated`
- Parser de códigos OTP (regex patterns)
- Storage manager (chrome.storage.local)
- Message hub entre popup e content scripts

### Content Script
- Detector de campos OTP (input[type="text"] com pattern, autocomplete="one-time-code")
- Input watcher para auto-fill
- Overlay/toast para feedback visual
- Comunicação com background via chrome.runtime

### Popup
- React app isolado (350x500px)
- Lista de últimas capturas
- Status do monitoramento
- Quick settings
- Link para dashboard completo

## OTP Detection Patterns
```typescript
const OTP_PATTERNS = {
  numeric4: /\b\d{4}\b/,
  numeric6: /\b\d{6}\b/,
  alphanumeric6: /\b[A-Z0-9]{6}\b/,
  alphanumeric8: /\b[A-Z0-9]{8}\b/,
  googleVerify: /G-\d{6}/,
  microsoftVerify: /\b\d{6}\b/, // context-dependent
};
```

## Field Detection Heuristics
```typescript
const OTP_FIELD_SELECTORS = [
  'input[autocomplete="one-time-code"]',
  'input[name*="otp"]',
  'input[name*="code"]',
  'input[name*="token"]',
  'input[name*="verify"]',
  'input[id*="otp"]',
  'input[id*="code"]',
  'input[maxlength="6"][inputmode="numeric"]',
  'input[pattern*="digit"]',
];
```

## Data Model (Local Storage)
```typescript
interface CapturedCode {
  id: string;
  code: string;
  source: 'notification' | 'email' | 'clipboard';
  sourceDetail: string; // e.g., "Gmail - noreply@google.com"
  capturedAt: number;
  expiresAt?: number;
  usedAt?: number;
  site?: string; // URL where it was used
  type: 'otp' | 'token' | 'link' | 'password';
}
```

## Security Considerations
- Códigos são armazenados APENAS em chrome.storage.local (não sync por default)
- Dados são limpos automaticamente após 24h
- Opção de "modo incógnito" que não salva histórico
- Nenhum dado é enviado para servidores no MVP
- Criptografia opcional para storage (Web Crypto API)
