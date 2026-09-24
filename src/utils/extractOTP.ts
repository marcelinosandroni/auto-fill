/**
 * extractOTP - Utilitário para extrair códigos OTP
 * 
 * Função pura que extrai códigos OTP de texto.
 */

/**
 * Patterns de códigos OTP
 */
const OTP_PATTERNS = {
  numeric4: /\b\d{4}\b/,
  numeric6: /\b\d{6}\b/,
  numeric8: /\b\d{8}\b/,
  alphanumeric6: /\b[A-Z0-9]{6}\b/,
  alphanumeric8: /\b[A-Z0-9]{8}\b/,
  googleVerify: /G-\d{6}/,
};

/**
 * Extrai código OTP de um texto
 * 
 * @param text - Texto para buscar código
 * @returns Código OTP encontrado ou null
 * 
 * @example
 * extractOTP('Your code is 847291') // '847291'
 * extractOTP('Hello world') // null
 */
export function extractOTP(text: string): string | null {
  if (!text) return null;
  
  // Try Google format first
  const googleMatch = text.match(OTP_PATTERNS.googleVerify);
  if (googleMatch) {
    return googleMatch[0].replace('G-', '');
  }
  
  // Try numeric patterns (most common)
  const numeric6 = text.match(OTP_PATTERNS.numeric6);
  if (numeric6) return numeric6[0];
  
  const numeric4 = text.match(OTP_PATTERNS.numeric4);
  if (numeric4) return numeric4[0];
  
  const numeric8 = text.match(OTP_PATTERNS.numeric8);
  if (numeric8) return numeric8[0];
  
  // Try alphanumeric
  const alpha6 = text.match(OTP_PATTERNS.alphanumeric6);
  if (alpha6) return alpha6[0];
  
  const alpha8 = text.match(OTP_PATTERNS.alphanumeric8);
  if (alpha8) return alpha8[0];
  
  return null;
}

/**
 * Verifica se um texto contém um código OTP
 * 
 * @param text - Texto para verificar
 * @returns true se contém código OTP
 */
export function hasOTP(text: string): boolean {
  return extractOTP(text) !== null;
}
