# 🗄️ Store (Zustand)

State management global usando Zustand (Redux é lixo).

## Regras
1. **Stores por domínio** - Não criar um store gigante
2. **Imutabilidade** - Sempre retornar novo estado
3. **Actions explícitas** - Sem mutations diretas

## Exemplo
```typescript
// store/captureStore.ts
import { create } from 'zustand';

interface CaptureState {
  captures: CapturedCode[];
  addCapture: (capture: CapturedCode) => void;
}

export const useCaptureStore = create<CaptureState>((set) => ({
  captures: [],
  addCapture: (capture) => set((state) => ({ 
    captures: [capture, ...state.captures] 
  })),
}));
```
