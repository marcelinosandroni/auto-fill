import { create } from 'zustand';

export interface CapturedCode {
  id: string;
  code: string;
  source: 'notification' | 'email' | 'clipboard';
  sourceDetail: string;
  capturedAt: number;
  expiresAt?: number;
  usedAt?: number;
  site?: string;
  type: 'otp' | 'token' | 'link' | 'password';
}

interface CaptureState {
  captures: CapturedCode[];
  addCapture: (capture: CapturedCode) => void;
  removeCapture: (id: string) => void;
  clearCaptures: () => void;
  getRecentCaptures: (limit?: number) => CapturedCode[];
}

export const useCaptureStore = create<CaptureState>((set, get) => ({
  captures: [],
  
  addCapture: (capture) => set((state) => ({
    captures: [capture, ...state.captures].slice(0, 1000),
  })),
  
  removeCapture: (id) => set((state) => ({
    captures: state.captures.filter(c => c.id !== id),
  })),
  
  clearCaptures: () => set({ captures: [] }),
  
  getRecentCaptures: (limit = 50) => {
    return get().captures.slice(0, limit);
  },
}));
