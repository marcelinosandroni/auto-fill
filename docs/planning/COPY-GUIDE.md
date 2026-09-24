# ✍️ Copy Guide - AutoFill Guardian

## Tom de Voz

### Personalidade
- **Inteligente** mas não arrogante
- **Direto** mas não rude
- **Confiante** mas não presunçoso
- **Amigável** mas não informal demais

### Princípios
1. **Clareza primeiro**: Sempre priorize compreensão sobre criatividade
2. **Ação orientada**: Cada texto deve guiar o usuário para o próximo passo
3. **Empatia**: Reconheça a frustração do usuário com OTPs
4. **Concisão**: Menos é mais. Corte palavras desnecessárias.

### Evitar
- ❌ Jargão técnico excessivo
- ❌ Promessas exageradas ("revolucionário", "incrível")
- ❌ Tom infantil ou excessivamente casual
- ❌ Mensagens de erro culpando o usuário
- ❌ Textos longos sem quebra visual

---

## Landing Page

### Hero Section
```
Headline: "Nunca mais perca um código OTP"
Subheadline: "AutoFill Guardian captura e preenche automaticamente códigos de verificação do seu email, notificações e browser. Como o autofill do Android, mas para desktop."
Primary CTA: "Instalar Grátis no Chrome"
Secondary CTA: "Ver como funciona →"
```

### Social Proof
```
"Já economizou +10.000 horas de usuários"
"4.8 ⭐ na Chrome Web Store"
"1.000+ instalações"
```

### Features Section
```
🔔 Captura Inteligente
"Detecta códigos OTP em notificações, emails e clipboard automaticamente"

⚡ Auto-Fill Instantâneo
"Preenche campos de verificação na hora, sem você precisar copiar/colar"

🔒 100% Privado
"Tudo processado localmente. Seus dados nunca saem do seu computador"

📧 Multi-Source
"Gmail, Outlook, notificações do browser, clipboard — tudo em um lugar"

📊 Histórico Seguro
"Veja todos os códigos capturados, mascarados por padrão"

🔄 Sync Futuro
"Em breve: sincronize entre desktop e mobile"
```

### How It Works
```
Step 1: "Instale em 5 segundos"
"Adicione a extensão ao Chrome com um click. Sem cadastro, sem configuração."

Step 2: "Conecte suas fontes"
"Escolha de onde capturar códigos: Gmail, notificações do browser, clipboard."

Step 3: "Relaxe e trabalhe"
"Códigos são capturados e preenchidos automaticamente. Você nem percebe."
```

### Pricing Section
```
Free: "Comece grátis"
"50 auto-fills por dia, perfeito para uso casual"

Pro: "Para power users"
"Ilimitado + multi-dispositivo + histórico completo"

Enterprise: "Para times"
"API access, SSO, audit logs e suporte dedicado"
```

### FAQ
```
Q: "É seguro? Meus dados ficam protegidos?"
A: "Sim. Tudo é processado localmente no seu computador. Nenhum código é enviado para nossos servidores. Você pode até usar 100% offline."

Q: "Funciona com qualquer serviço de 2FA?"
A: "Sim. Detectamos códigos OTP numéricos (4-8 dígitos) e alfanuméricos de qualquer serviço: Google, Microsoft, AWS, GitHub, bancos, etc."

Q: "Posso usar no Firefox?"
A: "Atualmente apenas Chrome. Firefox está no roadmap para Q2 2025."

Q: "E no celular?"
A: "App mobile (Android e iOS) está planejado para Q3-Q4 2025. Por enquanto, a extensão funciona no Chrome mobile (Android)."

Q: "Como cancelo?"
A: "Cancele a qualquer momento nas configurações da extensão ou no dashboard. Sem burocracia, sem perguntas."
```

### Final CTA
```
"Pare de perder tempo com códigos OTP"
"Instale agora — é grátis"
CTA: "Add to Chrome"
```

---

## Extension Popup

### Header
```
Status (monitorando): "Monitorando"
Status (pausado): "Pausado"
Status (erro): "Erro de conexão"
```

### Empty State
```
Title: "Nenhum código capturado ainda"
Description: "A extensão está monitorando suas notificações. Quando um código OTP for detectado, ele aparecerá aqui."
```

### Capture Item
```
Source label: "De: {source}"
Code (masked): "••••••"
Code (revealed): "847291"
Timestamp: "2 min atrás" / "1h atrás" / "Ontem"
Status (used): "✓ Usado"
Status (available): "Disponível"
Status (expired): "Expirado"
```

### Actions
```
Copy button tooltip: "Copiar código"
Copy success toast: "Código copiado ✓"
Reveal button tooltip: "Revelar código"
Settings button: "Configurações"
Dashboard button: "Abrir Dashboard"
```

### Footer
```
Version: "v0.1.0"
Privacy link: "Política de Privacidade"
```

---

## Dashboard

### Navigation
```
Dashboard: "Dashboard"
History: "Histórico"
Sources: "Fontes"
Settings: "Configurações"
```

