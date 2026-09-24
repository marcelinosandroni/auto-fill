export default function CopyPreview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Copy Preview</h1>
        <p className="text-slate-400">Preview de todos os textos e mensagens do sistema</p>
      </div>

      {/* Landing Page Copy */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">🌐 Landing Page</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Hero Headline</span>
            <p className="text-2xl font-bold text-white">Nunca mais perca um código OTP</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Hero Subheadline</span>
            <p className="text-base text-slate-300">
              AutoFill Guardian captura e preenche automaticamente códigos de verificação do seu email, notificações e browser. Como o autofill do Android, mas para desktop.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Primary CTA</span>
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl">
              Instalar Grátis no Chrome
            </button>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Secondary CTA</span>
            <button className="px-6 py-3 text-slate-300 font-medium rounded-xl border border-slate-700">
              Ver como funciona →
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <span className="text-xs text-slate-500 mb-2 block">Feature Title</span>
              <p className="text-sm font-semibold text-white mb-1">🔔 Captura Inteligente</p>
              <p className="text-xs text-slate-400">Detecta códigos OTP em notificações, emails e clipboard automaticamente</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <span className="text-xs text-slate-500 mb-2 block">How It Works Step</span>
              <p className="text-sm font-semibold text-white mb-1">Step 1: Instale em 5 segundos</p>
              <p className="text-xs text-slate-400">Adicione a extensão ao Chrome com um click. Sem cadastro, sem configuração.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Extension Popup Copy */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">🔌 Extension Popup</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Status Labels</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Monitorando</span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Pausado</span>
              <span className="px-2.5 py-1 text-xs rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Erro de conexão</span>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Empty State</span>
            <div className="text-center py-4">
              <p className="text-sm font-semibold text-white mb-1">Nenhum código capturado ainda</p>
              <p className="text-xs text-slate-400">A extensão está monitorando suas notificações. Quando um código OTP for detectado, ele aparecerá aqui.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Capture Item</span>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Source label</span>
                <span className="text-xs text-slate-300">De: Gmail</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Code (masked)</span>
                <span className="font-mono text-sm text-slate-500">••••••</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Code (revealed)</span>
                <span className="font-mono text-sm text-emerald-400">847291</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Timestamp</span>
                <span className="text-xs text-slate-500">2 min atrás</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Status (used)</span>
                <span className="text-xs text-emerald-400">✓ Usado</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Status (available)</span>
                <span className="text-xs text-indigo-400">Disponível</span>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Action Labels</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded">Copiar código</span>
              <span className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded">Código copiado ✓</span>
              <span className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded">Revelar código</span>
              <span className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded">Configurações</span>
              <span className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded">Abrir Dashboard</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Copy */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">📊 Dashboard</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Navigation</span>
            <div className="flex gap-4">
              <span className="text-sm text-white">Dashboard</span>
              <span className="text-sm text-white">Histórico</span>
              <span className="text-sm text-white">Fontes</span>
              <span className="text-sm text-white">Configurações</span>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Home Page</span>
            <div className="space-y-2">
              <p className="text-sm text-white">Bem-vindo de volta, Marcelino</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 rounded bg-slate-700/50 text-center">
                  <p className="text-xs text-slate-400">Capturas hoje</p>
                  <p className="text-lg font-bold text-white">12</p>
                </div>
                <div className="p-2 rounded bg-slate-700/50 text-center">
                  <p className="text-xs text-slate-400">Taxa de sucesso</p>
                  <p className="text-lg font-bold text-white">98%</p>
                </div>
                <div className="p-2 rounded bg-slate-700/50 text-center">
                  <p className="text-xs text-slate-400">Fontes ativas</p>
                  <p className="text-lg font-bold text-white">3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">History Page</span>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Histórico de Capturas</p>
              <p className="text-xs text-slate-400">Search: "Buscar por código ou fonte..."</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded">Todas as fontes</span>
                <span className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded">Últimos 7 dias</span>
                <span className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded">Usados</span>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Sources Page</span>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Fontes de Monitoramento</p>
              <button className="px-3 py-1.5 text-xs bg-indigo-600 text-white rounded">Adicionar fonte</button>
              <div className="space-y-1">
                <p className="text-xs text-slate-300">📧 Gmail - Captura códigos de emails do Gmail</p>
                <p className="text-xs text-slate-300">🔔 Notificações - Captura códigos de notificações do browser</p>
                <p className="text-xs text-slate-300">📋 Clipboard - Monitora clipboard para códigos OTP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Messages */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">💬 System Messages</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-emerald-500/20">
            <span className="text-xs text-emerald-400 mb-2 block font-medium">Success</span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>✓ Instalação concluída</li>
              <li>✓ Código preenchido automaticamente</li>
              <li>✓ Código copiado para clipboard</li>
              <li>✓ Fonte conectada com sucesso</li>
              <li>✓ Configurações salvas</li>
              <li>✓ Histórico limpo</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-red-500/20">
            <span className="text-xs text-red-400 mb-2 block font-medium">Error</span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>✕ Não foi possível conectar ao Gmail. Verifique suas permissões.</li>
              <li>✕ Erro ao carregar histórico. Tente novamente.</li>
              <li>✕ Código expirou. Solicite um novo.</li>
              <li>✕ Permissão negada. A extensão precisa de acesso para funcionar.</li>
              <li>✕ Sem conexão com a internet. Dados locais disponíveis.</li>
              <li>✕ Limite diário atingido. Upgrade para Pro.</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-amber-500/20">
            <span className="text-xs text-amber-400 mb-2 block font-medium">Warning</span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>⚠ Código expira em 30 segundos</li>
              <li>⚠ Fonte desconectada. Reconectar?</li>
              <li>⚠ Histórico será limpo em 7 dias (plano Free)</li>
              <li>⚠ Nova versão disponível. Atualize para melhor experiência.</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-indigo-500/20">
            <span className="text-xs text-indigo-400 mb-2 block font-medium">Info</span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>ℹ Monitorando 3 fontes</li>
              <li>ℹ Última sincronização: 5 min atrás</li>
              <li>ℹ 12 códigos capturados hoje</li>
              <li>ℹ Modo incógnito ativado. Histórico não será salvo.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Onboarding Copy */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">🎓 Onboarding</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Step 1: Welcome</span>
            <p className="text-sm font-semibold text-white mb-1">Bem-vindo ao AutoFill Guardian</p>
            <p className="text-xs text-slate-400">Nunca mais perca tempo procurando códigos OTP. Vamos configurar em 30 segundos.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Step 2: Permissions</span>
            <p className="text-sm font-semibold text-white mb-1">Permissões necessárias</p>
            <p className="text-xs text-slate-400 mb-2">Precisamos de acesso para capturar códigos. Seus dados são processados localmente.</p>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>✓ Ler notificações do browser</li>
              <li>✓ Preencher formulários automaticamente</li>
              <li>✓ Armazenar dados localmente</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Step 3: Sources</span>
            <p className="text-sm font-semibold text-white mb-1">De onde capturar códigos?</p>
            <p className="text-xs text-slate-400">Escolha as fontes que deseja monitorar. Você pode mudar depois.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Step 4: Success</span>
            <p className="text-sm font-semibold text-white mb-1">Tudo pronto!</p>
            <p className="text-xs text-slate-400">A extensão está monitorando suas fontes. Quando um código OTP for detectado, ele será preenchido automaticamente.</p>
          </div>
        </div>
      </div>

      {/* Email Templates */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">📧 Email Templates</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Welcome Email Subject</span>
            <p className="text-sm text-white">Bem-vindo ao AutoFill Guardian 🛡️</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Welcome Email Body</span>
            <div className="text-xs text-slate-300 space-y-2">
              <p>Hi Marcelino,</p>
              <p>Obrigado por instalar o AutoFill Guardian!</p>
              <p>A partir de agora, códigos OTP serão capturados e preenchidos automaticamente. Sem mais troca de abas, sem mais códigos expirados.</p>
              <p><strong>Próximos passos:</strong></p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Conecte suas fontes (Gmail, notificações)</li>
                <li>Teste com um código de verificação</li>
                <li>Explore o dashboard para ver seu histórico</li>
              </ol>
              <p>Se tiver alguma dúvida, responda este email. Estamos aqui para ajudar.</p>
              <p>Abraços,<br/>Time AutoFill Guardian</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-500 mb-2 block">Upgrade Prompt Subject</span>
            <p className="text-sm text-white">Você atingiu o limite de auto-fills diários</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">❓ FAQ</h2>
        <div className="space-y-3">
          {[
            {
              q: "É seguro? Meus dados ficam protegidos?",
              a: "Sim. Tudo é processado localmente no seu computador. Nenhum código é enviado para nossos servidores. Você pode até usar 100% offline."
            },
            {
              q: "Funciona com qualquer serviço de 2FA?",
              a: "Sim. Detectamos códigos OTP numéricos (4-8 dígitos) e alfanuméricos de qualquer serviço: Google, Microsoft, AWS, GitHub, bancos, etc."
            },
            {
              q: "Posso usar no Firefox?",
              a: "Atualmente apenas Chrome. Firefox está no roadmap para Q2 2025."
            },
            {
              q: "E no celular?",
              a: "App mobile (Android e iOS) está planejado para Q3-Q4 2025. Por enquanto, a extensão funciona no Chrome mobile (Android)."
            },
            {
              q: "Como cancelo?",
              a: "Cancele a qualquer momento nas configurações da extensão ou no dashboard. Sem burocracia, sem perguntas."
            },
          ].map((faq, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <p className="text-sm font-semibold text-white mb-1">Q: {faq.q}</p>
              <p className="text-xs text-slate-400">A: {faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
