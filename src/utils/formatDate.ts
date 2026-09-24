/**
 * formatDate - Utilitário para formatar datas
 * 
 * Função pura que formata timestamps em texto relativo.
 */

/**
 * Formata timestamp em texto relativo
 * 
 * @param timestamp - Timestamp em milliseconds
 * @returns Texto relativo (ex: "2 min atrás", "1h atrás")
 * 
 * @example
 * formatDate(Date.now() - 120000) // "2 min atrás"
 */
export function formatDate(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (seconds < 60) return 'Agora';
  if (minutes < 60) return `${minutes} min atrás`;
  if (hours < 24) return `${hours}h atrás`;
  if (days < 7) return `${days}d atrás`;
  
  // Fallback para data completa
  const date = new Date(timestamp);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

/**
 * Formata timestamp em data completa
 * 
 * @param timestamp - Timestamp em milliseconds
 * @returns Data formatada (ex: "24/09/2024 14:30")
 */
export function formatFullDate(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
