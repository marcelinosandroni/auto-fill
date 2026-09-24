export default function StatesPreview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">States Preview</h1>
        <p className="text-slate-400">Todos os estados da aplicação: vazio, loading, erro e sucesso</p>
      </div>

      {/* Empty States */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">📭 Empty States</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-2xl text-slate-500 mb-3">
              📭
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">Nenhum código capturado ainda</h3>
            <p className="text-xs text-slate-400 mb-3 max-w-xs">
              A extensão está monitorando suas notificações. Quando um código OTP for detectado, ele aparecerá aqui.
            </p>
            <button className="px-4 py-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
              Conectar Gmail
            </button>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-2xl text-slate-500 mb-3">
              🔍
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">Nenhum resultado encontrado</h3>
            <p className="text-xs text-slate-400 mb-3 max-w-xs">
              Não encontramos códigos com esse filtro. Tente ajustar sua busca.
            </p>
            <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
              Limpar filtros
            </button>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-2xl text-slate-500 mb-3">
              🔌
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">Nenhuma fonte ativa</h3>
            <p className="text-xs text-slate-400 mb-3 max-w-xs">
              Conecte pelo menos uma fonte para começar a capturar códigos automaticamente.
            </p>
            <button className="px-4 py-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
              Adicionar fonte
            </button>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-2xl text-slate-500 mb-3">
              📊
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">Sem dados para exibir</h3>
            <p className="text-xs text-slate-400 mb-3 max-w-xs">
              Use a extensão por alguns dias para ver suas estatísticas aqui.
            </p>
            <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
              Ver tutorial
            </button>
          </div>
        </div>
      </div>

      {/* Loading States */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">⏳ Loading States</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Skeleton Cards</span>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 animate-pulse">
                  <div className="w-8 h-8 rounded-lg bg-slate-700 mb-3"></div>
                  <div className="h-3 bg-slate-700 rounded w-1/2 mb-2"></div>
                  <div className="h-6 bg-slate-700 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-500 mb-2 block">Skeleton List</span>
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 animate-pulse">
                  <div className="w-10 h-10 rounded-lg bg-slate-700"></div>
                  <div className="flex-1">
                    <div className="h-3 bg-slate-700 rounded w-1/3 mb-2"></div>
                    <div className="h-4 bg-slate-700 rounded w-1/4"></div>
                  </div>
                  <div className="h-3 bg-slate-700 rounded w-16"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-500 mb-2 block">Spinner</span>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm text-slate-400">Carregando...</span>
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-500 mb-2 block">Shimmer Effect</span>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 overflow-hidden">
              <div className="h-20 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Error States */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">❌ Error States</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Toast Error</span>
            <div className="max-w-sm">
              <div className="flex items-start gap-3 p-4 bg-slate-800 border border-red-500/30 rounded-lg">
                <span className="text-red-400 text-lg">✕</span>
                <div className="flex-1">
                  <p className="text-sm text-white mb-1">Não foi possível conectar ao Gmail</p>
                  <p className="text-xs text-slate-400 mb-2">Verifique suas permissões e tente novamente.</p>
                  <button className="text-xs text-red-400 hover:text-red-300 transition-colors">
                    Tentar novamente
                  </button>
                </div>
                <button className="text-slate-500 hover:text-slate-400 transition-colors">✕</button>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-500 mb-2 block">Inline Error</span>
            <div className="max-w-sm space-y-3">
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block">Email</label>
                <input
                  type="email"
                  defaultValue="email-invalido"
                  className="w-full px-4 py-2.5 bg-slate-800 border-2 border-red-500 rounded-lg text-sm text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                />
                <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                  <span>⚠</span> Email inválido. Use um formato válido.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-500 mb-2 block">Full Page Error</span>
            <div className="p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-4xl mb-4">
                ⚠️
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Algo deu errado</h3>
              <p className="text-sm text-slate-400 mb-4 max-w-md">
                Não conseguimos carregar seus dados. Verifique sua conexão e tente novamente.
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                  Tentar novamente
                </button>
                <button className="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                  Contatar suporte
                </button>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-500 mb-2 block">Banner Error (Persistente)</span>
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
              <span className="text-red-400">⚠️</span>
              <p className="text-sm text-red-300 flex-1">Gmail desconectado. Reconecte para continuar capturando códigos.</p>
              <button className="px-3 py-1 text-xs bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded transition-colors">
                Reconectar
              </button>
              <button className="text-red-400 hover:text-red-300 transition-colors">✕</button>
            </div>
          </div>
        </div>
      </div>

      {/* Success States */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">✅ Success States</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Toast Success</span>
            <div className="max-w-sm">
              <div className="flex items-start gap-3 p-4 bg-slate-800 border border-emerald-500/30 rounded-lg">
                <span className="text-emerald-400 text-lg">✓</span>
                <div className="flex-1">
                  <p className="text-sm text-white">Código preenchido automaticamente</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-500 mb-2 block">Success Animation</span>
            <div className="flex items-center justify-center p-8 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-4xl animate-pulse-glow">
                ✓
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-500 mb-2 block">Inline Success</span>
            <div className="max-w-sm space-y-3">
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block">Email</label>
                <input
                  type="email"
                  defaultValue="valid@email.com"
                  className="w-full px-4 py-2.5 bg-slate-800 border-2 border-emerald-500 rounded-lg text-sm text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                />
                <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                  <span>✓</span> Email válido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Warning States */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">⚠️ Warning States</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Toast Warning</span>
            <div className="max-w-sm">
              <div className="flex items-start gap-3 p-4 bg-slate-800 border border-amber-500/30 rounded-lg">
                <span className="text-amber-400 text-lg">⚠</span>
                <div className="flex-1">
                  <p className="text-sm text-white mb-1">Código expira em 30 segundos</p>
                  <button className="text-xs text-amber-400 hover:text-amber-300 transition-colors">
                    Copiar agora
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-500 mb-2 block">Banner Warning</span>
            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center gap-3">
              <span className="text-amber-400">⚠️</span>
              <p className="text-sm text-amber-300 flex-1">Limite diário quase atingido (45/50 auto-fills)</p>
              <button className="px-3 py-1 text-xs bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded transition-colors">
                Upgrade Pro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
