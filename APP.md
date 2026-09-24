# 🚀 AutoFill Guardian

> **Chrome Extension + Mobile App** que captura notificações do sistema (email, SMS, browser) e preenche automaticamente códigos OTP, tokens, links de verificação e formulários repetitivos. Como o autofill do Android, mas para Desktop e futuramente Mobile.

## 🏗️ Arquitetura e Regras
Este repositório segue padrões estritos de Monorepo e Vertical Slices. Agentes de IA e devs, LEIAM as regras abaixo antes de tocar em uma linha de código:

- [💅 Regras do Frontend (React/Vite) -> REACT.md](./REACT.md)
- [🧠 Regras do Backend (Node.js) -> NODE.md](./NODE.md)
- [🗺️ Visão Global -> ARCHITECTURE.md](./ARCHITECTURE.md)
- [🎨 Design System -> DESIGN.md](./DESIGN.md)

## 🛠️ Stack Principal
- **Client (UI):** React, Zustand, DI Container puro, Chrome Extension API
- **Server (API):** Node.js, Express/Fastify
- **Infra:** Vercel (landing page) + Railway (API)
- **DB:** PostgreSQL (Supabase)
- **Mobile (Futuro):** React Native

---

## 📝 Detalhes Específicos do App

### O que é
AutoFill Guardian é uma Chrome Extension (e futuramente app mobile) que monitora notificações do sistema operacional, emails, e navegador para capturar automaticamente:
- Códigos OTP/2FA
- Links de verificação
- Tokens de sessão
- Informações de formulários repetitivos
- Senhas temporárias

### Features Principais
- **Notificação Inteligente:** Captura códigos de verificação de emails, SMS (via bridge), e notificações do browser
- **Auto-Fill Automático:** Detecta campos OTP/2FA na página ativa e preenche automaticamente
- **Histórico Seguro:** Mantém log criptografado de todas as capturas
- **Dashboard Web:** Painel para ver histórico, configurações, e gerenciar dispositivos
- **Landing Page:** Página promocional com download da extensão
- **Multi-Source:** Suporte a Gmail, Outlook, notificações push, clipboard monitoring

### Integrações de Terceiros
- Chrome Extension API (notifications, storage, tabs)
- Gmail API (leitura de emails com permissão)
- Clipboard API
- Web Notifications API
- Futuro: Twilio (SMS bridge), Push Notifications

### Regras Críticas de Negócio
- O usuário NUNCA deve ver dados sensíveis em texto plano no histórico (mascarado por padrão)
- Dados são criptografados localmente antes de qualquer sync
- Free tier: 50 auto-fills/dia, Pro: ilimitado
- O extension NÃO armazena senhas mestras - apenas captura códigos temporários
- Privacidade first: tudo processado localmente, sync opcional
