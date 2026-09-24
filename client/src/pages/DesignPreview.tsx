import { Card } from '@/components/ui'
import { Bell, Zap, Lock, Mail, Shield, RefreshCw } from 'lucide-react'

export default function DesignPreview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Design Preview</h1>
        <p className="text-slate-400">Mockups e previews visuais das interfaces planejadas</p>
      </div>

      <Card>
        <h2 className="text-xl font-semibold text-white mb-4">🎨 Color Palette</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {[
            { name: 'Primary', color: 'bg-indigo-500', hex: '#6366F1' },
            { name: 'Secondary', color: 'bg-emerald-500', hex: '#10B981' },
            { name: 'Accent', color: 'bg-amber-500', hex: '#F59E0B' },
            { name: 'BG', color: 'bg-slate-900', hex: '#0F172A' },
            { name: 'Surface', color: 'bg-slate-800', hex: '#1E293B' },
            { name: 'Text', color: 'bg-slate-50', hex: '#F8FAFC' },
            { name: 'Muted', color: 'bg-slate-400', hex: '#94A3B8' },
            { name: 'Danger', color: 'bg-red-500', hex: '#EF4444' },
          ].map((c) => (
            <div key={c.name} className="text-center">
              <div className={`w-full aspect-square rounded-xl ${c.color} mb-2 shadow-lg`}></div>
              <p className="text-xs font-medium text-white">{c.name}</p>
              <p className="text-xs text-slate-500 font-mono">{c.hex}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold text-white mb-4">🔌 Extension Popup (350x500px)</h2>
        <div className="flex justify-center">
          <div className="w-[350px] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-white" />
                  <span className="font-bold text-white text-sm">AutoFill Guardian</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs text-emerald-200">Monitorando</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-px bg-slate-700">
              <div className="bg-slate-800 p-3 text-center">
                <div className="text-lg font-bold text-indigo-400">12</div>
                <div className="text-xs text-slate-400">Hoje</div>
              </div>
              <div className="bg-slate-800 p-3 text-center">
                <div className="text-lg font-bold text-emerald-400">98%</div>
                <div className="text-xs text-slate-400">Sucesso</div>
              </div>
              <div className="bg-slate-800 p-3 text-center">
                <div className="text-lg font-bold text-amber-400">3</div>
                <div className="text-xs text-slate-400">Fontes</div>
              </div>
            </div>
            <div className="p-3 space-y-2">
              {[
                { source: '📧', from: 'Google', code: '••••••', time: '2 min', used: true },
                { source: '🔔', from: 'Slack', code: '••••••', time: '15 min', used: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <span className="text-base">{item.source}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-white truncate">{item.from}</div>
                    <div className="font-mono text-xs text-slate-400">{item.code}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">{item.time}</div>
                    {item.used && <span className="text-xs text-emerald-400">✓</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
