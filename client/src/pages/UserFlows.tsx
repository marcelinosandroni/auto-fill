export default function UserFlows() {
  const flows = [
    { id: 1, title: 'Instalação e Primeiro Uso', steps: ['Visita landing page', 'Click instalar', 'Chrome Web Store', 'Popup abre', 'Onboarding', 'Permissões', 'Pronto!'] },
    { id: 2, title: 'Captura de OTP Automática', steps: ['Email chega', 'Extensão detecta', 'Extrai código', 'Detecta campo', 'Preenche auto', 'Toast sucesso', 'Salva histórico'] },
    { id: 3, title: 'Manual Copy from Popup', steps: ['Precisa código', 'Click ícone', 'Popup abre', 'Seleciona código', 'Copia clipboard', 'Popup fecha', 'Cola onde precisa'] },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">User Flows</h1>
        <p className="text-slate-400">Fluxos de usuário mapeados para cada cenário principal</p>
      </div>

      {flows.map((flow) => (
        <div key={flow.id} className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-sm font-bold text-indigo-400">{flow.id}</span>
            <h2 className="text-lg font-semibold text-white">{flow.title}</h2>
          </div>
          <div className="ml-11 space-y-0">
            {flow.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-sm text-indigo-300">{i + 1}</div>
                  {i < flow.steps.length - 1 && <div className="w-px h-6 bg-slate-700"></div>}
                </div>
                <div className="pt-1.5"><p className="text-sm text-white">{step}</p></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
