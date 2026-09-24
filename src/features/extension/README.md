# 🔌 Extension Feature

Popup da extensão Chrome + content scripts.

## Estrutura
```
extension/
├── popup/
│   ├── PopupApp.tsx
│   └── components/
│       ├── PopupHeader.tsx
│       ├── PopupStats.tsx
│       ├── CaptureList.tsx
│       ├── CaptureItem.tsx
│       └── PopupFooter.tsx
├── content/
│   └── content-script.ts
├── background/
│   └── background.ts
└── README.md
```

## Segue DESIGN.md
- Popup 350x500px
- Header com logo + status
- Lista de capturas
- Indicador "monitorando"
