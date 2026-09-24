# 🌐 Landing Page Spec

## Estrutura de Seções

### 1. Navigation Bar
- Logo (escudo + "AutoFill Guardian")
- Links: Features, Pricing, Docs
- CTA: "Download" button
- Sticky, blur background on scroll

### 2. Hero Section
```
Headline: "Nunca mais perca um código OTP"
Subheadline: "AutoFill Guardian captura e preenche automaticamente códigos de verificação do seu email, notificações e browser. Como o autofill do Android, mas para desktop."
Primary CTA: "Instalar Grátis no Chrome" (com ícone do Chrome)
Secondary CTA: "Ver como funciona →"
Visual: Mockup animado da extensão em ação
```

### 3. Social Proof Bar
- "Já salvou X horas de usuários"
- "X+ instalações"
- "⭐ 4.8 na Chrome Web Store"
(Placeholder até ter números reais)

### 4. Features Grid (3x2)
| Ícone | Título | Descrição |
|-------|--------|-----------|
| 🔔 | Captura Inteligente | Detecta códigos OTP em notificações, emails e clipboard automaticamente |
| ⚡ | Auto-Fill Instantâneo | Preenche campos de verificação na hora, sem você precisar copiar/colar |
| 🔒 | 100% Privado | Tudo processado localmente. Seus dados nunca saem do seu computador |
| 📧 | Multi-Source | Gmail, Outlook, notificações do browser, clipboard — tudo em um lugar |
| 📊 | Histórico Seguro | Veja todos os códigos capturados, mascarados por padrão |
| 🔄 | Sync Futuro | Em breve: sincronize entre desktop e mobile |

### 5. How It Works (3 Steps)
```
Step 1: "Instale em 5 segundos"
  → Ilustração: Chrome Web Store → Add to Chrome

Step 2: "Conecte suas fontes"  
  → Ilustração: Toggle Gmail, Notifications, Clipboard

Step 3: "Relaxe e trabalhe"
  → Ilustração: Código sendo preenchido automaticamente + check verde
```

### 6. Demo/Preview Section
- Vídeo/GIF da extensão em ação
- Antes vs Depois (com e sem a extensão)
- "Veja quanto tempo você economiza"

### 7. Pricing Section
| | Free | Pro | Enterprise |
|---|---|---|---|
| Preço | $0 | $4.99/mês | Custom |
| Auto-fills/dia | 50 | Ilimitado | Ilimitado |
| Fontes | 2 | Todas | Todas + API |
| Histórico | 7 dias | Ilimitado | Ilimitado + export |
| Dispositivos | 1 | 3 | Ilimitado |
| Suporte | Community | Email | Dedicated |
| CTA | "Começar Grátis" | "Upgrade Pro" | "Falar com vendas" |

### 8. FAQ Section
- "É seguro? Meus dados ficam protegidos?"
- "Funciona com qualquer serviço de 2FA?"
- "Posso usar no Firefox?"
- "E no celular?"
- "Como cancelo?"

### 9. Final CTA
- "Pare de perder tempo com códigos OTP"
- "Instale agora — é grátis"
- Botão grande "Add to Chrome"

### 10. Footer
- Logo + tagline
- Links: Product, Company, Legal, Resources
- Social: Twitter, GitHub
- Copyright + "Made with ❤️"

## Technical Requirements
- Next.js ou Vite SPA (SEO com meta tags)
- Tailwind CSS (dark mode default)
- Animações sutis com Framer Motion ou CSS
- Performance: Lighthouse > 95
- Responsivo (mobile-first)
- Analytics: Plausible ou GA4
