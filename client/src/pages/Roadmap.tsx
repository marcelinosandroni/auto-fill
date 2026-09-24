export default function Roadmap() {
  const phases: Array<{ id: number; title: string; status: 'in-progress' | 'planned' | 'done'; period: string; progress: number }> = [
    { id: 0, title: 'Product Refinement', status: 'in-progress', period: 'Set 2024', progress: 100 },
    { id: 1, title: 'Foundation', status: 'planned', period: 'Out 2024', progress: 0 },
    { id: 2, title: 'Landing Page', status: 'planned', period: 'Out-Nov 2024', progress: 0 },
    { id: 3, title: 'Chrome Extension MVP', status: 'planned', period: 'Nov-Dez 2024', progress: 0 },
    { id: 4, title: 'Dashboard & Auth', status: 'planned', period: 'Jan-Feb 2025', progress: 0 },
    { id: 5, title: 'Mobile Apps', status: 'planned', period: 'Mar-Jun 2025', progress: 0 },
    { id: 6, title: 'Scale & Monetize', status: 'planned', period: 'Jul-Dez 2025', progress: 0 },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Roadmap</h1>
        <p className="text-slate-400">Visão macro do projeto com marcos e timelines</p>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-700"></div>
        <div className="space-y-6">
          {phases.map((phase) => (
            <div key={phase.id} className="relative pl-16">
              <div className={`absolute left-4 top-6 w-5 h-5 rounded-full border-2 ${
                phase.status === 'in-progress' ? 'bg-amber-500 border-amber-400 animate-pulse' : phase.status === 'done' ? 'bg-emerald-500 border-emerald-400' : 'bg-slate-800 border-slate-600'
              }`}></div>
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-slate-500">F{phase.id}</span>
                    <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                  </div>
                  <span className="text-xs text-slate-500">{phase.period}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-all" style={{ width: `${phase.progress}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
