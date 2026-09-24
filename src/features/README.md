# 🎨 Features

Diretório principal de features seguindo **Feature Slices** do REACT.md.

Cada feature é um domínio auto-contido com:
- Componentes
- Hooks
- Services
- Types
- Utils (se necessário)

## Features Atuais

### `landing/`
Landing page pública do AutoFill Guardian.

### `dashboard/`
Painel do usuário (histórico, configurações, fontes).

### `extension/`
Popup da extensão Chrome + content scripts.

### `auth/`
Login, registro, sessão do usuário.

## Regras
1. **Interface junto da implementação** - Não criar pasta global de types
2. **Feature não importa outra feature** - Use `core/` para compartilhados
3. **Componentes não instanciam serviços** - Use hook `useDi`
