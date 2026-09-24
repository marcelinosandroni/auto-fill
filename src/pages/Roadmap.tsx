export default function Roadmap() {
  const phases = [
    {
      id: 0,
      title: 'Product Refinement',
      status: 'in-progress' as 'in-progress' | 'planned' | 'done',
      period: 'Set 2024',
      items: [
        { label: 'Definir visão do produto', done: true },
        { label: 'Criar design system', done: true },
        { label: 'Criar artifact de planejamento visual', done: true },
        { label: 'Especificar Chrome Extension em detalhe', done: false },
        { label: 'Especificar Landing Page', done: false },
        { label: 'Especificar Dashboard', done: false },
        { label: 'Especificar API', done: false },
      ],
    },
    {
      id: 1,
      title: 'Foundation',
      status: 'planned' as const,
      period: 'Out 2024',
      items: [
        { label: 'Monorepo configurado e funcionando', done: false },
        { label: 'Client (React + Vite + Tailwind) rodando', done: false },
        { label: 'Server (Node.js) rodando', done: false },
        { label: 'CI/CD básico', done: false },
      ],
    },
    {
      id: 2,
      title: 'Landing Page',
      status: 'planned' as const,
      period: 'Out-Nov 2024',
      items: [
        { label: 'Landing page publicada', done: false },
        { label: 'Link para Chrome Web Store', done: false },
        { label: 'Analytics integrado', done: false },
        { label: 'SEO otimizado', done: false },
      ],
    },
    {
      id: 3,
      title: 'Chrome Extension MVP',
      status: 'planned' as const,
      period: 'Nov-Dez 2024',
      items: [
        { label: 'Extension publicada na Chrome Web Store', done: false },
        { label: 'Captura de notificações funcionando', done: false },
        { label: 'Auto-fill de OTP funcionando', done: false },
        { label: 'Popup com histórico básico', done: false },
      ],
    },
    {
      id: 4,
      title: 'Dashboard & Auth',
      status: 'planned' as const,
      period: 'Jan-Feb 2025',
      items: [
        { label: 'Sistema de auth (login/registro)', done: false },
        { label: 'Dashboard web publicado', done: false },
        { label: 'Histórico completo com filtros', done: false },
        { label: 'Gerenciamento de fontes', done: false },
      ],
    },
    {
      id: 5,
      title: 'Mobile Apps',
      status: 'planned' as const,
      period: 'Mar-Jun 2025',
      items: [
        { label: 'Android app (beta)', done: false },
        { label: 'SMS bridge funcionando', done: false },
        { label: 'Sync cross-device', done: false },
        { label: 'iOS app (beta)', done: false },
      ],
    },
    {
      id: 6,
      title: 'Scale & Monetize',
      status: 'planned' as const,
      period: 'Jul-Dez 2025',
      items: [
        { label: 'Sistema de pagamento (Stripe)', done: false },
        { label: 'Plano Pro ativo', done: false },
        { label: 'API pública', done: false },
        { label: 'Enterprise features', done: false },
      ],
    },
  ]

  const getStatusStyles = (status: 'in-progress' | 'planned' | 'done') => {
    switch (status) {
      case 'in-progress': return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
      case 'done': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20'
    }
  }

  const getStatusLabel = (status: 'in-progress' | 'planned' | 'done') => {
    switch (status) {
      case 'in-progress': return '🔄 Em Progresso'
      case 'done': return '✅ Concluído'
      default: return '📋 Planejado'
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Roadmap</h1>
        <p className="text-slate-400">Visão macro do projeto com marcos e timelines</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-700"></div>

        <div className="space-y-6">
          {phases.map((phase) => (
            <div key={phase.id} className="relative pl-16">
              {/* Timeline dot */}
              <div className={`absolute left-4 top-6 w-5 h-5 rounded-full border-2 ${
                phase.status === 'in-progress' 
                  ? 'bg-amber-500 border-amber-400 animate-pulse' 
                  : phase.status === 'done'
                  ? 'bg-emerald-500 border-emerald-400'
                  : 'bg-slate-800 border-slate-600'
              }`}></div>

              <div className="glass rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-slate-500">F{phase.id}</span>
                    <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">{phase.period}</span>
                    <span className={`px-2 py-0.5 text-xs rounded-full border ${getStatusStyles(phase.status)}`}>
                      {getStatusLabel(phase.status)}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {phase.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className={`w-4 h-4 rounded flex items-center justify-center text-xs ${
                        item.done 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-slate-700/50 text-slate-500'
                      }`}>
                        {item.done ? '✓' : '○'}
                      </span>
                      <span className={`text-sm ${item.done ? 'text-slate-400 line-through' : 'text-slate-300'}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-3 pt-3 border-t border-slate-700/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-500">Progresso</span>
                    <span className="text-xs text-slate-400">
                      {phase.items.filter(i => i.done).length}/{phase.items.length}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-all"
                      style={{ width: `${(phase.items.filter(i => i.done).length / phase.items.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Timeline */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          📱 Roadmap de Plataformas
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {[
            { quarter: 'Q1 2025', platform: 'Chrome Extension', icon: '🔌', status: 'MVP' },
            { quarter: 'Q2 2025', platform: 'Dashboard Web + Firefox', icon: '🌐', status: 'Planned' },
            { quarter: 'Q3 2025', platform: 'Android App', icon: '🤖', status: 'Planned' },
            { quarter: 'Q4 2025', platform: 'iOS + Sync', icon: '🍎', status: 'Planned' },
          ].map((item) => (
            <div key={item.quarter} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-xs text-slate-500 mb-1">{item.quarter}</div>
              <div className="text-sm font-medium text-white">{item.platform}</div>
              <span className={`inline-block mt-2 px-2 py-0.5 text-xs rounded-full ${
                item.status === 'MVP' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-700 text-slate-400'
              }`}>{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
