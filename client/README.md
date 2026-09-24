# Client - React + Vite + Tailwind

> Esta pasta contém o frontend do AutoFill Guardian.
> Segue as regras definidas em `REACT.md` na raiz.

## Status: 📋 Planejamento

A implementação real começará na **Fase 1: Foundation**.

## Estrutura Planejada
```
client/
├── assets/
├── components/     ← UI burra (Botões, Cards, Modals)
├── core/           ← DI Container
├── features/
│   ├── landing/    ← Landing page pública
│   ├── dashboard/  ← Painel do usuário
│   ├── extension/  ← Popup + content scripts
│   └── auth/       ← Login, registro, sessão
├── hooks/
├── providers/
├── store/          ← Zustand
└── utils/
```

## Entry Points (Chrome Extension)
- `popup.html` → Popup da extensão (React app isolado)
- `options.html` → Página de configurações
- `content-script.ts` → Injetado nas páginas
- `background.ts` → Service Worker (MV3)
