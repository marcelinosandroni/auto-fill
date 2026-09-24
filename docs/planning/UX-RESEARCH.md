# 🔬 UX Research & Decisions

## Research Assumptions (a validar)

### Dores do Usuário (Hipóteses)
1. **Tempo perdido com OTPs**: Usuários gastam 3-10 minutos/dia procurando códigos
2. **Context switching**: Alternar entre email/app e site de verificação quebra o fluxo
3. **Timeout anxiety**: Medo de o código expirar enquanto procura
4. **Multiple accounts**: Gerenciar OTPs de diferentes serviços simultaneamente
5. **Security concern**: Códigos OTP visíveis em notificações do sistema

### Jobs-to-be-Done
```
"When I'm deploying code and need to enter a 2FA code,
I want the code to be automatically filled in,
So I can maintain my flow and not lose focus."
```

```
"When I receive a verification email while working,
I want the extension to capture the code silently,
So I don't have to switch contexts to find it."
```

```
"When I need a code I received 10 minutes ago,
I want to quickly find it in a history list,
So I don't have to search through my email."
```

---

## UX Principles

### 1. Invisible Until Needed
A extensão não deve competir pela atenção do usuário. Ela trabalha em silêncio e só aparece quando é útil.

**Implicações de Design:**
- Badge no ícone mostra apenas quando há código capturado
- Toast de confirmação dura 2s e desaparece
- Popup não mostra "você tem 0 capturas" — mostra "Nenhuma captura recente"
- Auto-fill acontece sem pedir permissão (se campo for detectado com confiança > 80%)

### 2. Trust Through Transparency
O usuário precisa entender o que a extensão está fazendo, sem que isso seja intrusivo.

**Implicações de Design:**
- Indicador "Monitorando" sempre visível no popup
- Log de atividades recente no popup
- "De onde veio esse código?" sempre visível
- Toggle claro para cada fonte de monitoramento

### 3. Zero Configuration First
A extensão deve funcionar imediatamente após instalar. Configurações avançadas são opcionais.

**Implicações de Design:**
- Onboarding de 3 telas máximo
- Padrões inteligentes de detecção (não pede para o usuário configurar regex)
- Auto-fill funciona em campos padrão sem configuração
- "Configurações" fica escondido — só aparece se o usuário procurar

### 4. Forgive by Default
Se algo falhar, o usuário não deve ser punido. Sempre oferecer fallback.

**Implicações de Design:**
- Se auto-fill falhar → código fica disponível no popup para copiar manualmente
- Se notificação não for capturada → usuário pode colar manualmente
- Se campo não for detectado → toast sugere "Copiar código" em vez de falhar silenciosamente
- Histórico nunca é perdido (mesmo offline)

---

## UX Patterns

### Notification Hierarchy
```
Level 1: Auto-fill happened (toast verde, 2s)
  → "Código preenchido ✓"
  
Level 2: Code captured, waiting for field (badge no ícone)
  → Badge com número de códigos disponíveis
  
Level 3: Code about to expire (toast amber, 5s)
  → "Código expira em 30s — copiar?"
  
Level 4: Error/Warning (toast vermelho, persistente)
  → "Não foi possível conectar ao Gmail"
```

### Empty States
| Contexto | Mensagem | CTA |
|----------|----------|-----|
| Popup sem capturas | "Nenhum código capturado ainda" | "A extensão está monitorando suas notificações" |
| Dashboard sem histórico | "Seu histórico está vazio" | "Instale a extensão para começar" |
| Sem fontes conectadas | "Nenhuma fonte ativa" | "Conectar Gmail" / "Ativar notificações" |
| Busca sem resultados | "Nenhum resultado encontrado" | "Tentar outra busca" |
| Offline | "Sem conexão" | "Dados locais disponíveis" |

### Loading States
- **Popup**: Skeleton de 3 items + shimmer
- **Dashboard**: Skeleton cards + shimmer
- **Auto-fill**: Pulse verde no campo (200ms)
- **Sync**: Spinner discreto no header

### Error States
- **Inline**: Borda vermelha + mensagem abaixo do campo
- **Toast**: Slide-in do topo, fundo vermelho escuro, ícone + mensagem + dismiss
- **Full page**: Ilustração + mensagem + CTA de retry
- **Banner**: Barra fixa no topo para erros persistentes (ex: "Gmail desconectado")

---

## Accessibility (WCAG 2.1 AA)

### Cores
- Contraste mínimo 4.5:1 para texto normal
- Contraste mínimo 3:1 para texto grande
- Nunca usar cor como único indicador (sempre + ícone/texto)
- Estados de foco visíveis (ring-2 ring-indigo-500)

### Keyboard Navigation
- Popup: Tab order lógico (header → stats → lista → footer)
- Dashboard: Skip links, focus trap em modais
- Todos os botões acessíveis via keyboard
- Escape fecha popup/modais

### Screen Reader
- ARIA labels em todos os ícones
- Live regions para toasts
- Role="alert" para erros
- Status announcements para auto-fill

### Motion
- Respeita `prefers-reduced-motion`
- Animações máx 300ms
- Sem conteúdo piscante (>3x por segundo)
- Transições usam ease-out (natural)

---

## Responsiveness

### Breakpoints
```
Mobile:  < 640px  (sm)
Tablet:  640-1024px (md)
Desktop: > 1024px (lg)
Wide:    > 1280px (xl)
```

### Dashboard Responsive
| Elemento | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Sidebar | Bottom nav | Collapsed (icons) | Full sidebar |
| Stats cards | Stack vertical | 2 col grid | 3 col grid |
| History table | Card list | Compact table | Full table |
| Filters | Bottom sheet | Inline dropdown | Inline + sidebar |

### Extension Popup
- Fixo em 350x500px (Chrome requirement)
- Não responsivo (tamanho fixo)
- Scroll interno se lista for longa

### Landing Page
- Mobile-first design
- Hero: stack vertical → side by side
- Features: 1 col → 2 col → 3 col
- Pricing: stack → side by side
- Footer: stack → grid
