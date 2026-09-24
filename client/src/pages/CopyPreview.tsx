import { Card } from '@/components/ui'

export default function CopyPreview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Copy Preview</h1>
        <p className="text-slate-400">Preview de todos os textos e mensagens</p>
      </div>

      <Card>
        <h2 className="text-xl font-semibold text-white mb-4">🌐 Landing Page</h2>
        <div className="space-y-3">
          <div>
            <span className="text-xs text-slate-500">Headline</span>
            <p className="text-2xl font-bold text-white">Nunca mais perca um código OTP</p>
          </div>
          <div>
            <span className="text-xs text-slate-500">Subheadline</span>
            <p className="text-slate-300">AutoFill Guardian captura e preenche automaticamente códigos de verificação do seu email, notificações e browser.</p>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold text-white mb-4">💬 System Messages</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-xs text-emerald-400 font-medium block mb-2">Success</span>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>✓ Código preenchido</li>
              <li>✓ Fonte conectada</li>
              <li>✓ Configurações salvas</li>
            </ul>
          </div>
          <div>
            <span className="text-xs text-red-400 font-medium block mb-2">Error</span>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>✕ Não foi possível conectar</li>
              <li>✕ Código expirou</li>
              <li>✕ Permissão negada</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
