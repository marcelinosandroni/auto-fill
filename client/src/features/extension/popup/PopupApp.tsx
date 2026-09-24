import { useState, useEffect } from 'react'
import { Shield } from 'lucide-react'

interface Capture {
  id: string
  code: string
  source: 'notification' | 'email' | 'clipboard'
  sourceDetail: string
  capturedAt: number
  usedAt?: number
}

function formatTime(timestamp: number): string {
  const now = Date.now()
  const diff = now - timestamp
  
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  
  if (minutes < 1) return 'Agora'
  if (minutes < 60) return `${minutes} min`
  if (hours < 24) return `${hours}h`
  return `${Math.floor(hours / 24)}d`
}

function getSourceIcon(source: string): string {
  switch (source) {
    case 'email': return '📧'
    case 'notification': return '🔔'
    case 'clipboard': return '📋'
    default: return '📱'
  }
}

export default function PopupApp() {
  const [captures, setCaptures] = useState<Capture[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadCaptures()
    const interval = setInterval(loadCaptures, 5000)
    return () => clearInterval(interval)
  }, [])

  async function loadCaptures() {
    try {
      // Mock data for now - in production, use chrome.runtime.sendMessage
      const mockCaptures: Capture[] = [
        {
          id: '1',
          code: '847291',
          source: 'notification',
          sourceDetail: 'Google',
          capturedAt: Date.now() - 120000,
          usedAt: Date.now() - 60000,
        },
        {
          id: '2',
          code: '123456',
          source: 'email',
          sourceDetail: 'Slack',
          capturedAt: Date.now() - 900000,
        },
        {
          id: '3',
          code: '987654',
          source: 'clipboard',
          sourceDetail: 'Clipboard',
          capturedAt: Date.now() - 3600000,
          usedAt: Date.now() - 3000000,
        },
      ]
      setCaptures(mockCaptures)
    } catch (error) {
      console.error('Failed to load captures:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleCopy(code: string) {
    try {
      await navigator.clipboard.writeText(code)
      // Visual feedback would go here
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const todayCount = captures.filter(c => c.capturedAt >= today.getTime()).length

  if (loading) {
    return (
      <div className="w-[350px] h-[500px] bg-slate-900 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  if (captures.length === 0) {
    return (
      <div className="w-[350px] h-[500px] bg-slate-900 flex flex-col">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-white" />
            <span className="font-bold text-white text-sm">AutoFill Guardian</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-200">Monitorando</span>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="text-5xl mb-4 opacity-50">📭</div>
          <h2 className="text-sm font-semibold text-white mb-2">Nenhum código capturado</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            A extensão está monitorando suas notificações. Quando um código OTP for detectado, ele aparecerá aqui.
          </p>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-700 flex items-center justify-between">
          <button className="text-xs text-slate-400 hover:text-white transition-colors">
            ⚙️ Settings
          </button>
          <button className="px-3 py-1.5 text-xs font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
            Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-[350px] h-[500px] bg-slate-900 flex flex-col">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-white" />
          <span className="font-bold text-white text-sm">AutoFill Guardian</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-200">Monitorando</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-px bg-slate-700">
        <div className="bg-slate-800 p-3 text-center">
          <div className="text-lg font-bold text-indigo-400">{todayCount}</div>
          <div className="text-xs text-slate-400">Hoje</div>
        </div>
        <div className="bg-slate-800 p-3 text-center">
          <div className="text-lg font-bold text-emerald-400">98%</div>
          <div className="text-xs text-slate-400">Sucesso</div>
        </div>
        <div className="bg-slate-800 p-3 text-center">
          <div className="text-lg font-bold text-amber-400">{captures.length}</div>
          <div className="text-xs text-slate-400">Total</div>
        </div>
      </div>

      {/* Captures List */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-slate-400">Últimas Capturas</span>
          <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
            Ver tudo
          </button>
        </div>

        <div className="space-y-2">
          {captures.slice(0, 10).map((capture) => (
            <div
              key={capture.id}
              onClick={() => handleCopy(capture.code)}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-indigo-500/30 transition-all cursor-pointer"
            >
              <span className="text-base">{getSourceIcon(capture.source)}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-white truncate">
                  {capture.sourceDetail}
                </div>
                <div className="font-mono text-xs text-slate-400">••••••</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-500">{formatTime(capture.capturedAt)}</div>
                {capture.usedAt && (
                  <div className="text-xs text-emerald-400">✓</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-slate-700 flex items-center justify-between">
        <button className="text-xs text-slate-400 hover:text-white transition-colors">
          ⚙️ Settings
        </button>
        <button className="px-3 py-1.5 text-xs font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
          Dashboard
        </button>
      </div>
    </div>
  )
}
