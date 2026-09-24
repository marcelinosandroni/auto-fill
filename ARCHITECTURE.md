# 🏗️ ARQUITETURA GLOBAL (MONOREPO)

Padrão Monorepo separando completamente Frontend e Backend, unidos apenas no nível de infraestrutura.

## 📂 ESTRUTURA ROOT
```text
autofill-guardian/
├── AGENTS.md              - Regras do agente IA
├── APP.md                 - Visão do produto
├── ARCHITECTURE.md        - Este arquivo
├── REACT.md               - Regras do frontend
├── NODE.md                - Regras do backend
├── DESIGN.md              - Design system e UI specs
├── client/                - App React + Vite (Landing + Dashboard + Extension popup)
├── server/                - API Node.js (Desacoplada)
├── docs/                  - Documentação do produto
│   ├── planning/          - Refinamento e artifacts
│   ├── PRODUCT.md         - Visão detalhada do produto
│   └── CHANGELOG.md       - Histórico de mudanças
└── specs/                 - Spec-Driven Development
    ├── PLAN.md            - Plano atual (cérebro do projeto)
    ├── BACKLOG.md         - Ideias futuras
    ├── ROADMAP.md         - Visão macro
    ├── tasks/             - Tasks por fase
    └── history/           - Fases concluídas
```

## 🏛️ PADRÕES GLOBAIS

### Monorepo
- `client/` e `server/` são workspaces independentes
- Compartilham apenas types via `@autofill/types` (futuro)
- Cada um tem seu próprio `package.json`, testes, e deploy

### Vertical Slices
- Cada feature é auto-contida (domain, use-case, repository, UI)
- Sem camadas horizontais (não existe "pasta de services" global)
- DI via container simples (sem Inversify pesado)

### Spec-Driven Development
- Toda implementação nasce de uma spec/task
- Tasks são microscópicas (máx 1 hora cada)
- TDD: spec → teste → implementação → validação
