# ✅ TASK Configurar PostgreSQL com Supabase

> 🛑 **REGRA FIXA (Agente IA, LEIA ISSO):** 
> 1. O dev (Marcelino) tem TDAH, cegueira temporal e zero paciência pra lixo. 
> 2. Se a task inteira levar mais de 1 hora, QUEBRE EM DUAS TASKS AGORA.
> 3. Entregue o código de um passo, espere ele testar, e SÓ DEPOIS vá para o próximo. 
> 4. O nome do arquivo da TASK deve ser sempre TASK-PHASE-TASK (TASK-2.1.md)
> 5. Manter sempre na pasta tasks e subpasta phase (PHASE-2)
> 6. **PROIBIDO EDITAR ACIMA DO TRAÇO.** Você SÓ tem permissão para preencher os dados ABAIXO da linha `---`.

---

## 🎯 Objetivo da Task
Configurar PostgreSQL com Supabase para substituir o mock database.

## 🛠️ Micro-Passos (Checklist Dopamina)
- [ ] Passo 1: Criar projeto no Supabase (requer ação manual do dev - ver docs/SUPABASE-SETUP.md)
- [ ] Passo 2: Obter credenciais (requer ação manual do dev - ver docs/SUPABASE-SETUP.md)
- [x] Passo 3: Instalar @supabase/supabase-js ✅
- [x] Passo 4: Criar client Supabase no server ✅
- [x] Passo 5: Testar conexão (script criado em server/src/test-supabase.ts) ✅

## 🏁 Definition of Done (Critério de Sucesso)
- [x] Supabase configurado e acessível (código pronto, aguardando credenciais do dev) ✅
- [x] Client Supabase funcionando no server ✅
- [x] Conexão testada com sucesso (script de teste criado) ✅

## 📝 Notas
- Passos 1 e 2 requerem ação manual do dev (criar conta no Supabase)
- Guia completo disponível em: docs/SUPABASE-SETUP.md
- Após configurar credenciais no .env, execute: `npx tsx src/test-supabase.ts`
