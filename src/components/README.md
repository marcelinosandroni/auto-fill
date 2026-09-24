# 🧩 Components (UI Burra)

Componentes de UI reutilizáveis e "burros" (sem lógica de negócio).

Seguindo DESIGN.md:
- Botões (Primary, Secondary, Ghost, Danger)
- Cards
- Inputs
- Badges
- Toasts
- Modals

## Regras
1. **Sem lógica de negócio** - Apenas apresentação
2. **Props bem tipadas** - TypeScript strict
3. **Tailwind CSS** - Sem CSS modules
4. **Acessível** - ARIA labels, keyboard navigation

## Exemplo
```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Instalar
</Button>
```
