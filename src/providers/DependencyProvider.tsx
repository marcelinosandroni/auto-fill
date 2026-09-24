/**
 * DependencyProvider - AutoFill Guardian
 * 
 * Provider React para injetar o DI Container na árvore de componentes.
 * 
 * @see REACT.md - Regras de arquitetura do Frontend
 */

import { createContext, type ReactNode } from 'react';
import { container, type Container } from '@/core/di';

/**
 * Context do DI Container
 * 
 * Usa o container como valor padrão.
 * Pode ser sobrescrito em testes ou sub-apps.
 */
export const DiContext = createContext<Container>(container);

/**
 * Props do DependencyProvider
 */
interface DependencyProviderProps {
  children: ReactNode;
  /**
   * Container customizado (opcional)
   * Usado em testes ou para sobrescrever dependências
   */
  value?: Container;
}

/**
 * DependencyProvider
 * 
 * Envolve a aplicação e disponibiliza o DI Container via Context.
 * 
 * @example
 * // Em main.tsx:
 * <DependencyProvider>
 *   <App />
 * </DependencyProvider>
 * 
 * @example
 * // Em testes:
 * const mockContainer = { ...container, notificationService: mockService };
 * <DependencyProvider value={mockContainer}>
 *   <Component />
 * </DependencyProvider>
 */
export function DependencyProvider({ children, value = container }: DependencyProviderProps) {
  return (
    <DiContext.Provider value={value}>
      {children}
    </DiContext.Provider>
  );
}
