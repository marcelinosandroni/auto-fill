export default function DesignPreview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Design Preview</h1>
        <p className="text-slate-400">Mockups e previews visuais das interfaces planejadas</p>
      </div>

      {/* Color Palette */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">🎨 Color Palette</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {[
            { name: 'Primary', color: 'bg-indigo-500', hex: '#6366F1' },
            { name: 'Secondary', color: 'bg-emerald-500', hex: '#10B981' },
            { name: 'Accent', color: 'bg-amber-500', hex: '#F59E0B' },
            { name: 'BG', color: 'bg-slate-900', hex: '#0F172A' },
            { name: 'Surface', color: 'bg-slate-800', hex: '#1E293B' },
            { name: 'Text', color: 'bg-slate-50', hex: '#F8FAFC' },
            { name: 'Muted', color: 'bg-slate-400', hex: '#94A3B8' },
            { name: 'Danger', color: 'bg-red-500', hex: '#EF4444' },
          ].map((c) => (
            <div key={c.name} className="text-center">
              <div className={`w-full aspect-square rounded-xl ${c.color} mb-2 shadow-lg`}></div>
              <p className="text-xs font-medium text-white">{c.name}</p>
              <p className="text-xs text-slate-500 font-mono">{c.hex}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Extension Popup Mockup */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          🔌 Extension Popup (350x500px)
        </h2>
        <div className="flex justify-center">
          <div className="w-[350px] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
            {/* Popup Header */}
            <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🛡️</span>
                  <span className="font-bold text-white text-sm">AutoFill Guardian</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs text-emerald-200">Monitorando</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-px bg-slate-700/50">
              <div className="bg-slate-800 p-3 text-center">
                <div className="text-lg font-bold text-indigo-400">12</div>
                <div className="text-xs text-slate-400">Hoje</div>
              </div>
              <div className="bg-slate-800 p-3 text-center">
                <div className="text-lg font-bold text-emerald-400">98%</div>
                <div className="text-xs text-slate-400">Sucesso</div>
              </div>
              <div className="bg-slate-800 p-3 text-center">
                <div className="text-lg font-bold text-amber-400">3</div>
                <div className="text-xs text-slate-400">Fontes</div>
              </div>
            </div>

            {/* Recent Captures */}
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-400">Últimas Capturas</span>
                <button className="text-xs text-indigo-400 hover:text-indigo-300">Ver tudo</button>
              </div>
              <div className="space-y-2">
                {[
                  { source: '📧', from: 'Google', code: '••••••', time: '2 min', used: true },
                  { source: '🔔', from: 'Slack', code: '••••••', time: '15 min', used: false },
                  { source: '📋', from: 'Clipboard', code: '••••••', time: '1h', used: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/30 transition-all cursor-pointer">
                    <span className="text-base">{item.source}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-white truncate">{item.from}</div>
                      <div className="font-mono text-xs text-slate-400">{item.code}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">{item.time}</div>
                      {item.used && <span className="text-xs text-emerald-400">✓</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-slate-700/50 flex items-center justify-between">
              <button className="text-xs text-slate-400 hover:text-white flex items-center gap-1">
                ⚙️ Settings
              </button>
              <button className="px-3 py-1.5 text-xs font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                Abrir Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Landing Page Hero Mockup */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          🌐 Landing Page - Hero Section
        </h2>
        <div className="rounded-xl overflow-hidden border border-slate-700/50">
          <div className="bg-gradient-to-b from-slate-900 via-indigo-950/30 to-slate-900 p-12 text-center relative">
            {/* Background particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/3 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs text-indigo-300">Chrome Extension</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Nunca mais perca um<br/>
                <span className="gradient-text">código OTP</span>
              </h2>
              
              <p className="text-slate-400 max-w-lg mx-auto mb-8 text-sm">
                AutoFill Guardian captura e preenche automaticamente códigos de verificação 
                do seu email, notificações e browser.
              </p>
              
              <div className="flex items-center justify-center gap-3">
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Instalar Grátis no Chrome
                </button>
                <button className="px-6 py-3 text-slate-300 hover:text-white font-medium rounded-xl border border-slate-700 hover:border-slate-600 transition-all">
                  Ver como funciona →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Capture Animation Mockup */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          ⚡ Auto-Fill em Ação
        </h2>
        <div className="bg-slate-900 rounded-xl border border-slate-700/50 p-6">
          <div className="flex items-center gap-4">
            {/* Browser mockup */}
            <div className="flex-1">
              <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                  <div className="flex-1 ml-2 bg-slate-700 rounded px-3 py-1 text-xs text-slate-400">
                    github.com/settings/security
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-xs text-slate-400">Enter verification code</div>
                  <div className="flex gap-2">
                    {['8', '4', '7', '2', '9', '1'].map((digit, i) => (
                      <div 
                        key={i}
                        className="w-10 h-12 rounded-lg bg-slate-700 border-2 border-emerald-500 flex items-center justify-center font-mono text-lg text-white animate-pulse-glow"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        {digit}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-xs text-emerald-400">Auto-filled by AutoFill Guardian</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification mockup */}
            <div className="w-48">
              <div className="bg-slate-800 rounded-lg p-3 border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm">🔔</span>
                  <span className="text-xs font-medium text-white">Notificação capturada</span>
                </div>
                <div className="text-xs text-slate-400 mb-1">De: Google</div>
                <div className="font-mono text-sm text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                  847291
                </div>
                <div className="text-xs text-slate-500 mt-1">Preenchido ✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">📝 Typography</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-slate-500 mb-1 block">Inter - Headings (700)</span>
            <p className="text-3xl font-bold text-white">Nunca mais perca um código OTP</p>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-1 block">Inter - Body (400)</span>
            <p className="text-base text-slate-300">AutoFill Guardian captura e preenche automaticamente códigos de verificação do seu email, notificações e browser.</p>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-1 block">JetBrains Mono - Codes</span>
            <p className="text-xl font-mono text-emerald-400">847291</p>
          </div>
        </div>
      </div>
    </div>
  )
}
