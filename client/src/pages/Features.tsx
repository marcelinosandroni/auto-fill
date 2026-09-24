export default function Features() {
  const mvpFeatures = [
    { name: 'Captura de notificações browser', priority: 'P0', complexity: 'Média', status: '📋 Spec' },
    { name: 'Auto-fill campos OTP', priority: 'P0', complexity: 'Alta', status: '📋 Spec' },
    { name: 'Popup com últimas capturas', priority: 'P0', complexity: 'Baixa', status: '📋 Spec' },
    { name: 'Detecção de campos input OTP', priority: 'P0', complexity: 'Alta', status: '📋 Spec' },
    { name: 'Histórico local (localStorage)', priority: 'P1', complexity: 'Baixa', status: '📋 Spec' },
    { name: 'Clipboard monitoring', priority: 'P1', complexity: 'Média', status: '📋 Spec' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Feature Matrix</h1>
        <p className="text-slate-400">Priorização e status de todas as features planejadas</p>
      </div>

      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-indigo-500/20 text-indigo-300">MVP</span>
          <h2 className="text-lg font-semibold text-white">Chrome Extension</h2>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-700/50">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800/50">
                <th className="px-4 py-3 text-left text-slate-400 font-medium">Feature</th>
                <th className="px-4 py-3 text-center text-slate-400 font-medium">Prioridade</th>
                <th className="px-4 py-3 text-center text-slate-400 font-medium">Complexidade</th>
                <th className="px-4 py-3 text-center text-slate-400 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {mvpFeatures.map((f) => (
                <tr key={f.name} className="hover:bg-slate-800/30">
                  <td className="px-4 py-3 text-white">{f.name}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${f.priority === 'P0' ? 'bg-red-500/10 text-red-400' : 'bg-amber-500/10 text-amber-400'}`}>{f.priority}</span>
                  </td>
                  <td className="px-4 py-3 text-center text-slate-400">{f.complexity}</td>
                  <td className="px-4 py-3 text-center">{f.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
