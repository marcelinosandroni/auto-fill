# 🧩 Component Specifications

## Design Tokens

### Spacing Scale
```
0: 0px
1: 4px (0.25rem)
2: 8px (0.5rem)
3: 12px (0.75rem)
4: 16px (1rem)
5: 20px (1.25rem)
6: 24px (1.5rem)
8: 32px (2rem)
10: 40px (2.5rem)
12: 48px (3rem)
16: 64px (4rem)
20: 80px (5rem)
```

### Border Radius
```
none: 0px
sm: 4px (0.25rem)
md: 8px (0.5rem)
lg: 12px (0.75rem)
xl: 16px (1rem)
2xl: 24px (1.5rem)
full: 9999px
```

### Shadows
```
sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
glow-indigo: 0 0 20px 5px rgba(99, 102, 241, 0.2)
glow-emerald: 0 0 20px 5px rgba(16, 185, 129, 0.2)
```

---

## Base Components

### Button
**Variantes:**
```tsx
<Button variant="primary" size="md">Instalar</Button>
<Button variant="secondary" size="md">Configurar</Button>
<Button variant="ghost" size="sm">Cancelar</Button>
<Button variant="danger" size="md">Excluir</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- `disabled`: boolean
- `icon`: ReactNode (left icon)
- `iconRight`: ReactNode (right icon)
- `fullWidth`: boolean

**States:**
- Default: bg-indigo-600
- Hover: bg-indigo-700
- Active: bg-indigo-800
- Focus: ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-900
- Disabled: opacity-50 cursor-not-allowed
- Loading: spinner + text "Carregando..."

**Sizes:**
- sm: px-3 py-1.5 text-xs
- md: px-4 py-2 text-sm
- lg: px-6 py-3 text-base

---

### Card
**Uso:** Container para conteúdo agrupado

```tsx
<Card padding="md" hoverable>
  <Card.Header>
    <Card.Title>Últimas Capturas</Card.Title>
    <Card.Action>
      <Button variant="ghost" size="sm">Ver tudo</Button>
    </Card.Action>
  </Card.Header>
  <Card.Body>
    {/* conteúdo */}
  </Card.Body>
</Card>
```

**Props:**
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- `hoverable`: boolean (border highlight on hover)
- `bordered`: boolean (default true)

**Visual:**
- bg-slate-800/50
- border border-slate-700/50
- rounded-xl
- Hover (se hoverable): border-indigo-500/30

---

### Input
**Variantes:**
```tsx
<Input type="text" placeholder="Buscar..." />
<Input type="email" label="Email" error="Email inválido" />
<Input type="password" label="Senha" />
```

**Props:**
- `label`: string
- `error`: string
- `helperText`: string
- `icon`: ReactNode (left icon)
- `iconRight`: ReactNode (right icon, ex: eye toggle)
- `size`: 'sm' | 'md' | 'lg'

**States:**
- Default: border-slate-700
- Focus: border-indigo-500 ring-2 ring-indigo-500/20
- Error: border-red-500 ring-2 ring-red-500/20
- Disabled: opacity-50 cursor-not-allowed

---

### Badge
**Uso:** Indicadores de status, contadores

```tsx
<Badge variant="success">Ativo</Badge>
<Badge variant="warning">Expirando</Badge>
<Badge variant="error">Erro</Badge>
<Badge variant="info">Novo</Badge>
<Badge variant="neutral">Pendente</Badge>
```

**Props:**
- `variant`: 'success' | 'warning' | 'error' | 'info' | 'neutral'
- `size`: 'sm' | 'md'
- `dot`: boolean (mostra dot antes do texto)

**Visual:**
- sm: px-2 py-0.5 text-xs
- md: px-2.5 py-1 text-sm
- Rounded: rounded-full
- Background: variant/10 opacity
- Text: variant/400 color
- Border: variant/20 border

---

### Toast
**Uso:** Notificações temporárias

```tsx
toast.success('Código preenchido ✓')
toast.error('Não foi possível conectar ao Gmail')
toast.warning('Código expira em 30s')
toast.info('Nova versão disponível')
```

**Props:**
- `type`: 'success' | 'error' | 'warning' | 'info'
- `duration`: number (ms, default 3000)
- `action`: { label: string, onClick: () => void }
- `dismissible`: boolean

**Visual:**
- Position: top-right (dashboard) / top-center (popup)
- Width: max-w-sm
- Background: slate-800
- Border: type-specific (emerald/red/amber/blue)
- Icon: type-specific (check/x/alert/info)
- Animation: slide-in from top, fade-out

---

### Modal
**Uso:** Diálogos de confirmação, formulários

```tsx
<Modal open={isOpen} onClose={handleClose} size="md">
  <Modal.Header>
    <Modal.Title>Confirmar exclusão</Modal.Title>
    <Modal.Close />
  </Modal.Header>
  <Modal.Body>
    <p>Tem certeza que deseja excluir este item?</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="ghost" onClick={handleClose}>Cancelar</Button>
    <Button variant="danger" onClick={handleConfirm}>Excluir</Button>
  </Modal.Footer>
</Modal>
```

**Props:**
- `open`: boolean
- `onClose`: () => void
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `closeOnOverlayClick`: boolean (default true)
- `closeOnEscape`: boolean (default true)

**Visual:**
- Overlay: bg-black/50 backdrop-blur-sm
- Modal: bg-slate-800 border border-slate-700 rounded-2xl
- Animation: fade-in overlay, scale-up modal
- Focus trap: sim
- Scroll lock: sim

---

## Feature Components

### CaptureItem
**Uso:** Item da lista de capturas (popup e dashboard)

```tsx
<CaptureItem
  source="gmail"
  sourceDetail="noreply@google.com"
  code="847291"
  capturedAt={Date.now() - 120000}
  used={true}
  onCopy={handleCopy}
  onReveal={handleReveal}
