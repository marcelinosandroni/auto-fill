# ✅ TASK Criar Background Service Worker

> 🛑 **REGRA FIXA (Agente IA, LEIA ISSO):** 
> 1. O dev (Marcelino) tem TDAH, cegueira temporal e zero paciência pra lixo. 
> 2. Se a task inteira levar mais de 1 hora, QUEBRE EM DUAS TASKS AGORA.
> 3. Entregue o código de um passo, espere ele testar, e SÓ DEPOIS vá para o próximo. 
> 4. O nome do arquivo da TASK deve ser sempre TASK-PHASE-TASK (TASK-1.7.md)
> 5. Manter sempre na pasta tasks e subpasta phase (PHASE-1)
> 6. **PROIBIDO EDITAR ACIMA DO TRAÇO.** Você SÓ tem permissão para preencher os dados ABAIXO da linha `---`.

---

## 🎯 Objetivo da Task
Criar Background Service Worker que captura notificações e extrai códigos OTP

## 🛠️ Micro-Passos (Checklist Dopamina)
- [ ] Passo 1: Implementar extractOTP() function (regex patterns)
- [ ] Passo 2: Implementar notification listener
- [ ] Passo 3: Implementar storage management (save/get captures)
- [ ] Passo 4: Implementar message listener (comunicação com popup/content)
- [ ] Passo 5: Implementar cleanup alarm (limpar capturas expiradas)
- [ ] Passo 6: Testar captura de notificação

## 🏁 Definition of Done (Critério de Sucesso)
- [ ] Captura notificações do browser
- [ ] Extrai códigos OTP (4-8 dígitos)
- [ ] Salva no chrome.storage.local
- [ ] Comunica com popup e content script
- [ ] Limpa capturas expiradas automaticamente
