# 🎯 PLAN (O Cérebro do Projeto)

> 🛑 **REGRA FIXA (Agente IA, LEIA ISSO ANTES DE CODAR):** 
> O desenvolvedor (Marcelino) tem TDAH. As tarefas AQUI devem ser **microscópicas**. 
> Se uma tarefa levar mais de 1 hora pra fazer, QUEBRE ELA EM DUAS. 
> Nunca pule um passo. Nunca comece o Passo 2 sem testar e commitar o Passo 1.
> Atualize os status rigorosamente no final de cada prompt: `[ ]` (To Do), `[-]` (In Progress), `[x]` (Done).

---

## Fase atual: 0 - Product Refinement & Planning ✅ CONCLUÍDA

### Objetivo
Refinar o produto, criar artifacts visuais, definir specs detalhadas antes de qualquer código real.

### Status: ✅ TODAS AS TASKS CONCLUÍDAS

[x] - [Criar estrutura SDD e regras](./tasks/PHASE-0/TASK-0.1.md) - feito
[x] - [Criar artifact de product refinement](./tasks/PHASE-0/TASK-0.2.md) - feito
[x] - [Definir specs da Chrome Extension](./tasks/PHASE-0/TASK-0.3.md) - feito
[x] - [Definir specs da Landing Page](./tasks/PHASE-0/TASK-0.4.md) - feito
[x] - [Definir specs do Dashboard](./tasks/PHASE-0/TASK-0.5.md) - feito
[x] - [Definir specs da API](./tasks/PHASE-0/TASK-0.6.md) - feito
[x] - [Criar UX Research e decisões](./tasks/PHASE-0/TASK-0.7.md) - feito
[x] - [Criar Component Specifications](./tasks/PHASE-0/TASK-0.8.md) - feito
[x] - [Criar Copy Guide](./tasks/PHASE-0/TASK-0.9.md) - feito
[x] - [Criar Onboarding Specification](./tasks/PHASE-0/TASK-0.10.md) - feito
[x] - [Criar Testing Strategy](./tasks/PHASE-0/TASK-0.11.md) - feito
[x] - [Criar Deployment Strategy](./tasks/PHASE-0/TASK-0.12.md) - feito
[x] - [Expandir artifact viewer com Design System](./tasks/PHASE-0/TASK-0.13.md) - feito
[x] - [Expandir artifact viewer com Onboarding Flow](./tasks/PHASE-0/TASK-0.14.md) - feito
[x] - [Expandir artifact viewer com States Preview](./tasks/PHASE-0/TASK-0.15.md) - feito
[x] - [Expandir artifact viewer com Copy Preview](./tasks/PHASE-0/TASK-0.16.md) - feito

### Artefatos Criados

#### Documentação
- ✅ AGENTS.md - Regras do agente IA
- ✅ APP.md - Visão do produto
- ✅ ARCHITECTURE.md - Estrutura do monorepo
- ✅ REACT.md - Regras do frontend
- ✅ NODE.md - Regras do backend
- ✅ DESIGN.md - Design system
- ✅ README.md - Visão geral do projeto

#### Specs Detalhadas
- ✅ docs/PRODUCT.md - Visão detalhada do produto
- ✅ docs/planning/EXTENSION-SPEC.md - Spec da Chrome Extension
- ✅ docs/planning/EXTENSION-SPEC-EXPANDED.md - Spec expandida com código
- ✅ docs/planning/LANDING-SPEC.md - Spec da Landing Page
- ✅ docs/planning/DASHBOARD-SPEC.md - Spec do Dashboard
- ✅ docs/planning/API-SPEC.md - Spec da API
- ✅ docs/planning/UX-RESEARCH.md - Research e decisões de UX
- ✅ docs/planning/COMPONENT-SPECS.md - Especificação de componentes
- ✅ docs/planning/COPY-GUIDE.md - Guia de textos e mensagens
- ✅ docs/planning/ONBOARDING-SPEC.md - Fluxo de onboarding
- ✅ docs/planning/TESTING-STRATEGY.md - Estratégia de testes
- ✅ docs/planning/DEPLOYMENT.md - Estratégia de deployment

#### Artifact Viewer (React App)
- ✅ Overview - Visão geral do produto
- ✅ Features - Matriz de features com priorização
- ✅ DesignPreview - Mockups visuais (popup, landing, auto-fill)
- ✅ UserFlows - Fluxos de usuário mapeados
- ✅ Roadmap - Timeline visual do projeto
- ✅ Architecture - Estrutura técnica e decisões
- ✅ DesignSystem - Biblioteca de componentes visuais
- ✅ OnboardingFlow - Mockup do fluxo de onboarding
- ✅ StatesPreview - Estados vazios, erro, loading
- ✅ CopyPreview - Preview de todos os textos

