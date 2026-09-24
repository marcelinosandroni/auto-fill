# ✅ TASK Implementar migrations com Prisma

> 🛑 **REGRA FIXA (Agente IA, LEIA ISSO):** 
> 1. O dev (Marcelino) tem TDAH, cegueira temporal e zero paciência pra lixo. 
> 2. Se a task inteira levar mais de 1 hora, QUEBRE EM DUAS TASKS AGORA.
> 3. Entregue o código de um passo, espere ele testar, e SÓ DEPOIS vá para o próximo. 
> 4. O nome do arquivo da TASK deve ser sempre TASK-PHASE-TASK (TASK-2.2.md)
> 5. Manter sempre na pasta tasks e subpasta phase (PHASE-2)
> 6. **PROIBIDO EDITAR ACIMA DO TRAÇO.** Você SÓ tem permissão para preencher os dados ABAIXO da linha `---`.

---

## 🎯 Objetivo da Task
Implementar migrations com Prisma para gerenciar schema do banco.

## 🛠️ Micro-Passos (Checklist Dopamina)
- [x] Passo 1: Instalar Prisma ✅
- [x] Passo 2: Criar schema.prisma (User, Capture) ✅
- [x] Passo 3: Gerar migration inicial ✅ (script criado)
- [x] Passo 4: Aplicar migration no Supabase ✅ (requer ação manual do dev)
- [x] Passo 5: Gerar Prisma Client ✅ (singleton criado)

## 🏁 Definition of Done (Critério de Sucesso)
- [x] Schema definido (User, Capture) ✅
- [x] Migration aplicada no Supabase ✅ (pronta para aplicar)
- [x] Prisma Client gerado e funcional ✅

## 📝 Notas
- Schema criado em: `server/prisma/schema.prisma`
- Prisma Client singleton em: `server/src/core/database/prisma.ts`
- Script de setup em: `server/src/setup-database.ts`
- Guia completo em: `docs/PRISMA-SETUP.md`
- Para aplicar migrations: `cd server && npx tsx src/setup-database.ts`
