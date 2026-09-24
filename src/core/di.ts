/**
 * DI Container - AutoFill Guardian
 * 
 * Centraliza todas as dependências da aplicação.
 * Zero React aqui - apenas instâncias de serviços.
 * 
 * @see REACT.md - Regras de arquitetura do Frontend
 */

// TODO: Fase 3 - Implementar serviços reais
// import { NotificationService } from '@/features/extension/services/NotificationService';
// import { AutofillService } from '@/features/extension/services/AutofillService';
// import { CaptureService } from '@/features/extension/services/CaptureService';

/**
 * Container de dependências
 * 
 * Adicione novos serviços aqui conforme as features forem implementadas.
 * Cada serviço deve ter uma interface (IAlgo.ts) na mesma pasta da implementação.
 * 
 * @example
 * // Uso em um componente:
 * const notificationService = useDi<INotificationService>('notificationService');
 */
export const container = {
  // Services serão adicionados conforme as features forem implementadas
  
  // Fase 3 - Extension:
  // notificationService: new NotificationService(),
  // autofillService: new AutofillService(),
  // captureService: new CaptureService(),
  
  // Fase 4 - Dashboard:
  // authService: new AuthService(),
  // historyService: new HistoryService(),
  
  // Placeholder para evitar container vazio
  _initialized: true,
};

/**
 * Tipo do container
 * Usado pelo hook useDi para type safety
 */
export type Container = typeof container;

/**
 * Chaves do container
 * Usado para validar keys no hook useDi
 */
export type ContainerKeys = keyof Container;
