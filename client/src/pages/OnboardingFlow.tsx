import { Card } from '@/components/ui'

export default function OnboardingFlow() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Onboarding Flow</h1>
        <p className="text-slate-400">Fluxo de onboarding da extensão - 4 passos em 30 segundos</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { step: 1, title: 'Welcome', desc: 'Bem-vindo ao AutoFill Guardian' },
          { step: 2, title: 'Permissions', desc: 'Permissões necessárias' },
          { step: 3, title: 'Sources', desc: 'De onde capturar?' },
          { step: 4, title: 'Success', desc: 'Tudo pronto!' },
        ].map((item) => (
          <Card key={item.step}>
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center text-sm font-bold text-indigo-400 mb-3">{item.step}</div>
            <h3 className="font-semibold text-white mb-1">{item.title}</h3>
            <p className="text-xs text-slate-400">{item.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
