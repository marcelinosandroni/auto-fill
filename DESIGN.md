# 🎨 DESIGN SYSTEM - AutoFill Guardian

## Identidade Visual

### Conceito
Segurança + Automação + Confiança. O design transmite que seus dados estão protegidos enquanto a mágica acontece automaticamente.

### Paleta de Cores
```
Primary:     #6366F1 (Indigo) - Confiança, tecnologia
Secondary:   #10B981 (Emerald) - Sucesso, automação funcionando
Accent:      #F59E0B (Amber) - Alertas, notificações
Background:  #0F172A (Slate 900) - Dark mode first
Surface:     #1E293B (Slate 800) - Cards, modais
Text:        #F8FAFC (Slate 50) - Texto principal
Muted:       #94A3B8 (Slate 400) - Texto secundário
Danger:      #EF4444 (Red) - Erros, exclusões
```

### Tipografia
- **Headings:** Inter, 700 weight
- **Body:** Inter, 400 weight
- **Mono:** JetBrains Mono (para códigos OTP)

### Componentes Principais

#### Botões
- Primary: bg-indigo-600, hover:bg-indigo-700, rounded-lg, shadow
- Secondary: bg-slate-700, hover:bg-slate-600, border border-slate-600
- Ghost: transparent, hover:bg-slate-800
- Danger: bg-red-600, hover:bg-red-700

#### Cards
- bg-slate-800, rounded-xl, border border-slate-700, p-6
- Hover: border-indigo-500/50, shadow-lg shadow-indigo-500/10

#### Notificações/OTP Display
- bg-slate-900, border-2 border-emerald-500, rounded-lg
- Fonte mono grande para o código
- Countdown timer visual

#### Popup da Extensão (350x500px)
- Header com logo + status
- Lista de últimas capturas
- Botão de settings rápido
- Indicador de "monitorando"

### Animações
- Fade-in para notificações capturadas
- Pulse suave no indicador de "monitorando"
- Slide-up para o popup
- Copy feedback: flash verde + "Copiado!"

### Ícones
- Lucide React icons
- Shield (segurança)
- Bell (notificações)
- Zap (automação)
- Eye/EyeOff (mostrar/ocultar códigos)
- Copy (copiar para clipboard)
- Clock (histórico)

## Landing Page Layout

### Hero Section
- Background: gradiente escuro com partículas sutis
- Headline: "Nunca mais perca um código OTP"
- Subheadline: "AutoFill Guardian captura e preenche automaticamente códigos de verificação do seu email, notificações e browser."
- CTA: "Instalar no Chrome" (botão primary grande)
- Secondary CTA: "Ver como funciona" (ghost button)
- Mockup: screenshot da extensão em ação

### Features Section
- Grid 3 colunas com cards
- Cada card: ícone + título + descrição curta
- Features: Captura Inteligente, Auto-Fill Instantâneo, Histórico Seguro, Multi-Source, Privacidade Total, Sync entre dispositivos

### How It Works
- 3 passos visuais com ilustrações
- 1. Instale a extensão
- 2. Conecte suas fontes (Gmail, notificações)
- 3. Relaxa - códigos são preenchidos automaticamente

### Pricing Section
- Free: 50 auto-fills/dia, 1 dispositivo
- Pro ($4.99/mês): Ilimitado, multi-dispositivo, prioridade
- Enterprise: API access, SSO, audit logs

### Footer
- Links: Privacy, Terms, Support, Blog
- Social: Twitter, GitHub
- "Made with ❤️ for productivity nerds"

## Dashboard Layout

### Sidebar
- Logo
- Nav: Dashboard, Histórico, Fontes, Configurações
- User avatar + status no bottom

### Dashboard Home
- Stats cards: Capturas hoje, Taxa de sucesso, Fontes ativas
- Timeline das últimas capturas
- Quick actions

### Histórico
- Lista com filtros (data, fonte, tipo)
- Cada item: ícone da fonte, código mascarado, timestamp, status
- Click para revelar (com autenticação)

### Fontes (Sources)
- Cards para cada fonte conectada
- Gmail, Outlook, Notificações, Clipboard
- Toggle on/off + status
- "Adicionar fonte" button

### Configurações
- Geral: Auto-fill on/off, delay, som
- Segurança: Criptografia, timeout de sessão
- Notificações: Quais alertas mostrar
- Conta: Email, plano, logout
