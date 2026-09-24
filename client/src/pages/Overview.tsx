export default function Overview() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Product Artifact</span>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Phase 0 - Refinement</span>
        </div>
        <h1 className="text-4xl font-bold gradient-text mb-3">AutoFill Guardian</h1>
        <p className="text-lg text-slate-400 max-w-2xl">Chrome Extension que captura notificações do sistema, emails e browser para preencher automaticamente códigos OTP, tokens e verificações.</p>
      </div>

      <div className="glass rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-white mb-4">💡 Value Proposition</h2>
        <p className="text-slate-300 text-lg leading-relaxed">"AutoFill Guardian elimina a fricção de verificações 2FA, capturando e preenchendo códigos automaticamente — <span className="text-indigo-400 font-medium">como o autofill do Android, mas para seu desktop</span>."</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6 border-red-500/10">
          <h3 className="text-lg font-semibold text-red-400 mb-3">🔴 O Problema</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>• Usuários perdem tempo procurando códigos OTP em emails</li>
            <li>• Notificações de verificação expiram enquanto procura</li>
            <li>• Múltiplas abas abertas para encontrar o código certo</li>
            <li>• Interrupção constante do fluxo de trabalho</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-6 border-emerald-500/10">
          <h3 className="text-lg font-semibold text-emerald-400 mb-3">🟢 A Solução</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>✓ Monitora fontes automaticamente</li>
            <li>✓ Identifica códigos OTP, tokens, links de verificação</li>
            <li>✓ Preenche campos na página ativa automaticamente</li>
            <li>✓ Histórico seguro e criptografado</li>
          </ul>
        </div>
      </div>

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
    </div>
  )
}