/>
```

**Visual:**
- Container: p-3 rounded-lg bg-slate-800/50 border border-slate-700/50
- Hover: border-indigo-500/30
- Source icon: 24x24 rounded-full bg-slate-700
- Code: font-mono text-lg text-emerald-400 (revelado) ou •••••• (mascarado)
- Timestamp: text-xs text-slate-500
- Status badge: "Usado" (emerald) ou "Disponível" (indigo)
- Actions: Copy button (hover), Reveal button (hover)

---

### SourceCard
**Uso:** Card de fonte de monitoramento (dashboard)

```tsx
<SourceCard
  type="gmail"
  name="Gmail"
  description="Captura códigos de emails do Gmail"
  enabled={true}
  status="active"
  lastSync={Date.now() - 300000}
  onToggle={handleToggle}
  onConfigure={handleConfigure}
/>
```

**Visual:**
- Container: p-5 rounded-xl bg-slate-800/50 border border-slate-700/50
- Icon: 40x40 rounded-xl bg-gradient-to-br (type-specific)
- Header: flex items-center justify-between
- Title: font-semibold text-white
- Description: text-sm text-slate-400
- Toggle: switch component (indigo-600 when on)
- Status badge: "Ativo" (emerald) / "Erro" (red) / "Desconectado" (slate)
- Last sync: text-xs text-slate-500

---

### StatCard
**Uso:** Card de métrica (dashboard home)

```tsx
<StatCard
  label="Capturas hoje"
  value={12}
  trend={+3}
  trendLabel="vs ontem"
  icon={<BellIcon />}
  color="indigo"
/>
```

**Visual:**
- Container: p-5 rounded-xl bg-slate-800/50 border border-slate-700/50
- Icon: 32x32 rounded-lg bg-{color}-500/10 text-{color}-400
- Label: text-xs text-slate-400 uppercase tracking-wider
- Value: text-3xl font-bold text-white
- Trend: flex items-center gap-1 (green/red arrow + text)

---

### OTPDisplay
**Uso:** Display de código OTP (popup, dashboard)

```tsx
<OTPDisplay
  code="847291"
  masked={false}
  expiresAt={Date.now() + 180000}
  onCopy={handleCopy}
  size="lg"
/>
```

**Props:**
- `code`: string
- `masked`: boolean
- `expiresAt`: number (timestamp)
- `onCopy`: () => void
- `size`: 'sm' | 'md' | 'lg'

**Visual:**
- Container: bg-slate-900 border-2 border-emerald-500 rounded-lg
- Code: font-mono text-{size} text-emerald-400 tracking-wider
- Masked: •••••• (text-slate-500)
- Countdown: text-xs text-amber-400 (se expiresAt)
- Copy button: absolute right-2 top-1/2 -translate-y-1/2
- Animation: pulse-glow when new

---

### FilterBar
**Uso:** Barra de filtros (dashboard history)

```tsx
<FilterBar
  filters={[
    { key: 'source', label: 'Fonte', options: [...] },
    { key: 'type', label: 'Tipo', options: [...] },
    { key: 'date', label: 'Data', type: 'date-range' },
  ]}
  onFilterChange={handleFilterChange}
  onClear={handleClear}
/>
```

**Visual:**
- Container: flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl
- Filter chips: px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600
- Active filter: bg-indigo-500/20 text-indigo-300 border border-indigo-500/30
- Clear button: text-xs text-slate-400 hover:text-white
- Dropdown: absolute bg-slate-800 border border-slate-700 rounded-lg shadow-xl

---

### EmptyState
**Uso:** Estado vazio de listas/páginas

```tsx
<EmptyState
  icon={<InboxIcon />}
  title="Nenhum código capturado ainda"
  description="A extensão está monitorando suas notificações. Quando um código OTP for detectado, ele aparecerá aqui."
  action={
    <Button variant="primary">Conectar Gmail</Button>
  }
/>
```

**Visual:**
- Container: flex flex-col items-center justify-center py-12
- Icon: 64x64 rounded-full bg-slate-800 flex items-center justify-center text-slate-500
- Title: text-lg font-semibold text-white
- Description: text-sm text-slate-400 text-center max-w-md
- Action: mt-4

---

### LoadingSkeleton
**Uso:** Placeholder durante carregamento

```tsx
<LoadingSkeleton variant="card" count={3} />
<LoadingSkeleton variant="list" count={5} />
<LoadingSkeleton variant="table" rows={10} />
```

**Visual:**
- Background: bg-slate-700/50
- Animation: shimmer (linear-gradient moving left to right)
- Variants:
  - card: rounded-xl h-32
  - list: rounded-lg h-16
  - table: rounded h-12

---

## Extension-Specific Components

### PopupHeader
**Uso:** Header do popup da extensão

```tsx
<PopupHeader
  status="monitoring"
  captureCount={12}
/>
```

**Visual:**
- Container: p-4 bg-gradient-to-r from-indigo-600 to-purple-600
- Logo: 32x32 rounded-xl bg-white/10
- Title: font-bold text-white
- Status: flex items-center gap-1.5
  - Dot: w-2 h-2 rounded-full bg-emerald-400 animate-pulse
  - Text: text-xs text-emerald-200 "Monitorando"

### PopupStats
**Uso:** Grid de estatísticas no popup

```tsx
<PopupStats
  today={12}
  successRate={98}
  activeSources={3}
/>
```

**Visual:**
- Container: grid grid-cols-3 gap-px bg-slate-700/50
- Item: bg-slate-800 p-3 text-center
- Value: text-lg font-bold text-{color}-400
- Label: text-xs text-slate-400
