import { createContext, type ReactNode } from 'react';
import { container, type Container } from '@/core/di';

export const DiContext = createContext<Container>(container);

interface DependencyProviderProps {
  children: ReactNode;
  value?: Container;
}

export function DependencyProvider({ children, value = container }: DependencyProviderProps) {
  return (
    <DiContext.Provider value={value}>
      {children}
    </DiContext.Provider>
  );
}
