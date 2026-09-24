/**
 * captureStore - Zustand Store
 * 
 * Store para gerenciar capturas de códigos OTP.
 * Será expandido conforme features forem implementadas.
 */

import { create } from 'zustand';

/**
 * Interface de captura de código
 */
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

/**
 * Estado do store de capturas
 */
interface CaptureState {
  captures: CapturedCode[];
  addCapture: (capture: CapturedCode) => void;
  removeCapture: (id: string) => void;
  clearCaptures: () => void;
  getRecentCaptures: (limit?: number) => CapturedCode[];
}

/**
 * Store de capturas
 * 
 * @example
 * const { captures, addCapture } = useCaptureStore();
 * addCapture({ id: '1', code: '847291', ... });
 */
export const useCaptureStore = create<CaptureState>((set, get) => ({
  captures: [],
  
  addCapture: (capture) => set((state) => ({
    captures: [capture, ...state.captures].slice(0, 1000), // Keep last 1000
  })),
  
  removeCapture: (id) => set((state) => ({
    captures: state.captures.filter(c => c.id !== id),
  })),
  
  clearCaptures: () => set({ captures: [] }),
  
  getRecentCaptures: (limit = 50) => {
    return get().captures.slice(0, limit);
  },
}));
