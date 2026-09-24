export default function OnboardingFlow() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Onboarding Flow</h1>
        <p className="text-slate-400">Fluxo de onboarding da extensão - 4 passos em 30 segundos</p>
      </div>

      {/* Flow Overview */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Visão Geral do Fluxo</h2>
        <div className="flex items-center justify-between gap-2">
          {[
            { step: 1, label: 'Welcome', duration: '3s' },
            { step: 2, label: 'Permissions', duration: '5s' },
            { step: 3, label: 'Sources', duration: '10s' },
            { step: 4, label: 'Success', duration: '3s' },
          ].map((item, i) => (
            <div key={item.step} className="flex items-center gap-2 flex-1">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center text-sm font-bold text-indigo-400">
                  {item.step}
                </div>
                <span className="text-xs text-white mt-2">{item.label}</span>
                <span className="text-xs text-slate-500">{item.duration}</span>
              </div>
              {i < 3 && <div className="flex-1 h-px bg-slate-700"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Welcome */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-sm font-bold text-indigo-400">1</span>
          <h2 className="text-lg font-semibold text-white">Welcome</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-[350px] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl shadow-lg shadow-indigo-500/20 animate-float">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bem-vindo ao AutoFill Guardian</h3>
              <p className="text-sm text-slate-400 mb-6">
                Nunca mais perca tempo procurando códigos OTP. Vamos configurar em 30 segundos.
              </p>
              <button className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors mb-3">
                Começar →
              </button>
              <button className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
                Pular onboarding
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Permissions */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-sm font-bold text-indigo-400">2</span>
          <h2 className="text-lg font-semibold text-white">Permissions</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-[350px] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Permissões necessárias</h3>
              <p className="text-sm text-slate-400 mb-4">
                Precisamos de acesso para capturar códigos. Seus dados são processados localmente.
              </p>
              <div className="space-y-2 mb-4">
                {[
                  'Ler notificações do browser',
                  'Preencher formulários automaticamente',
                  'Armazenar dados localmente',
                ].map((perm) => (
                  <div key={perm} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-sm text-slate-300">{perm}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">🔒</span>
                  <span className="text-xs text-indigo-300">Privacidade first - Nada é enviado para servidores</span>
                </div>
              </div>
              <button className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors mb-2">
                Permitir acesso
              </button>
              <button className="w-full text-xs text-slate-500 hover:text-slate-400 transition-colors">
                ← Voltar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Sources */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-sm font-bold text-indigo-400">3</span>
          <h2 className="text-lg font-semibold text-white">Sources</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-[350px] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">De onde capturar códigos?</h3>
              <p className="text-sm text-slate-400 mb-4">
                Escolha as fontes que deseja monitorar. Você pode mudar depois.
              </p>
              <div className="space-y-2 mb-4">
                {[
                  { icon: '📧', name: 'Gmail', desc: 'Captura de emails', enabled: true },
                  { icon: '🔔', name: 'Notificações', desc: 'Notificações do browser', enabled: true },
                  { icon: '📋', name: 'Clipboard', desc: 'Monitora clipboard', enabled: false },
                ].map((source) => (
                  <div key={source.name} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <span className="text-xl">{source.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">{source.name}</div>
                      <div className="text-xs text-slate-400">{source.desc}</div>
                    </div>
                    <div className={`w-10 h-6 rounded-full transition-colors ${source.enabled ? 'bg-indigo-600' : 'bg-slate-700'}`}>
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform ${source.enabled ? 'translate-x-5' : 'translate-x-1'} mt-1`}></div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors mb-2">
                Continuar
              </button>
              <button className="w-full text-xs text-slate-500 hover:text-slate-400 transition-colors">
                ← Voltar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: Success */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-sm font-bold text-indigo-400">4</span>
          <h2 className="text-lg font-semibold text-white">Success</h2>
        </div>
        <div className="flex justify-center">
          <div className="w-[350px] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-4xl animate-pulse-glow">
                ✓
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tudo pronto!</h3>
              <p className="text-sm text-slate-400 mb-6">
                A extensão está monitorando suas fontes. Quando um código OTP for detectado, ele será preenchido automaticamente.
              </p>
              <button className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors mb-3">
                Começar a usar
              </button>
              <button className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
                Ver tutorial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edge Cases */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">⚠️ Edge Cases</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <h4 className="text-sm font-medium text-amber-400 mb-2">Permissão Negada</h4>
            <p className="text-xs text-slate-400 mb-3">Mostrar mensagem explicando por que precisa e oferecer tentar novamente ou pular.</p>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
              <p className="text-xs text-slate-300">⚠️ Permissão necessária para funcionar</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <h4 className="text-sm font-medium text-amber-400 mb-2">Nenhuma Fonte Selecionada</h4>
            <p className="text-xs text-slate-400 mb-3">Desabilitar botão "Continuar" até selecionar pelo menos uma fonte.</p>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
              <p className="text-xs text-slate-300">Selecione pelo menos uma fonte</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <h4 className="text-sm font-medium text-amber-400 mb-2">Usuário Pula Onboarding</h4>
            <p className="text-xs text-slate-400 mb-3">Mostrar badge "?" no ícone e oferecer "Ver tutorial" após 3 aberturas do popup.</p>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
              <p className="text-xs text-slate-300">Badge "?" + modal de tutorial</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <h4 className="text-sm font-medium text-amber-400 mb-2">Re-onboarding</h4>
            <p className="text-xs text-slate-400 mb-3">Após atualização major, oferecer re-onboarding opcional com novas features.</p>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
              <p className="text-xs text-slate-300">"Novidades na v1.0 - Ver tutorial"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">📊 Analytics & Metrics</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-indigo-400 mb-2">Eventos para Trackear</h3>
            <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
              <li>onboarding_started</li>
              <li>onboarding_step_viewed</li>
              <li>onboarding_permission_granted</li>
              <li>onboarding_permission_denied</li>
              <li>onboarding_sources_selected</li>
              <li>onboarding_completed</li>
              <li>onboarding_skipped</li>
              <li>onboarding_tutorial_viewed</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-emerald-400 mb-2">Métricas de Sucesso</h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>✓ Taxa de conclusão: &gt; 80%</li>
              <li>✓ Tempo médio: &lt; 45 segundos</li>
              <li>✓ Taxa de skip: &lt; 20%</li>
              <li>✓ Fontes ativadas: Média 2+</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
