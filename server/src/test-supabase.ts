import { supabase } from '../core/database/supabase.js';

async function testConnection() {
  console.log('🔌 Testando conexão com Supabase...\n');

  try {
    // Testar conexão básica
    const { data, error } = await supabase.from('_test').select('*').limit(1);

    if (error) {
      // Se a tabela não existir, ainda significa que a conexão funcionou
      if (error.message.includes('does not exist') || error.code === '42P01') {
        console.log('✅ Conexão com Supabase estabelecida com sucesso!');
        console.log('ℹ️  A tabela _test não existe (esperado), mas a conexão está funcionando.');
        console.log('\n📋 Próximos passos:');
        console.log('1. Execute: npx prisma init');
        console.log('2. Configure o schema.prisma');
        console.log('3. Execute: npx prisma migrate dev');
        return true;
      }
      
      console.error('❌ Erro ao conectar com Supabase:', error.message);
      return false;
    }

    console.log('✅ Conexão com Supabase estabelecida com sucesso!');
    console.log('✅ Tabelas acessíveis');
    return true;
  } catch (error) {
    console.error('❌ Erro inesperado:', error);
    return false;
  }
}

testConnection().then((success) => {
  process.exit(success ? 0 : 1);
});
