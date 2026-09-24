import { useContext } from 'react';
import { DiContext } from '@/providers/DependencyProvider';
import type { Container, ContainerKeys } from '@/core/di';

export function useDi<T>(key: ContainerKeys): T {
  const container = useContext(DiContext);
  
  if (!(key in container)) {
    throw new Error(
      `[useDi] Service "${String(key)}" not found in DI container.`
    );
  }
  
  return container[key] as T;
}

export function useDiContainer(): Container {
  return useContext(DiContext);
}
