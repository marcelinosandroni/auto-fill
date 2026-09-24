export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Product Artifact
          </span>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Phase 0 - Refinement
          </span>
        </div>
        <h1 className="text-4xl font-bold gradient-text mb-3">AutoFill Guardian</h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Chrome Extension que captura notificações do sistema, emails e browser para 
          preencher automaticamente códigos OTP, tokens e verificações.
        </p>
      </div>

      {/* Value Proposition */}
      <div className="glass rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          💡 Value Proposition
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          "AutoFill Guardian elimina a fricção de verificações 2FA, capturando e preenchendo 
          códigos automaticamente — <span className="text-indigo-400 font-medium">como o autofill do Android, mas para seu desktop</span>."
        </p>
      </div>

      {/* Problem / Solution */}
      <div className="grid grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6 border-red-500/10">
          <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
            🔴 O Problema
          </h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">•</span>
              Usuários perdem tempo procurando códigos OTP em emails
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">•</span>
              Notificações de verificação expiram enquanto procura
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">•</span>
              Múltiplas abas abertas para encontrar o código certo
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">•</span>
              Interrupção constante do fluxo de trabalho
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">•</span>
              Segurança comprometida com códigos visíveis
            </li>
          </ul>
        </div>

        <div className="glass rounded-2xl p-6 border-emerald-500/10">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
            🟢 A Solução
          </h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">✓</span>
              Monitora fontes automaticamente (email, notificações, clipboard)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">✓</span>
              Identifica códigos OTP, tokens, links de verificação
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">✓</span>
              Preenche campos na página ativa automaticamente
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">✓</span>
              Histórico seguro e criptografado
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">✓</span>
              Privacidade first: tudo processado localmente
            </li>
          </ul>
        </div>
      </div>

      {/* Target Users */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          👥 Target Users
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { emoji: '💻', name: 'Dev Full-Stack', pain: 'Perde 5-10min/dia com OTPs', color: 'indigo' },
            { emoji: '🏢', name: 'Profissional Corp', pain: '5+ serviços com MFA', color: 'purple' },
            { emoji: '🎯', name: 'Freelancer', pain: 'Codes expiram enquanto procura', color: 'emerald' },
            { emoji: '🚀', name: 'Power User', pain: 'Quer automação total', color: 'amber' },
          ].map((user) => (
            <div key={user.name} className={`p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-${user.color}-500/30 transition-all`}>
              <div className="text-2xl mb-2">{user.emoji}</div>
              <h4 className="font-medium text-white text-sm">{user.name}</h4>
              <p className="text-xs text-slate-400 mt-1">{user.pain}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="glass rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-indigo-400 mb-1">50</div>
          <div className="text-xs text-slate-400">Auto-fills/dia (Free)</div>
        </div>
        <div className="glass rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-emerald-400 mb-1">100%</div>
          <div className="text-xs text-slate-400">Processamento Local</div>
        </div>
        <div className="glass rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-amber-400 mb-1">&lt;1s</div>
          <div className="text-xs text-slate-400">Tempo de Auto-fill</div>
        </div>
      </div>

      {/* Competitive Analysis */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          🏆 Diferencial Competitivo
        </h2>
        <div className="overflow-hidden rounded-xl border border-slate-700/50">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800/50">
                <th className="px-4 py-3 text-left text-slate-400 font-medium">Produto</th>
                <th className="px-4 py-3 text-left text-slate-400 font-medium">Ponto Forte</th>
                <th className="px-4 py-3 text-left text-slate-400 font-medium">Nossa Vantagem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              <tr className="hover:bg-slate-800/30">
                <td className="px-4 py-3 text-white">Android Autofill</td>
                <td className="px-4 py-3 text-slate-400">Nativo, SMS</td>
                <td className="px-4 py-3 text-emerald-400">Desktop + Multi-source</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="px-4 py-3 text-white">1Password OTP</td>
                <td className="px-4 py-3 text-slate-400">Integrado ao PM</td>
                <td className="px-4 py-3 text-emerald-400">Gratuito, independente</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="px-4 py-3 text-white">Authy Desktop</td>
                <td className="px-4 py-3 text-slate-400">Multi-device</td>
                <td className="px-4 py-3 text-emerald-400">Auto-fill real (não só display)</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="px-4 py-3 text-white">Raiz/2FAS</td>
                <td className="px-4 py-3 text-slate-400">Mobile focused</td>
                <td className="px-4 py-3 text-emerald-400">Desktop-first, browser native</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
