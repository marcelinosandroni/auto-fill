# 🚀 Deployment Strategy

## Overview
Estratégia de deployment para todas as partes do AutoFill Guardian: Landing Page, Dashboard, API e Chrome Extension.

## Infrastructure Overview

```
┌─────────────────────────────────────────────────────────┐
│                    CDN (Cloudflare)                      │
└────────────────┬────────────────────┬───────────────────┘
                 │                    │
        ┌────────▼────────┐  ┌───────▼────────┐
        │   Vercel        │  │   Railway      │
        │  (Landing +     │  │   (API + DB)   │
        │   Dashboard)    │  │                │
        └─────────────────┘  └────────────────┘
                                      │
                              ┌───────▼────────┐
                              │   Supabase     │
                              │  (PostgreSQL)  │
                              └────────────────┘
                 │
        ┌────────▼────────┐
        │ Chrome Web Store│
        │  (Extension)    │
        └─────────────────┘
```

## Environments

### Development
```
Client: http://localhost:3000
Server: http://localhost:3001
Extension: Chrome --load-extension flag
DB: Supabase local (Docker)
```

### Staging
```
Client: https://staging.autofillguardian.com
Server: https://api-staging.autofillguardian.com
Extension: Unpublished CRX file for testing
DB: Supabase staging project
```

### Production
```
Client: https://autofillguardian.com
Server: https://api.autofillguardian.com
Extension: Chrome Web Store (published)
DB: Supabase production project
```

## Client Deployment (Vercel)

### Configuration
```javascript
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

### Deployment Flow
```bash
# 1. Push to main branch
git push origin main

# 2. Vercel auto-deploys
# - Runs build
# - Runs tests
# - Deploys to production

# 3. Preview deployments for PRs
# - Each PR gets unique URL
# - e.g., https://autofill-guardian-abc123.vercel.app
```

### Environment Variables
```bash
# .env.production
VITE_API_URL=https://api.autofillguardian.com
VITE_SENTRY_DSN=https://xxx@sentry.io/xxx
VITE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_CHROME_STORE_URL=https://chrome.google.com/webstore/detail/xxx
```

## Server Deployment (Railway)

### Configuration
```yaml
# railway.toml
[build]
builder = "nixpacks"
buildCommand = "npm run build"

[deploy]
startCommand = "npm start"
healthcheckPath = "/health"
healthcheckTimeout = 100
restartPolicyType = "on_failure"
restartPolicyMaxRetries = 3
```

### Database Migrations
```bash
# Run migrations
npm run db:migrate

# Rollback if needed
npm run db:rollback

# Seed development data
npm run db:seed
```

### Environment Variables
```bash
# Railway dashboard
DATABASE_URL=postgresql://...
JWT_SECRET=xxx
JWT_REFRESH_SECRET=xxx
STRIPE_SECRET_KEY=sk_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
SENTRY_DSN=https://xxx@sentry.io/xxx
REDIS_URL=redis://...
NODE_ENV=production
PORT=3001
```

### Health Check
```typescript
// server/api/routes/health.ts
app.get('/health', async (req, res) => {
  try {
    // Check database connection
    await db.query('SELECT 1');
    
    // Check Redis connection
    await redis.ping();
    
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version,
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      error: error.message,
    });
  }
});
```

## Chrome Extension Deployment

### Build Process
```bash
# 1. Build extension
cd extension
npm run build

# 2. Create ZIP file
npm run package

# Output: dist/autofill-guardian-v0.1.0.zip
```

### Chrome Web Store Upload
```bash
# Manual process (for now)
1. Go to https://chrome.google.com/webstore/devconsole
2. Select "AutoFill Guardian"
3. Click "Upload new package"
4. Upload dist/autofill-guardian-v0.1.0.zip
5. Update version notes
6. Submit for review

# Review time: 1-3 days (first time), 1-2 hours (updates)
```

### Automated Upload (Future)
```javascript
// scripts/upload-to-chrome-store.js
const chromeWebStore = require('chrome-webstore-upload');

const store = chromeWebStore({
  extensionId: process.env.CHROME_EXTENSION_ID,
  clientId: process.env.CHROME_CLIENT_ID,
  clientSecret: process.env.CHROME_CLIENT_SECRET,
  refreshToken: process.env.CHROME_REFRESH_TOKEN,
});

async function upload() {
  const zipBuffer = fs.readFileSync('dist/autofill-guardian.zip');
  
  // Upload
  await store.uploadExisting(zipBuffer);
  
  // Publish
  await store.publish('default');
  
  console.log('Extension uploaded and published!');
}

upload();
```

### Version Management
```json
// extension/manifest.json
{
  "version": "0.1.0",
  "version_name": "0.1.0-beta"
}

// Version bump script
// scripts/bump-version.js
const manifest = require('../extension/manifest.json');
const [major, minor, patch] = manifest.version.split('.');

const newVersion = `${major}.${minor}.${parseInt(patch) + 1}`;
manifest.version = newVersion;

fs.writeFileSync(
  'extension/manifest.json',
  JSON.stringify(manifest, null, 2)
);

