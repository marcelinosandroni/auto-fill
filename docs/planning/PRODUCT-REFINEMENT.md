# 🎨 Product Refinement Artifact

## Status: EM REFINAMENTO

---

## 1. Product Canvas

### Problem Statement
Profissionais que usam múltiplos serviços com 2FA perdem tempo valioso procurando códigos OTP em emails e notificações. Cada verificação interrompe o fluxo de trabalho, causando frustração e perda de produtividade.

### Target Users
| Persona | Descrição | Dor Principal |
|---------|-----------|---------------|
| Dev Full-Stack | Faz deploy diário com 2FA | Perde 5-10min/dia procurando códigos |
| Profissional Corp | Usa 5+ serviços com MFA | Alterna entre abas constantemente |
| Freelancer | Gerencia múltiplas contas de clientes | Codes expiram enquanto procura |
| Power User | Early adopter de tech | Quer automação total |

### Value Proposition
"AutoFill Guardian elimina a fricção de verificações 2FA, capturando e preenchendo códigos automaticamente — como o autofill do Android, mas para seu desktop."

---

## 2. Feature Matrix

### MVP (Phase 3)
| Feature | Prioridade | Complexidade | Status |
|---------|-----------|--------------|--------|
| Captura de notificações browser | P0 | Média | 📋 Spec |
| Auto-fill campos OTP | P0 | Alta | 📋 Spec |
| Popup com últimas capturas | P0 | Baixa | 📋 Spec |
| Detecção de campos input OTP | P0 | Alta | 📋 Spec |
| Histórico local (localStorage) | P1 | Baixa | 📋 Spec |
| Clipboard monitoring | P1 | Média | 📋 Spec |

### V1.1 (Phase 4)
| Feature | Prioridade | Complexidade | Status |
|---------|-----------|--------------|--------|
| Gmail API integration | P0 | Alta | 💡 Idea |
| Dashboard web | P0 | Alta | 💡 Idea |
| Auth system | P0 | Alta | 💡 Idea |
| Fontes configuráveis | P1 | Média | 💡 Idea |
| Categorias de captura | P1 | Baixa | 💡 Idea |

### V2.0 (Phase 5-6)
| Feature | Prioridade | Complexidade | Status |
|---------|-----------|--------------|--------|
| Android SMS bridge | P0 | Alta | 💡 Idea |
| iOS App | P0 | Alta | 💡 Idea |
| Cross-device sync | P1 | Alta | 💡 Idea |
| AI pattern detection | P2 | Alta | 💡 Idea |
| API pública | P2 | Média | 💡 Idea |

---

## 3. User Flows

### Flow 1: Instalação e Primeiro Uso
```
[Usuário visita landing page]
    → [Click "Instalar no Chrome"]
    → [Chrome Web Store → Install]
    → [Popup abre automaticamente]
    → [Onboarding: 3 telas explicando]
    → [Permissão para notificações]
    → [Pronto! Monitorando...]
```

### Flow 2: Captura de OTP Automática
```
[Email de verificação chega no Gmail]
    → [Extensão detecta notificação]
    → [Extrai código OTP (regex + AI)]
    → [Detecta campo OTP na aba ativa]
    → [Preenche automaticamente]
    → [Toast: "Código preenchido ✓"]
    → [Salva no histórico local]
```

### Flow 3: Manual Copy from Popup
```
[Usuário precisa de código antigo]
    → [Click no ícone da extensão]
    → [Popup mostra últimas capturas]
    → [Click no código desejado]
    → [Copia para clipboard]
    → [Popup fecha]
    → [Usuário cola onde precisa]
```

---

## 4. Technical Decisions

### Por que Chrome Extension e não App Desktop?
- ✅ Zero install friction (Chrome Web Store)
- ✅ Acesso nativo a notificações do browser
- ✅ Content scripts para auto-fill
- ✅ Cross-platform (qualquer OS com Chrome)
- ❌ Não captura SMS nativo (bridge necessária)

### Por que processamento local primeiro?
- ✅ Privacidade máxima (dados sensíveis)
- ✅ Zero latência
- ✅ Funciona offline
- ✅ Sem custo de servidor por captura
- ❌ Sem sync entre devices (V2 resolve)

### Stack Decisions
| Decisão | Escolha | Justificativa |
|---------|---------|---------------|
| Frontend | React + Vite | Velocidade, DX, ecosystem |
| Styling | Tailwind CSS | Rapidez, consistência, dark mode |
| State | Zustand | Simples, leve, sem boilerplate |
| Backend | Node.js + Express | Familiaridade, ecosystem |
| DB | PostgreSQL (Supabase) | Relacional, auth built-in, realtime |
| Extension | Chrome MV3 | Futuro-proof, service workers |

---

## 5. Competitive Analysis

| Produto | Pontos Fortes | Nossas Vantagens |
|---------|--------------|-----------------|
| Android Autofill | Nativo, SMS | Desktop + Multi-source |
| 1Password OTP | Integrado ao password manager | Gratuito, independente |
| Authy Desktop | Multi-device | Auto-fill real (não só display) |
| Raiz/2FAS | Mobile focused | Desktop-first, browser native |

### Nosso Diferencial Único
Somos a ÚNICA solução que:
1. Captura de MÚLTIPLAS fontes (email + notificações + clipboard)
2. Faz AUTO-FILL real (não só mostra o código)
3. É Desktop-first (complementa mobile, não compete)
4. É Privacy-first (tudo local, sync opcional)

---

## 6. Risks & Mitigations

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Chrome API limita notificações | Média | Alto | Fallback para Gmail API polling |
| Gmail API review demora | Alta | Médio | Começar com notificações browser |
| Concorrente copia features | Média | Baixo | Velocidade de execução + UX superior |
| Usuários não confiam com dados | Alta | Alto | Open-source core, audit, transparência |
| Google muda políticas | Baixa | Alto | Diversificar fontes, não depender de 1 |

---

## 7. Success Metrics

### MVP Metrics (3 meses pós-launch)
- [ ] 1.000 instalações na Chrome Web Store
- [ ] 4.5+ rating médio
- [ ] 60% daily active rate (instalados)
- [ ] < 2% crash rate
- [ ] NPS > 40

### V1 Metrics (6 meses)
- [ ] 10.000 instalações
- [ ] 500 usuários no dashboard
- [ ] 5% conversão free → pro
- [ ] MRR > $1.000
