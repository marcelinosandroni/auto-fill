import { useState } from 'react'
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import { Card, Button, Badge } from '@/components/ui'
import { Shield, LayoutDashboard, History, Link2, Settings, LogOut, User } from 'lucide-react'

// Mock auth state
const useAuth = () => {
  const [user, setUser] = useState<{ email: string; name: string; plan: string } | null>(
    () => JSON.parse(localStorage.getItem('user') || 'null')
  )

  const login = (email: string, password: string) => {
    // Mock login
    const userData = { email, name: email.split('@')[0], plan: 'free' }
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
    return true
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return { user, login, logout }
}

function LoginPage() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Preencha todos os campos')
      return
    }
    login(email, password)
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">AutoFill Guardian</h1>
            <p className="text-xs text-slate-400">Faça login para continuar</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-slate-400 mb-1.5 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400 mb-1.5 block">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <Button type="submit" fullWidth>Entrar</Button>
        </form>

        <p className="text-xs text-slate-500 text-center mt-4">
          Não tem conta? <Link to="/dashboard/register" className="text-indigo-400 hover:text-indigo-300">Criar conta</Link>
        </p>
      </Card>
    </div>
  )
}

function DashboardLayout() {
  const { user, logout } = useAuth()
  const location = useLocation()

  if (!user) return <Navigate to="/dashboard/login" />

  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/dashboard/history', icon: History, label: 'Histórico' },
    { path: '/dashboard/sources', icon: Link2, label: 'Fontes' },
    { path: '/dashboard/settings', icon: Settings, label: 'Configurações' },
  ]

  return (
    <div className="flex min-h-screen bg-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-sm text-white">AutoFill Guardian</h1>
              <p className="text-xs text-slate-400">Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                location.pathname === item.path
                  ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
              <User className="w-4 h-4 text-slate-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate">{user.name}</p>
              <Badge variant="secondary" size="sm">{user.plan}</Badge>
            </div>
          </div>
          <button onClick={logout} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="sources" element={<SourcesPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  )
}

function DashboardHome() {
  const { user } = useAuth()
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Bem-vindo, {user?.name}</h1>
        <p className="text-slate-400">Aqui está um resumo da sua atividade</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Capturas Hoje</div>
          <div className="text-3xl font-bold text-indigo-400">12</div>
        </Card>
        <Card>
          <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Taxa de Sucesso</div>
          <div className="text-3xl font-bold text-emerald-400">98%</div>
        </Card>
        <Card>
          <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Fontes Ativas</div>
          <div className="text-3xl font-bold text-amber-400">3</div>
        </Card>
      </div>

      <Card>
        <h2 className="text-lg font-semibold text-white mb-4">Atividade Recente</h2>
        <div className="space-y-2">
          {[
            { source: '📧', from: 'Google', time: '2 min', used: true },
            { source: '🔔', from: 'Slack', time: '15 min', used: false },
            { source: '📋', from: 'Clipboard', time: '1h', used: true },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-700">
              <span>{item.source}</span>
              <div className="flex-1">
                <div className="text-sm text-white">{item.from}</div>
                <div className="text-xs text-slate-500">{item.time} atrás</div>
              </div>
              {item.used && <Badge variant="success" size="sm">Usado</Badge>}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

function HistoryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Histórico</h1>
      <Card>
        <p className="text-slate-400">Lista de todas as capturas com filtros por data, fonte e tipo.</p>
      </Card>
    </div>
  )
}

function SourcesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Fontes</h1>
      <div className="grid grid-cols-2 gap-4">
        <Card hoverable>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📧</span>
            <div>
              <h3 className="font-semibold text-white">Gmail</h3>
              <Badge variant="success" size="sm" dot>Ativo</Badge>
            </div>
          </div>
        </Card>
        <Card hoverable>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔔</span>
            <div>
              <h3 className="font-semibold text-white">Notificações</h3>
              <Badge variant="success" size="sm" dot>Ativo</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Configurações</h1>
      <Card>
        <h2 className="text-lg font-semibold text-white mb-4">Geral</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Auto-fill automático</span>
            <div className="w-10 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Som de notificação</span>
            <div className="w-10 h-6 bg-slate-700 rounded-full relative cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold text-white mb-4">Plano</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-300">Plano atual: <Badge variant="secondary">Free</Badge></p>
            <p className="text-xs text-slate-500 mt-1">50 auto-fills/dia • 1 dispositivo</p>
          </div>
          <Button>Upgrade Pro</Button>
        </div>
      </Card>
    </div>
  )
}

export default function DashboardApp() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<LoginPage />} />
      <Route path="/*" element={<DashboardLayout />} />
    </Routes>
  )
}
