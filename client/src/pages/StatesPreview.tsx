import { Card } from '@/components/ui'

export default function StatesPreview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">States Preview</h1>
        <p className="text-slate-400">Todos os estados da aplicação</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <h3 className="font-semibold text-white mb-2">📭 Empty State</h3>
          <div className="text-center py-4">
            <div className="text-4xl mb-2">📭</div>
            <p className="text-sm text-white">Nenhum código capturado</p>
            <p className="text-xs text-slate-400">A extensão está monitorando</p>
          </div>
        </Card>
        <Card>
          <h3 className="font-semibold text-white mb-2">⏳ Loading</h3>
          <div className="space-y-2 animate-pulse">
            <div className="h-3 bg-slate-700 rounded w-3/4"></div>
            <div className="h-3 bg-slate-700 rounded w-1/2"></div>
            <div className="h-3 bg-slate-700 rounded w-2/3"></div>
          </div>
        </Card>
        <Card className="border-red-500/20">
          <h3 className="font-semibold text-red-400 mb-2">❌ Error</h3>
          <p className="text-sm text-slate-300">Não foi possível conectar ao Gmail</p>
          <button className="text-xs text-red-400 mt-2">Tentar novamente</button>
        </Card>
        <Card className="border-emerald-500/20">
          <h3 className="font-semibold text-emerald-400 mb-2">✅ Success</h3>
          <p className="text-sm text-slate-300">Código preenchido automaticamente</p>
        </Card>
      </div>
    </div>
  )
}
