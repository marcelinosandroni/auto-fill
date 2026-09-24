# 🗄️ Setup do Prisma - Guia Passo a Passo

## Pré-requisitos

Antes de começar, certifique-se de que:
- ✅ Conta no Supabase criada
- ✅ Projeto `autofill-guardian` criado no Supabase
- ✅ Credenciais do Supabase configuradas no `server/.env`

## Passo 1: Obter DATABASE_URL

1. Acesse: https://supabase.com/dashboard/project/_/settings/database
2. Em "Connection string", selecione o formato "URI"
3. Copie a string completa:
   ```
   postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres
   ```
4. Substitua:
   - `[PASSWORD]` → senha do banco (a que você definiu ao criar o projeto)
   - `[PROJECT]` → ID do seu projeto (ex: `abcdefg`)

5. Adicione no `server/.env`:
   ```bash
   DATABASE_URL=postgresql://postgres:minha-senha@db.abcdefg.supabase.co:5432/postgres
   ```

## Passo 2: Instalar Dependências

```bash
cd server
npm install
```

Isso instalará:
- `prisma` (CLI)
- `@prisma/client` (client)

## Passo 3: Executar Setup Automático

```bash
npx tsx src/setup-database.ts
```

Este script irá:
1. ✅ Verificar DATABASE_URL
2. ✅ Verificar schema.prisma
3. ✅ Executar migrations
4. ✅ Gerar Prisma Client
5. ✅ Testar conexão

## Passo 4: Verificar Tabelas no Supabase

1. Acesse: https://supabase.com/dashboard/project/_/editor
2. Você deve ver as tabelas:
   - `users`
   - `captures`

## Passo 5: Testar

```bash
npm run dev
```

O servidor iniciará com o banco configurado.

---

## 📊 Schema do Banco

### Tabela: users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  plan VARCHAR(50) DEFAULT 'FREE',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Tabela: captures
```sql
CREATE TABLE captures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(255) NOT NULL,
  source VARCHAR(50) NOT NULL,
  source_detail VARCHAR(255) NOT NULL,
  type VARCHAR(50) DEFAULT 'OTP',
  captured_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP,
  used_at TIMESTAMP,
  site VARCHAR(255),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_captures_user_id ON captures(user_id);
CREATE INDEX idx_captures_captured_at ON captures(captured_at);
```

---

## 🛠️ Comandos Úteis do Prisma

### Ver status das migrations
```bash
npx prisma migrate status
```

### Criar nova migration
```bash
npx prisma migrate dev --name nome_da_migration
```

### Aplicar migrations em produção
```bash
npx prisma migrate deploy
```

### Resetar banco (CUIDADO!)
```bash
npx prisma migrate reset
```

### Abrir Prisma Studio (UI visual)
```bash
npx prisma studio
```

### Gerar Prisma Client novamente
```bash
npx prisma generate
```

---

## 🆘 Troubleshooting

### Erro: "Can't reach database server"
- Verifique se o DATABASE_URL está correto
- Verifique se o projeto Supabase está ativo
- Aguarde alguns minutos se acabou de criar o projeto

### Erro: "Authentication failed"
- Verifique se a senha no DATABASE_URL está correta
- A senha é a que você definiu ao criar o projeto Supabase

### Erro: "P1001: Can't reach database server"
- Verifique se o banco está pausado (plano free pausa após inatividade)
- Acesse o dashboard Supabase para "wakes up" o banco

### Erro: "Migration already applied"
- Execute: `npx prisma migrate resolve --applied nome_da_migration`

---

## 📝 Próximos Passos

Após configurar o Prisma:

1. **TASK-2.3:** Migrar mock database para PostgreSQL
   - Atualizar UserRepository para usar Prisma
   - Atualizar CaptureRepository para usar Prisma
   - Remover código do mock database

2. **Testar fluxos:**
   - Register user
   - Login user
   - Create capture
   - List captures

---

**Status:** Aguardando execução do setup pelo dev
