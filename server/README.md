# Server - Node.js API

> Esta pasta contém o backend do AutoFill Guardian.
> Segue as regras definidas em `NODE.md` na raiz.

## Status: 📋 Planejamento

A implementação real começará na **Fase 1: Foundation**.

## Estrutura Planejada
```
server/
├── api/            ← Routes (única pasta que sabe do Express)
│   ├── routes/
│   ├── middleware/
│   └── index.ts
├── core/           ← DB, Loggers, DI, Errors
│   ├── database/
│   ├── logger/
│   ├── errors/
│   └── di.ts
└── features/
    ├── auth/
    │   ├── domain/
    │   ├── use-cases/
    │   └── repository/
    ├── notifications/
    ├── autofill/
    ├── history/
    └── sync/
```

## Endpoints Planejados
- `/v1/auth/*` - Autenticação
- `/v1/captures/*` - Histórico de capturas
- `/v1/sources/*` - Gerenciamento de fontes
- `/v1/user/*` - Perfil e configurações
- `/v1/devices/*` - Dispositivos registrados
