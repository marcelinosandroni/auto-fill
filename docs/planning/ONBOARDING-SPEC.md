# 🎓 Onboarding Specification

## Overview
O onboarding deve ser rápido (máximo 60 segundos), não intrusivo e mostrar valor imediatamente. O usuário deve entender o que a extensão faz e começar a usar sem fricção.

## Flow

### Trigger
- Onboarding inicia automaticamente após instalação
- Popup abre automaticamente na primeira vez
- Badge "Novo" aparece no ícone da extensão

### Step 1: Welcome (3s)
```
┌─────────────────────────────────────┐
│  🛡️ AutoFill Guardian               │
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │   [Ilustração: Escudo +       │  │
│  │    códigos sendo preenchidos] │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│  Bem-vindo ao AutoFill Guardian     │
│                                     │
│  Nunca mais perca tempo procurando  │
│  códigos OTP. Vamos configurar em   │
│  30 segundos.                       │
│                                     │
│  ┌───────────────────────────────┐  │
│  │      Começar →                │  │
│  └───────────────────────────────┘  │
│                                     │
│  Pular onboarding                   │
└─────────────────────────────────────┘
```

**Comportamento:**
- Animação de entrada: fade-in + scale-up
- Ilustração animada (códigos aparecendo)
- Botão "Começar" em destaque
- Link "Pular" discreto no rodapé
- Duração máxima: usuário decide quando avançar

---

### Step 2: Permissions (5s)
```
┌─────────────────────────────────────┐
│  🛡️ AutoFill Guardian               │
│                                     │
│  Permissões necessárias             │
│                                     │
│  Precisamos de acesso para          │
│  capturar códigos. Seus dados são   │
│  processados localmente.            │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ ✓ Ler notificações            │  │
│  │ ✓ Preencher formulários       │  │
│  │ ✓ Armazenar localmente        │  │
│  └───────────────────────────────┘  │
│                                     │
│  🔒 Privacidade first               │
│  Nada é enviado para servidores     │
│                                     │
│  ┌───────────────────────────────┐  │
│  │      Permitir acesso          │  │
│  └───────────────────────────────┘  │
│                                     │
│  ← Voltar                           │
└─────────────────────────────────────┘
```

**Comportamento:**
- Lista de permissões com ícones de check (verde)
- Mensagem de privacidade em destaque
- Botão "Permitir acesso" chama `chrome.permissions.request()`
- Se negado: mostrar mensagem explicando por que precisa
- Se permitido: avançar automaticamente após 1s
- Botão "Voltar" para retornar

---

### Step 3: Sources (10s)
```
┌─────────────────────────────────────┐
│  🛡️ AutoFill Guardian               │
│                                     │
│  De onde capturar códigos?          │
│                                     │
│  Escolha as fontes que deseja       │
│  monitorar. Você pode mudar depois. │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ 📧 Gmail                  [✓] │  │
│  │ Captura de emails             │  │
│  ├───────────────────────────────┤  │
│  │ 🔔 Notificações           [✓] │  │
│  │ Notificações do browser       │  │
│  ├───────────────────────────────┤  │
│  │ 📋 Clipboard              [ ] │  │
│  │ Monitora clipboard            │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │      Continuar                │  │
│  └───────────────────────────────┘  │
│                                     │
│  ← Voltar                           │
└─────────────────────────────────────┘
```

**Comportamento:**
- Lista de fontes com toggles
- Gmail e Notificações habilitados por padrão
- Clipboard desabilitado (mais intrusivo)
- Cada fonte mostra descrição curta
- Hover mostra mais detalhes
- Botão "Continuar" salva preferências
- Pode pular e configurar depois

---

### Step 4: Success (3s)
```
┌─────────────────────────────────────┐
│  🛡️ AutoFill Guardian               │
│                                     │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │   [Animação: Check verde +    │  │
│  │    confetes sutis]            │  │
│  │                               │  │
│  └───────────────────────────────┘  │
│                                     │
│  Tudo pronto! ✓                     │
│                                     │
│  A extensão está monitorando suas   │
│  fontes. Quando um código OTP for   │
│  detectado, ele será preenchido     │
│  automaticamente.                   │
│                                     │
│  ┌───────────────────────────────┐  │
│  │      Começar a usar           │  │
│  └───────────────────────────────┘  │
│                                     │
│  Ver tutorial                       │
└─────────────────────────────────────┘
```

