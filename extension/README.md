# AutoFill Guardian - Chrome Extension

## Instalação (Modo Desenvolvedor)

1. Abra o Chrome e navegue para `chrome://extensions/`
2. Ative o "Modo do desenvolvedor" (canto superior direito)
3. Clique em "Carregar sem compactação"
4. Selecione a pasta `extension/`
5. A extensão será instalada e aparecerá na barra de ferramentas

## Estrutura

```
extension/
├── manifest.json          # Configuração da extensão (MV3)
├── background.js          # Service Worker (captura notificações)
├── content-script.js      # Injetado nas páginas (auto-fill)
├── popup/
│   ├── popup.html         # HTML do popup
│   ├── popup.js           # Lógica do popup
│   └── popup.css          # Estilos do popup
└── icons/
    └── icon.svg           # Ícone da extensão
```

## Funcionalidades

### Background Service Worker
- Captura notificações do browser
- Extrai códigos OTP usando regex
- Salva capturas no chrome.storage.local
- Limpa capturas antigas automaticamente (24h)
- Comunica com content script para auto-fill

### Content Script
- Detecta campos OTP em páginas web
- Auto-fill automático de códigos
- Feedback visual (toast verde)
- Suporte a React/Vue/Angular (dispatch events)

### Popup
- Lista de últimas capturas
- Stats (hoje, sucesso, total)
- Click para copiar código
- Link para dashboard

## Como Testar

1. Instale a extensão (passos acima)
2. Clique no ícone da extensão na barra de ferramentas
3. O popup abrirá mostrando as capturas
4. Para testar auto-fill:
   - Vá para uma página com campo OTP (ex: login com 2FA)
   - Gere uma notificação com código OTP
   - O código será preenchido automaticamente

## Próximos Passos

- [ ] Gerar ícones PNG (16x16, 32x32, 48x48, 128x128)
- [ ] Adicionar integração com API backend
- [ ] Implementar Gmail API integration
- [ ] Adicionar página de opções (options.html)
- [ ] Publicar na Chrome Web Store

## Permissões

- `notifications` - Capturar notificações do browser
- `storage` - Salvar capturas localmente
- `activeTab` - Acessar aba ativa para auto-fill
- `clipboardWrite` - Copiar códigos para clipboard

## Privacidade

- Todos os dados são processados localmente
- Nenhum dado é enviado para servidores externos
- Capturas são armazenadas apenas no chrome.storage.local
- Dados são limpos automaticamente após 24h
