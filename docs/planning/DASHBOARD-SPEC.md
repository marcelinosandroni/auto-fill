# 📊 Dashboard Spec

## Autenticação
- Email + senha (Supabase Auth)
- Google OAuth
- Magic link (passwordless)
- Sessão persistente (remember me)

## Páginas

### /dashboard (Home)
```
┌─────────────────────────────────────────┐
│ Sidebar  │  Welcome back, [Name]       │
│          │                              │
│ 📊 Home  │  ┌──────┐ ┌──────┐ ┌──────┐ │
│ 📜 Hist  │  │  12  │ │  98% │ │  3   │ │
│ 🔗 Fonts │  │Today │ │Success│ │Sources│ │
│ ⚙️ Config│  └──────┘ └──────┘ └──────┘ │
│          │                              │
│          │  Recent Activity             │
│          │  ┌─────────────────────────┐ │
│          │  │ 🔔 Gmail - Google OTP   │ │
│          │  │ **** 2 min ago ✓ Used   │ │
│          │  ├─────────────────────────┤ │
│          │  │ 🔔 Slack - Verify code  │ │
│          │  │ **** 15 min ago         │ │
│          │  └─────────────────────────┘ │
│          │                              │
│ [Avatar] │  [Quick Settings Toggle]     │
└─────────────────────────────────────────┘
```

### /dashboard/history
- Tabela/grid com todas as capturas
- Filtros: data, fonte, tipo, status (usado/expirado)
- Busca por código ou fonte
- Paginação infinita
- Click para revelar código (com confirmação)
- Export CSV (Pro only)

### /dashboard/sources
- Cards para cada fonte:
  - Gmail (conectar/desconectar)
  - Browser Notifications (toggle)
  - Clipboard Monitor (toggle)
  - Outlook (em breve)
  - Slack (em breve)
- Status: Ativo/Inativo/Erro
- Última captura de cada fonte
- Configurações específicas por fonte

### /dashboard/settings
- **Geral:**
  - Auto-fill: on/off
  - Delay antes de preencher (0-3s)
  - Som de notificação: on/off
  - Tema: dark/light/system
  
- **Segurança:**
  - Timeout de sessão (15min, 30min, 1h, 4h)
  - Criptografia local: on/off
  - Limpar histórico: agora / agendar
  
- **Notificações:**
  - Toast quando captura: on/off
  - Toast quando preenche: on/off
  - Badge count no ícone: on/off

- **Conta:**
  - Email
  - Plano atual + upgrade
  - Dispositivos conectados
  - Logout

## Componentes Reutilizáveis
- `<StatCard />` - Card de métrica
- `<ActivityItem />` - Item da timeline
- `<SourceCard />` - Card de fonte
- `<FilterBar />` - Barra de filtros
- `<CodeReveal />` - Componente que revela código com auth
- `<EmptyState />` - Estado vazio com CTA
- `<PlanBadge />` - Badge do plano (Free/Pro/Enterprise)
