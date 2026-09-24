# 🛡️ AutoFill Guardian

> Chrome Extension + Mobile App que captura notificações do sistema (email, SMS, browser) e preenche automaticamente códigos OTP, tokens, links de verificação e formulários repetitivos.

## 🛑 Projeto SDD (Spec-Driven Development)

⚠️ **ATENÇÃO AGENTE DE IA (CRÍTICO):**
Você está operando em um ambiente de Desenvolvimento Guiado por Especificações.
**NÃO** inicie nenhuma análise de código, **NÃO** crie arquivos e **NÃO** sugira implementações antes de ler OBRIGATORIAMENTE o arquivo `AGENTS.md` na raiz deste projeto.

---

## 🗺️ Mapa do Cérebro (Documentação)

- 🧠 **O que é este app e stack:** [APP.md](./APP.md)
- 🎯 **O que estamos fazendo AGORA (Foco):** [specs/PLAN.md](./specs/PLAN.md)
- 🏗️ **Arquitetura Global:** [ARCHITECTURE.md](./ARCHITECTURE.md)
- 💅 **Regras do Frontend (React):** [REACT.md](./REACT.md)
- 🟢 **Regras do Backend (Node.js):** [NODE.md](./NODE.md)
- 🎨 **Design System:** [DESIGN.md](./DESIGN.md)
- 📥 **Ideias Soltas e Débito Técnico:** [specs/BACKLOG.md](./specs/BACKLOG.md)
- 🗺️ **Visão Macro:** [specs/ROADMAP.md](./specs/ROADMAP.md)

## 📁 Estrutura do Projeto

```
autofill-guardian/
├── client/          - App React + Vite (Landing + Dashboard + Extension popup)
├── server/          - API Node.js (Desacoplada)
├── docs/
│   ├── planning/    - Refinamento e artifacts do produto
│   ├── PRODUCT.md   - Visão detalhada do produto
│   └── CHANGELOG.md - Histórico de mudanças
└── specs/
    ├── PLAN.md      - Plano atual (cérebro do projeto)
    ├── BACKLOG.md   - Ideias futuras
    ├── ROADMAP.md   - Visão macro
    ├── tasks/       - Tasks por fase
    └── history/     - Fases concluídas
```

## 📊 Artifact Viewer (Atual)

O artifact viewer é uma aplicação React que mostra visualmente todo o refinamento do produto:
- **Overview** - Visão geral, problema, solução, personas
- **Features** - Matriz de features com priorização
- **Design Preview** - Mockups visuais (popup, landing, auto-fill)
- **User Flows** - Fluxos de usuário mapeados
- **Roadmap** - Timeline visual do projeto
- **Architecture** - Estrutura técnica e decisões

## 🚀 Status Atual

**Fase 0: Product Refinement** 🔄 Em progresso

Próximos passos:
1. Refinar specs da Chrome Extension
2. Refinar specs da Landing Page
3. Refinar specs do Dashboard
4. Definir specs da API
5. Iniciar Fase 1: Foundation

## 👨‍💻 Autor
[Marcelino Sandroni](https://github.com/marcelinosandroni)
