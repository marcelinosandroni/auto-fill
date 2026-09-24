export type Page = 'overview' | 'features' | 'design' | 'flows' | 'roadmap' | 'architecture' | 'designsystem' | 'onboarding' | 'states' | 'copy'

import { Badge } from '@/components/ui'
import { Shield } from 'lucide-react'

interface SidebarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

const navItems: { id: Page; label: string; icon: string; section?: string }[] = [
  { id: 'overview', label: 'Product Overview', icon: '🎯', section: 'Product' },
  { id: 'features', label: 'Feature Matrix', icon: '⚡', section: 'Product' },
  { id: 'flows', label: 'User Flows', icon: '🔄', section: 'Product' },
  { id: 'roadmap', label: 'Roadmap', icon: '🗺️', section: 'Product' },
  { id: 'architecture', label: 'Architecture', icon: '🏗️', section: 'Product' },
  { id: 'design', label: 'Design Mockups', icon: '🎨', section: 'Design' },
  { id: 'designsystem', label: 'Design System', icon: '🧩', section: 'Design' },
  { id: 'states', label: 'States Preview', icon: '📊', section: 'Design' },
  { id: 'onboarding', label: 'Onboarding Flow', icon: '🎓', section: 'Design' },
  { id: 'copy', label: 'Copy Guide', icon: '✍️', section: 'Design' },
]

export default function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const sections = [...new Set(navItems.map(item => item.section))]

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-50">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-sm text-white">AutoFill Guardian</h1>
            <p className="text-xs text-slate-400">Product Artifact</p>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        <Badge variant="warning" dot>Phase 0: Refinement</Badge>
      </div>

      <nav className="flex-1 p-4 space-y-4 overflow-y-auto">
        {sections.map((section) => (
          <div key={section}>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
              {section}
            </h3>
            <div className="space-y-1">
              {navItems
                .filter(item => item.section === section)
                .map((item) => (
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
            </div>
          </div>
        ))}
      </nav>

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