#### Estrutura de Pastas
- ✅ client/ - Estrutura do frontend (README)
- ✅ server/ - Estrutura do backend (README)
- ✅ docs/ - Documentação do produto
- ✅ docs/planning/ - Refinamento e artifacts
- ✅ specs/ - Spec-Driven Development
- ✅ specs/tasks/ - Tasks por fase
- ✅ specs/history/ - Histórico de fases

---

## Fase atual: 1 - Foundation 🏗️

### Objetivo
Configurar o monorepo e infraestrutura básica para começar o desenvolvimento real.

[x] - [Criar DI Container (core/di.ts + providers + hooks)](./tasks/PHASE-1/TASK-1.1.md) - CONCLUÍDO
[x] - [Criar estrutura de pastas do client](./tasks/PHASE-1/TASK-1.2.md) - CONCLUÍDO
[x] - [Criar Landing Page](./tasks/PHASE-1/TASK-1.3.md) - CONCLUÍDO
[x] - [Mover UI para client/ e implementar backend](./tasks/PHASE-1/TASK-1.11.md) - CONCLUÍDO
[x] - [Criar Chrome Extension boilerplate](./tasks/PHASE-1/TASK-1.4.md) - CONCLUÍDO
[x] - [Criar Popup da extensão (React)](./tasks/PHASE-1/TASK-1.5.md) - CONCLUÍDO
[x] - [Criar Content Script (detecção de campos OTP)](./tasks/PHASE-1/TASK-1.6.md) - CONCLUÍDO
[x] - [Criar Background Service Worker](./tasks/PHASE-1/TASK-1.7.md) - CONCLUÍDO
[x] - [Criar Dashboard básico](./tasks/PHASE-1/TASK-1.8.md) - CONCLUÍDO
[x] - [Criar API básica](./tasks/PHASE-1/TASK-1.9.md) - CONCLUÍDO
[x] - [Integrar tudo e testar](./tasks/PHASE-1/TASK-1.10.md) - CONCLUÍDO

### Status: ✅ FASE 1 CONCLUÍDA

---

## Fase 2: Production Ready 🚀

### Objetivo
Preparar o produto para produção com database real, deploy e integrações essenciais.

[x] - [Configurar PostgreSQL com Supabase](./tasks/PHASE-2/TASK-2.1.md) - CONCLUÍDO
[-] - [Implementar migrations com Prisma](./tasks/PHASE-2/TASK-2.2.md) - EM PROGRESSO
[ ] - [Migrar mock database para PostgreSQL](./tasks/PHASE-2/TASK-2.3.md) - fazer
[ ] - [Deploy frontend na Vercel](./tasks/PHASE-2/TASK-2.4.md) - fazer
[ ] - [Deploy backend na Railway](./tasks/PHASE-2/TASK-2.5.md) - fazer
[ ] - [Configurar CI/CD com GitHub Actions](./tasks/PHASE-2/TASK-2.6.md) - fazer
[ ] - [Integrar Gmail API (OAuth2)](./tasks/PHASE-2/TASK-2.7.md) - fazer
[ ] - [Implementar Stripe para pagamentos](./tasks/PHASE-2/TASK-2.8.md) - fazer
[ ] - [Publicar Chrome Extension na Web Store](./tasks/PHASE-2/TASK-2.9.md) - fazer
[ ] - [Configurar monitoring (Sentry + Plausible)](./tasks/PHASE-2/TASK-2.10.md) - fazer

---

## Notas de Refinamento

### Decisões Tomadas
1. **Privacy First**: Tudo processado localmente, sync opcional
2. **Desktop First**: Chrome Extension como produto principal
3. **Freemium**: 50 auto-fills/dia grátis, Pro $4.99/mês
4. **Dark Mode**: Design system pensado para dark mode como padrão
5. **Micro Tasks**: Tasks de no máximo 1 hora para manter foco

### Riscos Identificados
1. Chrome API pode limitar notificações → Fallback para Gmail API polling
2. Gmail API review pode demorar → Começar com notificações browser
3. Usuários podem não confiar com dados → Open-source core, transparência
4. Concorrentes podem copiar → Velocidade de execução + UX superior

### Próximos Passos
1. Iniciar Fase 1: Foundation
2. Configurar monorepo e infraestrutura
3. Criar boilerplate da Chrome Extension
4. Setup do dashboard básico
5. Implementar primeiro auto-fill funcional

---

## Métricas de Sucesso do Refinamento

- ✅ 100% das specs críticas documentadas
- ✅ Artifact visual navegável com 10 páginas
- ✅ Design system definido com componentes
- ✅ User flows mapeados (4 fluxos principais)
- ✅ Copy guide completo (landing, popup, dashboard, emails)
- ✅ Testing strategy definida
- ✅ Deployment strategy definida
- ✅ Roadmap visual com 7 fases
- ✅ Feature matrix com priorização
- ✅ Competitive analysis realizada

**Status: REFINAMENTO CONCLUÍDO ✅**
**Pronto para iniciar desenvolvimento real na Fase 1.**
