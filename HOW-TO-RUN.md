# 🚀 AutoFill Guardian - Como Rodar

## Estrutura do Projeto

```
autofill-guardian/
├── client/          - Frontend React + Vite + Tailwind
│   ├── src/
│   │   ├── apps/           - Apps (DocsApp, DashboardApp)
│   │   ├── components/     - UI components
│   │   ├── features/       - Features (landing, dashboard, auth)
│   │   ├── pages/          - Artifact viewer pages
│   │   └── ...
│   └── ...
├── server/          - Backend Node.js + Express
│   ├── src/
│   │   ├── api/            - Health check
│   │   ├── core/           - Auth, middleware
│   │   └── features/       - Auth, captures, user
│   └── ...
└── docs/            - Documentação
```

## 🎯 Rotas do Frontend

### Landing Page (Pública)
- **URL:** `http://localhost:3000/`
- Página de marketing do AutoFill Guardian

### Dashboard (Área Logada)
- **URL:** `http://localhost:3000/dashboard`
- Login: `http://localhost:3000/dashboard/login`
- Histórico: `http://localhost:3000/dashboard/history`
- Fontes: `http://localhost:3000/dashboard/sources`
- Configurações: `http://localhost:3000/dashboard/settings`

### Product Artifact Viewer (Documentação)
- **URL:** `http://localhost:3000/docs`
- 10 páginas navegáveis com specs completas

## 🔌 Endpoints da API

### Auth
```bash
# Register
POST http://localhost:3001/api/v1/auth/register
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}

# Login
POST http://localhost:3001/api/v1/auth/login
{
  "email": "user@example.com",
  "password": "password123"
}

# Response
{
  "user": { "id": "...", "email": "...", "name": "...", "plan": "free" },
  "accessToken": "jwt-token",
  "refreshToken": "refresh-token"
}
```

### Captures (Requires Auth)
```bash
# List captures
GET http://localhost:3001/api/v1/captures
Authorization: Bearer <access-token>

# Create capture
POST http://localhost:3001/api/v1/captures
Authorization: Bearer <access-token>
{
  "code": "847291",
  "source": "notification",
  "sourceDetail": "Google",
  "type": "otp"
}

# Delete capture
DELETE http://localhost:3001/api/v1/captures/:id
Authorization: Bearer <access-token>
```

### User (Requires Auth)
```bash
# Get profile
GET http://localhost:3001/api/v1/user/profile
Authorization: Bearer <access-token>

# Get plan
GET http://localhost:3001/api/v1/user/plan
Authorization: Bearer <access-token>

# Upgrade plan
POST http://localhost:3001/api/v1/user/plan/upgrade
Authorization: Bearer <access-token>
{
  "plan": "pro"
}
```

### Health Check
```bash
GET http://localhost:3001/health
```

## 🚀 Como Rodar

### 1. Frontend (Client)
```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

### 2. Backend (Server)
```bash
cd server

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

### 3. Ambos (Concorrente)
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd server && npm run dev
```

## 🔐 Autenticação

O sistema usa JWT (JSON Web Tokens):
- **Access Token:** 15 minutos de validade
- **Refresh Token:** 7 dias de validade
- Enviado via header: `Authorization: Bearer <token>`

## 💾 Database

Atualmente usando **mock database** (Map em memória). Para produção:
- PostgreSQL via Supabase
- Migrations com Prisma ou Drizzle
- Seed data para desenvolvimento

## 📊 Planos

### Free
- 50 auto-fills/dia
- 1 dispositivo
- 2 fontes
- Histórico 7 dias

### Pro ($4.99/mês)
- Auto-fills ilimitados
- 3 dispositivos
- Todas as fontes
- Histórico ilimitado
- Cross-device sync

### Enterprise (Custom)
- API access
- SSO / SAML
- Audit logs
- Suporte dedicado

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- Zustand (state management)
- Lucide React (icons)

### Backend
- Node.js 20
- Express
- TypeScript
- JWT (jsonwebtoken)
- bcryptjs (password hashing)
- Zod (validation)

## 📝 Próximos Passos

1. Integrar PostgreSQL (Supabase)
2. Implementar Chrome Extension
3. Implementar Gmail API integration
4. Implementar Stripe para pagamentos
5. Deploy (Vercel + Railway)

---

**Status:** MVP Backend + Frontend funcionando ✅
