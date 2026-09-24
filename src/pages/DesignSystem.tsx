export default function DesignSystem() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Design System</h1>
        <p className="text-slate-400">Biblioteca de componentes visuais e padrões de UI</p>
      </div>

      {/* Buttons */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">🔘 Buttons</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Primary</span>
            <div className="flex flex-wrap gap-3">
              <button className="px-3 py-1.5 text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">Small</button>
              <button className="px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">Medium</button>
              <button className="px-6 py-3 text-base bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">Large</button>
              <button className="px-4 py-2 text-sm bg-indigo-600/50 text-white/50 rounded-lg cursor-not-allowed">Disabled</button>
            </div>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Secondary</span>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 rounded-lg transition-colors">Medium</button>
              <button className="px-4 py-2 text-sm bg-transparent hover:bg-slate-800 text-slate-300 rounded-lg transition-colors">Ghost</button>
              <button className="px-4 py-2 text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">Danger</button>
            </div>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-2 block">With Icons</span>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center gap-2">
                <span>🔔</span> Instalar
              </button>
              <button className="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 rounded-lg transition-colors flex items-center gap-2">
                Configurar <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">📦 Cards</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/30 transition-all">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white">Card com Header</h3>
              <button className="text-xs text-indigo-400 hover:text-indigo-300">Ação</button>
            </div>
            <p className="text-sm text-slate-400">Este é um card com header e conteúdo. Hover para ver o efeito de borda.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-lg">📊</div>
              <div>
                <h3 className="font-semibold text-white text-sm">Card com Ícone</h3>
                <p className="text-xs text-slate-500">Subtítulo do card</p>
              </div>
            </div>
            <p className="text-sm text-slate-400">Cards podem ter ícones e subtítulos para mais contexto.</p>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">🏷️ Badges</h2>
        <div className="flex flex-wrap gap-3">
          <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Ativo</span>
          <span className="px-2.5 py-1 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Expirando</span>
          <span className="px-2.5 py-1 text-xs rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Erro</span>
          <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Novo</span>
          <span className="px-2.5 py-1 text-xs rounded-full bg-slate-500/10 text-slate-400 border border-slate-500/20">Pendente</span>
          <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Monitorando
          </span>
        </div>
      </div>

      {/* Inputs */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">📝 Inputs</h2>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="text-xs text-slate-400 mb-1.5 block">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400 mb-1.5 block">Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400 mb-1.5 block">Com erro</label>
            <input
              type="text"
              defaultValue="valor inválido"
              className="w-full px-4 py-2.5 bg-slate-800 border border-red-500 rounded-lg text-sm text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
            />
            <p className="text-xs text-red-400 mt-1">Este campo é obrigatório</p>
          </div>
          <div>
            <label className="text-xs text-slate-400 mb-1.5 block">Busca com ícone</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* OTP Display */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">🔐 OTP Display</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Revelado</span>
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-slate-900 border-2 border-emerald-500 rounded-lg">
              <span className="font-mono text-2xl text-emerald-400 tracking-wider">847291</span>
              <button className="text-slate-400 hover:text-white transition-colors">📋</button>
            </div>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Mascarado</span>
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg">
              <span className="font-mono text-2xl text-slate-500 tracking-wider">••••••</span>
              <button className="text-slate-400 hover:text-white transition-colors">👁️</button>
              <button className="text-slate-400 hover:text-white transition-colors">📋</button>
            </div>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Com countdown</span>
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-slate-900 border-2 border-emerald-500 rounded-lg">
              <span className="font-mono text-2xl text-emerald-400 tracking-wider">847291</span>
              <span className="text-xs text-amber-400">Expira em 2:30</span>
              <button className="text-slate-400 hover:text-white transition-colors">📋</button>
            </div>
          </div>
        </div>
      </div>

      {/* Toasts */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">💬 Toasts</h2>
        <div className="space-y-3 max-w-sm">
          <div className="flex items-start gap-3 p-4 bg-slate-800 border border-emerald-500/30 rounded-lg">
            <span className="text-emerald-400">✓</span>
            <div className="flex-1">
              <p className="text-sm text-white">Código preenchido automaticamente</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-slate-800 border border-red-500/30 rounded-lg">
            <span className="text-red-400">✕</span>
            <div className="flex-1">
              <p className="text-sm text-white">Não foi possível conectar ao Gmail</p>
              <button className="text-xs text-red-400 hover:text-red-300 mt-1">Tentar novamente</button>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-slate-800 border border-amber-500/30 rounded-lg">
            <span className="text-amber-400">⚠</span>
            <div className="flex-1">
              <p className="text-sm text-white">Código expira em 30 segundos</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-slate-800 border border-indigo-500/30 rounded-lg">
            <span className="text-indigo-400">ℹ</span>
            <div className="flex-1">
              <p className="text-sm text-white">Nova versão disponível</p>
              <button className="text-xs text-indigo-400 hover:text-indigo-300 mt-1">Atualizar</button>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">📝 Typography</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-slate-500 mb-1 block">Heading 1 (3xl, bold)</span>
            <p className="text-3xl font-bold text-white">Nunca mais perca um código OTP</p>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-1 block">Heading 2 (xl, semibold)</span>
            <p className="text-xl font-semibold text-white">Últimas Capturas</p>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-1 block">Body (base, regular)</span>
            <p className="text-base text-slate-300">AutoFill Guardian captura e preenche automaticamente códigos de verificação do seu email, notificações e browser.</p>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-1 block">Small (sm, regular)</span>
            <p className="text-sm text-slate-400">Este é um texto menor para descrições e detalhes.</p>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-1 block">Mono (JetBrains Mono)</span>
            <p className="font-mono text-lg text-emerald-400">847291</p>
          </div>
        </div>
      </div>

      {/* Spacing & Layout */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">📐 Spacing Scale</h2>
        <div className="space-y-2">
          {[
            { size: '4px', class: '1' },
            { size: '8px', class: '2' },
            { size: '12px', class: '3' },
            { size: '16px', class: '4' },
            { size: '24px', class: '6' },
            { size: '32px', class: '8' },
            { size: '48px', class: '12' },
          ].map((item) => (
            <div key={item.class} className="flex items-center gap-4">
              <span className="text-xs text-slate-500 w-16">p-{item.class}</span>
              <div className={`bg-indigo-500/20 border border-indigo-500/30`} style={{ width: item.size, height: '20px' }}></div>
              <span className="text-xs text-slate-400">{item.size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