**Comportamento:**
- Animação de sucesso (check + confetes sutis)
- Mensagem clara do que acontece agora
- Botão "Começar a usar" fecha popup
- Link "Ver tutorial" abre página de ajuda
- Após fechar: mostrar toast "Extensão ativa ✓"

---

## Edge Cases

### Permissão Negada
```
┌─────────────────────────────────────┐
│  ⚠️ Permissão necessária            │
│                                     │
│  Para funcionar, a extensão precisa │
│  de acesso às notificações.         │
│                                     │
│  Sem isso, não conseguimos capturar │
│  códigos automaticamente.           │
│                                     │
│  ┌───────────────────────────────┐  │
│  │      Tentar novamente         │  │
│  └───────────────────────────────┘  │
│                                     │
│  Pular por agora                    │
│  (Funcionalidade limitada)          │
└─────────────────────────────────────┘
```

### Todas as Fontes Desmarcadas
```
┌─────────────────────────────────────┐
│  ⚠️ Selecione pelo menos uma fonte │
│                                     │
│  Para capturar códigos, precisamos  │
│  monitorar pelo menos uma fonte.    │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ 📧 Gmail                  [ ] │  │
│  │ 🔔 Notificações           [ ] │  │
│  │ 📋 Clipboard              [ ] │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │      Continuar (disabled)     │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Usuário Pula Onboarding
- Marcar `onboardingCompleted: false` no storage
- Mostrar badge "?" no ícone da extensão
- Na primeira abertura do popup: mostrar botão "Ver tutorial"
- Após 3 aberturas: mostrar modal "Quer ver um tutorial rápido?"

---

## Tutorial (Pós-Onboarding)

### Acesso
- Link "Ver tutorial" no popup
- Página de ajuda: `https://autofillguardian.com/help`
- Vídeo de 60s no YouTube (embed)

### Conteúdo do Tutorial
1. **Como funciona o auto-fill** (15s)
   - Demonstração visual de código sendo preenchido
   - Explicação de detecção de campos

2. **Como usar o popup** (15s)
   - Mostrar últimas capturas
   - Copiar código manualmente
   - Revelar código mascarado

3. **Como gerenciar fontes** (15s)
   - Adicionar/remover fontes
   - Configurar Gmail
   - Ativar clipboard

4. **Dashboard e histórico** (15s)
   - Acessar dashboard
   - Ver histórico completo
   - Configurações avançadas

---

## Analytics

### Eventos para Trackear
```typescript
onboarding_started          // Usuário iniciou onboarding
onboarding_step_viewed      // Step específico visualizado
onboarding_permission_granted
onboarding_permission_denied
onboarding_sources_selected // Array de fontes escolhidas
onboarding_completed        // Finalizou com sucesso
onboarding_skipped          // Pulou em algum step
onboarding_tutorial_viewed  // Viu tutorial completo
```

### Métricas de Sucesso
- **Taxa de conclusão**: > 80% dos usuários completam onboarding
- **Tempo médio**: < 45 segundos
- **Taxa de skip**: < 20% pulam onboarding
- **Fontes ativadas**: Média de 2+ fontes por usuário

---

## A/B Testing Ideas

### Teste 1: Ilustração vs Vídeo
- **A**: Ilustração estática no step 1
- **B**: Vídeo/GIF de 5s mostrando auto-fill em ação
- **Métrica**: Taxa de conclusão

### Teste 2: Ordem das Fontes
- **A**: Gmail, Notificações, Clipboard
- **B**: Notificações, Gmail, Clipboard
- **Métrica**: Quais fontes são ativadas

### Teste 3: Mensagem de Privacidade
- **A**: "Seus dados são processados localmente"
- **B**: "100% privado. Nada sai do seu computador"
- **Métrica**: Taxa de permissão concedida
