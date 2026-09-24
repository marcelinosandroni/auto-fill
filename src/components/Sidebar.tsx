type Page = 'overview' | 'features' | 'design' | 'flows' | 'roadmap' | 'architecture'

interface SidebarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

const navItems: { id: Page; label: string; icon: string }[] = [
  { id: 'overview', label: 'Product Overview', icon: '🎯' },
  { id: 'features', label: 'Feature Matrix', icon: '⚡' },
  { id: 'design', label: 'Design Preview', icon: '🎨' },
  { id: 'flows', label: 'User Flows', icon: '🔄' },
  { id: 'roadmap', label: 'Roadmap', icon: '🗺️' },
  { id: 'architecture', label: 'Architecture', icon: '🏗️' },
]

export default function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-lg shadow-lg shadow-indigo-500/20">
            🛡️
          </div>
          <div>
            <h1 className="font-bold text-sm text-white">AutoFill Guardian</h1>
            <p className="text-xs text-slate-400">Product Artifact</p>
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="px-4 pt-4">
        <div className="px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-xs font-medium text-amber-400">Phase 0: Refinement</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              currentPage === item.id
                ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800">
        <div className="text-xs text-slate-500 space-y-1">
          <p>SDD Framework</p>
          <p>Spec-Driven Development</p>
          <p className="text-slate-600">v0.1.0-alpha</p>
        </div>
      </div>
    </aside>
  )
}
