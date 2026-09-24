# 🚀 AutoFill Guardian - Como Rodar o Projeto

## Estrutura de Rotas

O projeto está organizado em duas aplicações principais:

### 1. Landing Page (Rota Principal)
- **URL:** `http://localhost:3000/`
- **Descrição:** Página pública de marketing do AutoFill Guardian
- **Seções:**
  - Hero com gradiente e CTAs
  - Features (6 cards em grid)
  - How It Works (3 passos)
  - Pricing (Free/Pro/Enterprise)
  - Footer com links

### 2. Product Artifact Viewer (Documentação)
- **URL:** `http://localhost:3000/docs`
- **Descrição:** Artifact visual completo do refinamento do produto
- **Seções:**
  - Overview - Visão geral do produto
  - Features - Matriz de features com priorização
  - DesignPreview - Mockups visuais
  - UserFlows - Fluxos de usuário mapeados
  - Roadmap - Timeline visual do projeto
  - Architecture - Estrutura técnica
  - DesignSystem - Biblioteca de componentes
  - OnboardingFlow - Fluxo de onboarding
  - StatesPreview - Estados vazios/erro/loading
  - CopyPreview - Preview de todos os textos

## Como Rodar

### Desenvolvimento
```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Abrir no browser
# Landing Page: http://localhost:3000/
# Artifact Viewer: http://localhost:3000/docs
```

### Build de Produção
```bash
# Build
npm run build

# Preview do build
npm run preview
```

## Tecnologias

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Zustand** - State management
- **TypeScript** - Type safety
- **Lucide React** - Icons

## Estrutura do Projeto

```
src/
├── apps/
│   └── DocsApp.tsx          # Artifact Viewer
├── components/              # UI components (Sidebar, etc)
├── core/
│   └── di.ts               # DI Container
├── features/
│   ├── auth/               # Auth feature
│   ├── dashboard/          # Dashboard feature
│   ├── extension/          # Extension feature
│   └── landing/            # Landing page feature
├── hooks/
│   └── useDi.ts            # DI hook
├── pages/                  # Artifact viewer pages
├── providers/
│   └── DependencyProvider.tsx
├── store/
│   └── captureStore.ts     # Zustand store
├── utils/                  # Utility functions
├── App.tsx                 # Main app with routes
└── main.tsx               # Entry point
```

## Próximas Tasks

Seguindo o AGENTS.md e o PLAN.md:

- [ ] TASK-1.4: Chrome Extension boilerplate
- [ ] TASK-1.5: Popup da extensão (React)
- [ ] TASK-1.6: Content Script (detecção de campos OTP)
- [ ] TASK-1.7: Background Service Worker
- [ ] TASK-1.8: Dashboard básico
- [ ] TASK-1.9: API básica
- [ ] TASK-1.10: Integrar tudo e testar

## Design System

Segue rigorosamente o `DESIGN.md`:
- **Cores:** Indigo (primary), Emerald (success), Amber (warning)
- **Tipografia:** Inter (headings/body), JetBrains Mono (códigos)
- **Dark Mode First:** Background slate-950, surface slate-800
- **Componentes:** Botões, Cards, Badges, Toasts seguindo specs

## Especificações Completas

Todas as specs detalhadas estão em `docs/planning/`:
- `EXTENSION-SPEC.md` - Chrome Extension
- `LANDING-SPEC.md` - Landing Page
- `DASHBOARD-SPEC.md` - Dashboard
- `API-SPEC.md` - API
- `UX-RESEARCH.md` - UX Research
- `COMPONENT-SPECS.md` - Componentes
- `COPY-GUIDE.md` - Copywriting
- `ONBOARDING-SPEC.md` - Onboarding
- `TESTING-STRATEGY.md` - Testes
- `DEPLOYMENT.md` - Deployment

---

**Status:** Fase 1 em progresso - MVP Completo
