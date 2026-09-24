#!/usr/bin/env node

/**
 * Script de setup do banco de dados
 * 
 * Este script guia o dev através do processo de configuração do banco:
 * 1. Verifica se DATABASE_URL está configurado
 * 2. Executa prisma migrate dev
 * 3. Gera o Prisma Client
 * 
 * Uso: npx tsx src/setup-database.ts
 */

import { execSync } from 'child_process';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

console.log('🗄️  Setup do Banco de Dados - AutoFill Guardian\n');

// Passo 1: Verificar DATABASE_URL
console.log('📋 Passo 1: Verificando DATABASE_URL...');
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error('❌ DATABASE_URL não configurado!');
  console.log('\n📝 Como configurar:');
  console.log('1. Acesse: https://supabase.com/dashboard/project/_/settings/database');
  console.log('2. Copie a "Connection string" (formato URI)');
  console.log('3. Adicione no server/.env:');
  console.log('   DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres');
  console.log('\n⚠️  Substitua [PASSWORD] e [PROJECT] pelos valores reais');
  process.exit(1);
}

console.log('✅ DATABASE_URL configurado\n');

// Passo 2: Verificar schema.prisma
console.log('📋 Passo 2: Verificando schema.prisma...');
const schemaPath = path.join(process.cwd(), 'prisma', 'schema.prisma');

if (!fs.existsSync(schemaPath)) {
  console.error('❌ schema.prisma não encontrado!');
  process.exit(1);
}

console.log('✅ schema.prisma encontrado\n');

// Passo 3: Executar migrations
console.log('📋 Passo 3: Executando migrations...');
console.log('⚠️  Isso pode levar alguns segundos...\n');

try {
  execSync('npx prisma migrate dev --name init', {
    stdio: 'inherit',
    cwd: process.cwd(),
  });
  console.log('\n✅ Migrations executadas com sucesso!\n');
} catch (error) {
  console.error('\n❌ Erro ao executar migrations');
  console.log('\n💡 Possíveis soluções:');
  console.log('1. Verifique se o DATABASE_URL está correto');
  console.log('2. Verifique se o banco está acessível');
  console.log('3. Tente: npx prisma migrate deploy');
  process.exit(1);
}

// Passo 4: Gerar Prisma Client
console.log('📋 Passo 4: Gerando Prisma Client...');

try {
  execSync('npx prisma generate', {
    stdio: 'inherit',
    cwd: process.cwd(),
  });
  console.log('\n✅ Prisma Client gerado com sucesso!\n');
} catch (error) {
  console.error('\n❌ Erro ao gerar Prisma Client');
  process.exit(1);
}

// Passo 5: Testar conexão
console.log('📋 Passo 5: Testando conexão...');

try {
  const { prisma } = await import('./core/database/prisma.js');
  await prisma.$connect();
  console.log('✅ Conexão com banco estabelecida!\n');
  await prisma.$disconnect();
} catch (error) {
  console.error('❌ Erro ao conectar com o banco:', error);
  process.exit(1);
}

console.log('🎉 Setup do banco concluído com sucesso!\n');
console.log('📊 Próximos passos:');
console.log('1. Execute: npm run dev');
console.log('2. O servidor iniciará com o banco configurado');
console.log('3. Teste o registro de um novo usuário');
console.log('\n📚 Documentação:');
console.log('- Prisma Docs: https://www.prisma.io/docs');
console.log('- Supabase Docs: https://supabase.com/docs');
