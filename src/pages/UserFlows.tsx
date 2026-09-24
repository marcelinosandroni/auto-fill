export default function UserFlows() {
  const flows = [
    {
      id: 1,
      title: 'Instalação e Primeiro Uso',
      description: 'Do download até a primeira captura automática',
      steps: [
        { label: 'Usuário visita landing page', icon: '🌐', type: 'start' },
        { label: 'Click "Instalar no Chrome"', icon: '🖱️', type: 'action' },
        { label: 'Chrome Web Store → Install', icon: '🏪', type: 'action' },
        { label: 'Popup abre automaticamente', icon: '🔌', type: 'system' },
        { label: 'Onboarding: 3 telas explicando', icon: '📖', type: 'ui' },
        { label: 'Permissão para notificações', icon: '🔔', type: 'system' },
        { label: 'Pronto! Monitorando...', icon: '✅', type: 'end' },
      ],
    },
    {
      id: 2,
      title: 'Captura de OTP Automática',
      description: 'Fluxo principal: email chega → código é preenchido',
      steps: [
        { label: 'Email de verificação chega no Gmail', icon: '📧', type: 'start' },
        { label: 'Extensão detecta notificação', icon: '👁️', type: 'system' },
        { label: 'Extrai código OTP (regex + AI)', icon: '🔍', type: 'process' },
        { label: 'Detecta campo OTP na aba ativa', icon: '🎯', type: 'process' },
        { label: 'Preenche automaticamente', icon: '⚡', type: 'action' },
        { label: 'Toast: "Código preenchido ✓"', icon: '💬', type: 'ui' },
        { label: 'Salva no histórico local', icon: '💾', type: 'end' },
      ],
    },
    {
      id: 3,
      title: 'Manual Copy from Popup',
      description: 'Usuário precisa de código antigo ou fill não funcionou',
      steps: [
        { label: 'Usuário precisa de código', icon: '🤔', type: 'start' },
        { label: 'Click no ícone da extensão', icon: '🖱️', type: 'action' },
        { label: 'Popup mostra últimas capturas', icon: '📋', type: 'ui' },
        { label: 'Click no código desejado', icon: '👆', type: 'action' },
        { label: 'Copia para clipboard', icon: '📋', type: 'system' },
        { label: 'Popup fecha', icon: '✖️', type: 'ui' },
        { label: 'Usuário cola onde precisa', icon: '✅', type: 'end' },
      ],
    },
    {
      id: 4,
      title: 'Dashboard - Primeiro Acesso',
      description: 'Usuário acessa o dashboard web pela primeira vez',
      steps: [
        { label: 'Click "Abrir Dashboard" no popup', icon: '🖱️', type: 'start' },
        { label: 'Redireciona para app.autofillguardian.com', icon: '🌐', type: 'system' },
        { label: 'Auth check (JWT)', icon: '🔐', type: 'process' },
        { label: 'Se não logado → tela de login', icon: '🔑', type: 'ui' },
        { label: 'Login com Google OAuth', icon: '🔗', type: 'action' },
        { label: 'Dashboard home carregado', icon: '📊', type: 'ui' },
        { label: 'Sync de histórico local → server', icon: '🔄', type: 'end' },
      ],
    },
  ]

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'start': return 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300'
      case 'end': return 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
      case 'action': return 'bg-purple-500/20 border-purple-500/40 text-purple-300'
      case 'system': return 'bg-amber-500/20 border-amber-500/40 text-amber-300'
      case 'process': return 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
      case 'ui': return 'bg-pink-500/20 border-pink-500/40 text-pink-300'
      default: return 'bg-slate-500/20 border-slate-500/40 text-slate-300'
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">User Flows</h1>
        <p className="text-slate-400">Fluxos de usuário mapeados para cada cenário principal</p>
      </div>

      {/* Legend */}
      <div className="glass rounded-xl p-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs text-slate-400 font-medium">Legenda:</span>
          {[
            { label: 'Start', type: 'start' },
            { label: 'Action', type: 'action' },
            { label: 'System', type: 'system' },
            { label: 'Process', type: 'process' },
            { label: 'UI', type: 'ui' },
            { label: 'End', type: 'end' },
          ].map((item) => (
            <span key={item.type} className={`px-2 py-0.5 text-xs rounded border ${getTypeStyles(item.type)}`}>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* Flows */}
      {flows.map((flow) => (
        <div key={flow.id} className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-sm font-bold text-indigo-400">
              {flow.id}
            </span>
            <h2 className="text-lg font-semibold text-white">{flow.title}</h2>
          </div>
          <p className="text-sm text-slate-400 mb-4 ml-11">{flow.description}</p>
          
          <div className="ml-11 space-y-0">
            {flow.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                {/* Connector line */}
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center text-sm ${getTypeStyles(step.type)}`}>
                    {step.icon}
                  </div>
                  {i < flow.steps.length - 1 && (
                    <div className="w-px h-6 bg-slate-700"></div>
                  )}
                </div>
                {/* Step content */}
                <div className="pt-1.5">
                  <p className="text-sm text-white">{step.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Edge Cases */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          ⚠️ Edge Cases a Considerar
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: 'Código expira antes do fill', desc: 'Mostrar warning + opção de re-solicitar' },
            { title: 'Múltiplos OTPs simultâneos', desc: 'Priorizar o mais recente + mostrar lista' },
            { title: 'Campo não detectado', desc: 'Fallback: notificar usuário com código copiável' },
            { title: 'Site bloqueia auto-fill', desc: 'Detectar e sugerir modo manual' },
            { title: 'Permissões negadas', desc: 'Onboarding explicando por que precisa' },
            { title: 'Offline / sem internet', desc: 'Funciona 100% local, sync quando reconectar' },
          ].map((edge) => (
            <div key={edge.title} className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
              <h4 className="text-sm font-medium text-amber-400 mb-1">{edge.title}</h4>
              <p className="text-xs text-slate-400">{edge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