console.log(`Version bumped to ${newVersion}`);
```

## CI/CD Pipeline

### GitHub Actions Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: |
          cd client && npm ci
          cd ../server && npm ci
          cd ../extension && npm ci
      
      - name: Run tests
        run: |
          cd client && npm test
          cd ../server && npm test
          cd ../extension && npm test

  deploy-client:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'

  deploy-server:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Railway
        uses: bervProject/railway-deploy@main
        with:
          railway_token: ${{ secrets.RAILWAY_TOKEN }}
          service: autofill-guardian-api

  deploy-extension:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Build extension
        run: |
          cd extension
          npm ci
          npm run build
          npm run package
      
      - name: Upload to Chrome Web Store
        env:
          CHROME_EXTENSION_ID: ${{ secrets.CHROME_EXTENSION_ID }}
          CHROME_CLIENT_ID: ${{ secrets.CHROME_CLIENT_ID }}
          CHROME_CLIENT_SECRET: ${{ secrets.CHROME_CLIENT_SECRET }}
          CHROME_REFRESH_TOKEN: ${{ secrets.CHROME_REFRESH_TOKEN }}
        run: |
          cd extension
          node ../scripts/upload-to-chrome-store.js
```

## Monitoring & Observability

### Error Tracking (Sentry)
```typescript
// client/src/main.tsx
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// server/src/index.ts
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Sentry.Integrations.Express({ app }),
  ],
  tracesSampleRate: 0.1,
});
```

### Analytics (Plausible)
```typescript
// client/src/utils/analytics.ts
export function trackEvent(event: string, data?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(event, { props: data });
  }
}

// Usage
trackEvent('extension_installed');
trackEvent('code_captured', { source: 'gmail' });
trackEvent('auto_fill_success', { site: 'github.com' });
```

### Uptime Monitoring
```yaml
# UptimeRobot or Better Uptime
- Landing Page: https://autofillguardian.com
- Dashboard: https://autofillguardian.com/dashboard
- API Health: https://api.autofillguardian.com/health
- Chrome Web Store: https://chrome.google.com/webstore/detail/xxx
```

### Logging
```typescript
// server/src/core/logger.ts
import pino from 'pino';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: process.env.NODE_ENV === 'development' 
    ? { target: 'pino-pretty' }
    : undefined,
});

// Usage
logger.info({ userId, captureId }, 'Capture created');
logger.error({ error, userId }, 'Failed to save capture');
```

## Rollback Strategy

### Client Rollback
```bash
# Vercel auto-keeps last 10 deployments
# To rollback:
1. Go to Vercel dashboard
2. Select project
3. Go to Deployments tab
4. Find previous deployment
5. Click "Promote to Production"
```

### Server Rollback
```bash
# Railway keeps deployment history
# To rollback:
1. Go to Railway dashboard
2. Select service
3. Go to Deployments tab
4. Find previous deployment
5. Click "Redeploy"

# Database rollback (if needed)
npm run db:rollback
```

### Extension Rollback
```bash
# Chrome Web Store keeps version history
# To rollback:
1. Go to Chrome Developer Dashboard
2. Select extension
3. Go to Package tab
4. Upload previous version ZIP
5. Submit for review (expedited for rollback)
```

## Disaster Recovery

### Database Backups
```bash
# Supabase automatic backups (daily)
# Point-in-time recovery available

# Manual backup
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql

# Restore
psql $DATABASE_URL < backup-20240101.sql
```

### Incident Response
```markdown
# Incident Response Plan

## Severity Levels
- P0: Complete outage (all users affected)
- P1: Major feature broken (most users affected)
- P2: Minor feature broken (some users affected)
- P3: Cosmetic issue (no functionality impact)

## Response Times
- P0: 15 minutes
- P1: 1 hour
- P2: 4 hours
- P3: 24 hours

## Communication
- Status page: https://status.autofillguardian.com
- Twitter: @autofillguardian
- Email: status@autofillguardian.com
```

## Cost Estimation

### Monthly Costs (1000 users)
```
Vercel (Pro): $20
Railway (Hobby): $5
Supabase (Pro): $25
Sentry (Team): $26
Plausible: $9
Domain: $1
Chrome Web Store: $5 (one-time)

Total: ~$86/month
```

### At Scale (10,000 users)
```
Vercel (Pro): $20
Railway (Pro): $20
Supabase (Pro): $25
Sentry (Team): $26
Plausible: $9
Domain: $1

Total: ~$101/month
```

## Security Checklist

### Pre-Deployment
- [ ] All secrets in environment variables (not code)
- [ ] HTTPS enforced everywhere
- [ ] CORS configured correctly
- [ ] Rate limiting enabled
- [ ] Input validation on all endpoints
- [ ] SQL injection protection (parameterized queries)
- [ ] XSS protection (Content-Security-Policy)
- [ ] CSRF protection (for forms)
- [ ] Security headers set
- [ ] Dependencies audited (npm audit)
- [ ] Sensitive data encrypted at rest
- [ ] API keys rotated regularly
- [ ] Backup strategy tested
- [ ] Monitoring and alerting configured
