# 🟢 NODE.JS DOCS (BACKEND)

Arquitetura baseada em **Vertical Slices**. Esqueça as camadas MVC tradicionais. Foco total no domínio.

## 📂 ESTRUTURA
`server/`
├── `api/`        - A única pasta que sabe que existe Express/Fastify.
├── `core/`       - DB, Loggers, DI, Errors.
└── `features/`   - 🌟 Agrupamento por regra de negócio.

## 🧠 REGRAS
1. **Desacoplamento:** O `use-case` NUNCA recebe `req` ou `res`. Ele recebe dados puros e retorna dados puros.
2. **Isolamento:** Uma `feature` não importa a outra. Usem o `core` para coisas compartilhadas.
3. **TypeScript strict mode** sempre ativo.
4. **Zod** para validação de input nos controllers.

## 💻 EXEMPLO: USE CASE PURO
```typescript
// server/features/notifications/use-cases/CaptureOTPUseCase.ts
import { INotificationRepository } from '../domain/INotificationRepository';

export class CaptureOTPUseCase {
  constructor(private repo: INotificationRepository) {}

  async execute(source: string, code: string, expiresAt: Date) {
    if (!code) throw new Error("Code is required");
    // Lógica de captura e armazenamento criptografado
    return this.repo.save(source, code, expiresAt);
  }
}
```

## 🗄️ FEATURES (DOMÍNIOS)
- `auth/` - Autenticação, JWT, sessions
- `notifications/` - Captura e processamento de notificações
- `autofill/` - Lógica de auto-preenchimento
- `history/` - Histórico de capturas do usuário
- `sync/` - Sincronização entre dispositivos
