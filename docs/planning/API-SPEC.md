# 🔌 API Spec

## Base URL
```
Production: https://api.autofillguardian.com/v1
Development: http://localhost:3001/v1
```

## Authentication
- JWT Bearer Token
- Refresh Token (httpOnly cookie)
- Token expiry: 15min access, 7d refresh

## Endpoints

### Auth
```
POST   /auth/register       - Criar conta
POST   /auth/login           - Login
POST   /auth/refresh         - Refresh token
POST   /auth/logout          - Logout
POST   /auth/forgot-password - Reset password email
POST   /auth/reset-password  - Reset com token
GET    /auth/me              - Current user info
```

### Captures (History)
```
GET    /captures             - List captures (paginated, filtered)
GET    /captures/:id         - Get single capture (reveals code)
DELETE /captures/:id         - Delete capture
DELETE /captures             - Bulk delete (filter-based)
POST   /captures/sync        - Sync from extension to server
GET    /captures/export      - Export as CSV (Pro only)
```

### Sources
```
GET    /sources              - List connected sources
POST   /sources              - Connect new source
PATCH  /sources/:id          - Update source settings
DELETE /sources/:id          - Disconnect source
POST   /sources/:id/test     - Test connection
```

### User
```
GET    /user/profile         - Get profile
PATCH  /user/profile         - Update profile
GET    /user/settings        - Get settings
PATCH  /user/settings        - Update settings
GET    /user/plan            - Get plan info
POST   /user/plan/upgrade    - Upgrade plan
```

### Devices
```
GET    /devices              - List registered devices
POST   /devices              - Register device
DELETE /devices/:id          - Remove device
POST   /devices/:id/sync     - Trigger sync
```

## Data Models

### User
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  plan: 'free' | 'pro' | 'enterprise';
  createdAt: Date;
  lastLoginAt: Date;
}
```

### Capture
```typescript
interface Capture {
  id: string;
  userId: string;
  code: string; // encrypted at rest
  codeHash: string; // for search without revealing
  source: 'notification' | 'email' | 'clipboard';
  sourceDetail: string;
  type: 'otp' | 'token' | 'link' | 'password';
  capturedAt: Date;
  expiresAt?: Date;
  usedAt?: Date;
  site?: string;
  deviceId: string;
}
```

### Source
```typescript
interface Source {
  id: string;
  userId: string;
  type: 'gmail' | 'outlook' | 'notifications' | 'clipboard';
  enabled: boolean;
  config: Record<string, any>;
  lastSyncAt?: Date;
  status: 'active' | 'error' | 'disconnected';
}
```

## Rate Limiting
- Free: 100 requests/min
- Pro: 1000 requests/min
- Enterprise: Custom

## Error Format
```json
{
  "error": {
    "code": "CAPTURE_NOT_FOUND",
    "message": "The requested capture does not exist",
    "details": {}
  }
}
```