### Home Page
```
Welcome: "Bem-vindo de volta, {name}"
Stats:
  - "Capturas hoje: {count}"
  - "Taxa de sucesso: {rate}%"
  - "Fontes ativas: {count}"

Recent Activity: "Atividade Recente"
Quick Actions: "Ações Rápidas"
```

### History Page
```
Title: "Histórico de Capturas"
Search placeholder: "Buscar por código ou fonte..."
Filters:
  - "Todas as fontes"
  - "Últimos 7 dias"
  - "Usados"
  - "Expirados"

Empty state:
  Title: "Nenhum código no histórico"
  Description: "Quando a extensão capturar um código, ele aparecerá aqui."
  CTA: "Instalar extensão"
```

### Sources Page
```
Title: "Fontes de Monitoramento"
Add source button: "Adicionar fonte"

Source cards:
  Gmail: "Captura códigos de emails do Gmail"
  Browser Notifications: "Captura códigos de notificações do browser"
  Clipboard: "Monitora clipboard para códigos OTP"
  Outlook: "Em breve"
  Slack: "Em breve"

Status:
  Active: "Ativo"
  Error: "Erro de conexão"
  Disconnected: "Desconectado"
  Last sync: "Última sincronização: {time}"
```

### Settings Page
```
Title: "Configurações"

General:
  - "Auto-fill automático" (toggle)
  - "Delay antes de preencher" (0-3s slider)
  - "Som de notificação" (toggle)
  - "Tema" (dark/light/system)

Security:
  - "Timeout de sessão" (15min/30min/1h/4h)
  - "Criptografia local" (toggle)
  - "Limpar histórico" (button)

Notifications:
  - "Toast quando captura" (toggle)
  - "Toast quando preenche" (toggle)
  - "Badge no ícone" (toggle)

Account:
  - "Email: {email}"
  - "Plano: {plan}"
  - "Dispositivos: {count}"
  - "Logout" (button)
```

---

## System Messages

### Success
```
"Instalação concluída ✓"
"Código preenchido automaticamente"
"Código copiado para clipboard"
"Fonte conectada com sucesso"
"Configurações salvas"
"Histórico limpo"
```

### Error
```
"Não foi possível conectar ao Gmail. Verifique suas permissões."
"Erro ao carregar histórico. Tente novamente."
"Código expirou. Solicite um novo."
"Permissão negada. A extensão precisa de acesso para funcionar."
"Sem conexão com a internet. Dados locais disponíveis."
"Limite diário atingido. Upgrade para Pro para auto-fills ilimitados."
```

### Warning
```
"Código expira em 30 segundos"
"Fonte desconectada. Reconectar?"
"Histórico será limpo em 7 dias (plano Free)"
"Nova versão disponível. Atualize para melhor experiência."
```

### Info
```
"Monitorando {count} fontes"
"Última sincronização: {time}"
"{count} códigos capturados hoje"
"Modo incógnito ativado. Histórico não será salvo."
```

---

## Onboarding

### Step 1: Welcome
```
Title: "Bem-vindo ao AutoFill Guardian"
Description: "Nunca mais perca tempo procurando códigos OTP. Vamos configurar em 30 segundos."
CTA: "Começar →"
```

### Step 2: Permissions
```
Title: "Permissões necessárias"
Description: "Precisamos de acesso a notificações para capturar códigos. Seus dados são processados localmente."
Permissions list:
  - "✓ Ler notificações do browser"
  - "✓ Preencher formulários automaticamente"
  - "✓ Armazenar dados localmente"
CTA: "Permitir acesso"
```

### Step 3: Sources
```
Title: "De onde capturar códigos?"
Description: "Escolha as fontes que deseja monitorar. Você pode mudar depois."
Options:
  - "📧 Gmail"
  - "🔔 Notificações do browser"
  - "📋 Clipboard"
CTA: "Continuar"
```

### Step 4: Done
```
Title: "Tudo pronto!"
Description: "A extensão está monitorando suas fontes. Quando um código OTP for detectado, ele será preenchido automaticamente."
CTA: "Começar a usar"
Secondary: "Ver tutorial"
```

---

## Email Templates

### Welcome Email
```
Subject: "Bem-vindo ao AutoFill Guardian 🛡️"

Hi {name},

Obrigado por instalar o AutoFill Guardian!

A partir de agora, códigos OTP serão capturados e preenchidos automaticamente. Sem mais troca de abas, sem mais códigos expirados.

**Próximos passos:**
1. Conecte suas fontes (Gmail, notificações)
2. Teste com um código de verificação
3. Explore o dashboard para ver seu histórico

Se tiver alguma dúvida, responda este email. Estamos aqui para ajudar.

Abraços,
Time AutoFill Guardian
```

### Upgrade Prompt
```
Subject: "Você atingiu o limite de auto-fills diários"

Hi {name},

Você usou seus 50 auto-fills gratuitos de hoje. Que tal fazer upgrade para o plano Pro?

**Com o Pro você tem:**
✓ Auto-fills ilimitados
✓ Histórico completo
✓ Multi-dispositivo
✓ Suporte prioritário

Por apenas $4.99/mês, você economiza horas toda semana.

[Fazer upgrade agora]

Abraços,
Time AutoFill Guardian
```
