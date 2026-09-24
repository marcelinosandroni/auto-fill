# 🗄️ Setup do Supabase - Guia Passo a Passo

## Passo 1: Criar Conta no Supabase

1. Acesse: https://supabase.com
2. Clique em "Start your project"
3. Faça login com GitHub (recomendado) ou email
4. Confirme seu email

## Passo 2: Criar Novo Projeto

1. Clique em "New Project"
2. Preencha:
   - **Name:** `autofill-guardian`
   - **Database Password:** (gere uma senha forte e guarde)
   - **Region:** South America (São Paulo) - mais próximo do Brasil
   - **Pricing Plan:** Free (suficiente para MVP)
3. Clique em "Create new project"
4. Aguarde ~2 minutos para o projeto ser provisionado

## Passo 3: Obter Credenciais

1. No dashboard do projeto, clique em "Settings" (ícone de engrenagem)
2. Clique em "API" no menu lateral
3. Copie:
   - **Project URL:** `https://xxxxx.supabase.co`
   - **anon public key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## Passo 4: Configurar Variáveis de Ambiente

Edite `server/.env` e adicione:

```bash
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Passo 5: Testar Conexão

```bash
cd server
npx tsx src/test-supabase.ts
```

Você deve ver:
```
✅ Conexão com Supabase estabelecida com sucesso!
ℹ️  A tabela _test não existe (esperado), mas a conexão está funcionando.
```

## Passo 6: Próximo Passo (TASK-2.2)

Agora que o Supabase está configurado, execute:

```bash
# Instalar Prisma
npm install -D prisma
npm install @prisma/client

# Inicializar Prisma
npx prisma init

# Isso criará:
# - prisma/schema.prisma
# - .env com DATABASE_URL
```

Continue com TASK-2.2: Implementar migrations com Prisma

---

## 📝 Notas Importantes

### Segurança
- **NUNCA** commite o `.env` com credenciais reais
- O `.env.example` é apenas um template
- Use variáveis de ambiente no deploy (Vercel/Railway)

### Limites do Plano Free
- 500 MB de banco de dados
- 1 GB de storage
- 2 GB de transferência/mês
- 50.000 usuários ativos/mês (Auth)
- Suficiente para MVP e primeiros usuários

### Próximas Tasks
- **TASK-2.2:** Implementar migrations com Prisma
- **TASK-2.3:** Migrar mock database para PostgreSQL
- **TASK-2.4:** Deploy frontend na Vercel
- **TASK-2.5:** Deploy backend na Railway

---

## 🆘 Troubleshooting

### Erro: "Invalid API key"
- Verifique se copiou a **anon key** corretamente
- Não use a **service_role key** (essa é secreta)

### Erro: "Connection refused"
- Verifique se o projeto está ativo no dashboard
- Aguarde alguns minutos após criar o projeto

### Erro: "Database not ready"
- O banco pode estar inicializando
- Aguarde ~2 minutos e tente novamente

---

**Status:** Aguardando configuração manual do Supabase pelo dev
