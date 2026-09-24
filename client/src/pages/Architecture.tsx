export default function Architecture() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Architecture</h1>
        <p className="text-slate-400">Estrutura técnica do monorepo e decisões de arquitetura</p>
      </div>

      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">📂 Monorepo Structure</h2>
        <div className="bg-slate-900 rounded-xl p-5 border border-slate-700/50 font-mono text-sm">
          <pre className="text-slate-300 overflow-x-auto">{`autofill-guardian/
├── client/          - React + Vite + Tailwind
├── server/          - Node.js + Express
├── docs/            - Documentação
└── specs/           - Spec-Driven Development`}</pre>
        </div>
      </div>

      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">🛠️ Tech Stack</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-indigo-400 uppercase tracking-wider mb-3">Client</h3>
            <div className="space-y-2">
              {['React 18', 'Vite', 'Tailwind CSS', 'Zustand', 'TypeScript'].map((tech) => (
                <div key={tech} className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/30 text-sm text-white">{tech}</div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-3">Server</h3>
            <div className="space-y-2">
              {['Node.js 20', 'Express', 'PostgreSQL', 'Zod', 'TypeScript'].map((tech) => (
                <div key={tech} className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/30 text-sm text-white">{tech}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
