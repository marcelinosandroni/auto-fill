/**
 * useDi - Hook de Injeção de Dependência
 * 
 * Permite acessar serviços do DI Container em componentes React.
 * 
 * @see REACT.md - Regras de arquitetura do Frontend
 */

import { useContext } from 'react';
import { DiContext } from '@/providers/DependencyProvider';
import type { Container, ContainerKeys } from '@/core/di';

/**
 * Hook para acessar dependências do container
 * 
 * @param key - Chave do serviço no container
 * @returns Instância do serviço com type safety
 * 
 * @example
 * // Em um componente:
 * function MyComponent() {
 *   const notificationService = useDi<INotificationService>('notificationService');
 *   
 *   const handleCapture = async () => {
 *     await notificationService.capture('847291');
 *   };
 *   
 *   return <button onClick={handleCapture}>Capturar</button>;
 * }
 * 
 * @throws Error se a chave não existir no container
 */
export function useDi<T>(key: ContainerKeys): T {
  const container = useContext(DiContext);
  
  if (!(key in container)) {
    throw new Error(
      `[useDi] Service "${String(key)}" not found in DI container. ` +
      `Available services: ${Object.keys(container).join(', ')}`
    );
  }
  
  return container[key] as T;
}

/**
 * Hook para acessar o container completo
 * 
 * Útil quando precisa de múltiplos serviços ou para debug.
 * 
 * @returns Container completo
 * 
 * @example
 * function DebugComponent() {
 *   const container = useDiContainer();
 *   console.log('Available services:', Object.keys(container));
 *   return null;
 * }
 */
export function useDiContainer(): Container {
  return useContext(DiContext);
}
