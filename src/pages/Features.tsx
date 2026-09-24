export default function Features() {
  const mvpFeatures = [
    { name: 'Captura de notificações browser', priority: 'P0', complexity: 'Média', status: '📋 Spec' },
    { name: 'Auto-fill campos OTP', priority: 'P0', complexity: 'Alta', status: '📋 Spec' },
    { name: 'Popup com últimas capturas', priority: 'P0', complexity: 'Baixa', status: '📋 Spec' },
    { name: 'Detecção de campos input OTP', priority: 'P0', complexity: 'Alta', status: '📋 Spec' },
    { name: 'Histórico local (localStorage)', priority: 'P1', complexity: 'Baixa', status: '📋 Spec' },
    { name: 'Clipboard monitoring', priority: 'P1', complexity: 'Média', status: '📋 Spec' },
  ]

  const v11Features = [
    { name: 'Gmail API integration', priority: 'P0', complexity: 'Alta', status: '💡 Idea' },
    { name: 'Dashboard web', priority: 'P0', complexity: 'Alta', status: '💡 Idea' },
    { name: 'Auth system', priority: 'P0', complexity: 'Alta', status: '💡 Idea' },
    { name: 'Fontes configuráveis', priority: 'P1', complexity: 'Média', status: '💡 Idea' },
    { name: 'Categorias de captura', priority: 'P1', complexity: 'Baixa', status: '💡 Idea' },
  ]

  const v2Features = [
    { name: 'Android SMS bridge', priority: 'P0', complexity: 'Alta', status: '💡 Idea' },
    { name: 'iOS App', priority: 'P0', complexity: 'Alta', status: '💡 Idea' },
    { name: 'Cross-device sync', priority: 'P1', complexity: 'Alta', status: '💡 Idea' },
    { name: 'AI pattern detection', priority: 'P2', complexity: 'Alta', status: '💡 Idea' },
    { name: 'API pública', priority: 'P2', complexity: 'Média', status: '💡 Idea' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Feature Matrix</h1>
        <p className="text-slate-400">Priorização e status de todas as features planejadas</p>
      </div>

      {/* MVP */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-indigo-500/20 text-indigo-300">
            MVP
          </span>
          <h2 className="text-lg font-semibold text-white">Chrome Extension</h2>
          <span className="text-xs text-slate-500">Phase 3</span>
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
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      f.priority === 'P0' ? 'bg-red-500/10 text-red-400' : 'bg-amber-500/10 text-amber-400'
                    }`}>{f.priority}</span>
                  </td>
                  <td className="px-4 py-3 text-center text-slate-400">{f.complexity}</td>
                  <td className="px-4 py-3 text-center">{f.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* V1.1 */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-purple-500/20 text-purple-300">
            V1.1
          </span>
          <h2 className="text-lg font-semibold text-white">Dashboard & Auth</h2>
          <span className="text-xs text-slate-500">Phase 4</span>
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
              {v11Features.map((f) => (
                <tr key={f.name} className="hover:bg-slate-800/30">
                  <td className="px-4 py-3 text-white">{f.name}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      f.priority === 'P0' ? 'bg-red-500/10 text-red-400' : 'bg-amber-500/10 text-amber-400'
                    }`}>{f.priority}</span>
                  </td>
                  <td className="px-4 py-3 text-center text-slate-400">{f.complexity}</td>
                  <td className="px-4 py-3 text-center">{f.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* V2.0 */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-300">
            V2.0
          </span>
          <h2 className="text-lg font-semibold text-white">Mobile & Scale</h2>
          <span className="text-xs text-slate-500">Phase 5-6</span>
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
              {v2Features.map((f) => (
                <tr key={f.name} className="hover:bg-slate-800/30">
                  <td className="px-4 py-3 text-white">{f.name}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      f.priority === 'P0' ? 'bg-red-500/10 text-red-400' : f.priority === 'P1' ? 'bg-amber-500/10 text-amber-400' : 'bg-slate-500/10 text-slate-400'
                    }`}>{f.priority}</span>
                  </td>
                  <td className="px-4 py-3 text-center text-slate-400">{f.complexity}</td>
                  <td className="px-4 py-3 text-center">{f.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pricing Model */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          💰 Pricing Model
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <h3 className="font-semibold text-white mb-1">Free</h3>
            <div className="text-2xl font-bold text-white mb-3">$0</div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>✓ 50 auto-fills/dia</li>
              <li>✓ 2 fontes</li>
              <li>✓ Histórico 7 dias</li>
              <li>✓ 1 dispositivo</li>
              <li className="text-slate-600">✗ Sync</li>
              <li className="text-slate-600">✗ Export</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl bg-indigo-500/5 border-2 border-indigo-500/30 relative">
            <span className="absolute -top-2 right-4 px-2 py-0.5 text-xs font-bold bg-indigo-500 text-white rounded-full">Popular</span>
            <h3 className="font-semibold text-white mb-1">Pro</h3>
            <div className="text-2xl font-bold text-white mb-3">$4.99<span className="text-sm text-slate-400">/mês</span></div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>✓ Auto-fills ilimitados</li>
              <li>✓ Todas as fontes</li>
              <li>✓ Histórico ilimitado</li>
              <li>✓ 3 dispositivos</li>
              <li>✓ Cross-device sync</li>
              <li>✓ Export CSV</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <h3 className="font-semibold text-white mb-1">Enterprise</h3>
            <div className="text-2xl font-bold text-white mb-3">Custom</div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>✓ Tudo do Pro</li>
              <li>✓ API access</li>
              <li>✓ Dispositivos ilimitados</li>
              <li>✓ SSO / SAML</li>
              <li>✓ Audit logs</li>
              <li>✓ Suporte dedicado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
