export default function Architecture() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Architecture</h1>
        <p className="text-slate-400">Estrutura técnica do monorepo e decisões de arquitetura</p>
      </div>

      {/* Monorepo Structure */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          📂 Monorepo Structure
        </h2>
        <div className="bg-slate-900 rounded-xl p-5 border border-slate-700/50 font-mono text-sm">
          <pre className="text-slate-300 overflow-x-auto">
{`autofill-guardian/
├── 📄 AGENTS.md              ← Regras do agente IA
├── 📄 APP.md                 ← Visão do produto
├── 📄 ARCHITECTURE.md        ← Este arquivo
├── 📄 REACT.md               ← Regras do frontend
├── 📄 NODE.md                ← Regras do backend
├── 📄 DESIGN.md              ← Design system
│
├── 📁 client/                ← React + Vite + Tailwind
│   ├── assets/
│   ├── components/           ← UI burra (botões, modais)
│   ├── core/                 ← DI Container
│   ├── features/
│   │   ├── landing/          ← Landing page
│   │   ├── dashboard/        ← Painel do usuário
│   │   ├── extension/        ← Popup + content scripts
│   │   └── auth/             ← Login, registro
│   ├── hooks/
│   ├── providers/
│   ├── store/                ← Zustand
│   └── utils/
│
├── 📁 server/                ← Node.js + Express
│   ├── api/                  ← Routes (única pasta que sabe do Express)
│   ├── core/                 ← DB, Loggers, DI, Errors
│   └── features/
│       ├── auth/
│       ├── notifications/
│       ├── autofill/
│       ├── history/
│       └── sync/
│
├── 📁 docs/
│   ├── planning/             ← Refinamento e artifacts
│   ├── PRODUCT.md
│   └── CHANGELOG.md
│
└── 📁 specs/
    ├── PLAN.md               ← Cérebro do projeto
    ├── BACKLOG.md            ← Ideias futuras
    ├── ROADMAP.md            ← Visão macro
    ├── tasks/                ← Tasks por fase
    └── history/              ← Fases concluídas`}
          </pre>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          🛠️ Tech Stack
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-indigo-400 uppercase tracking-wider">Client</h3>
            {[
              { name: 'React 18', desc: 'UI library' },
              { name: 'Vite', desc: 'Build tool' },
              { name: 'Tailwind CSS', desc: 'Styling' },
              { name: 'Zustand', desc: 'State management' },
              { name: 'Chrome Extension MV3', desc: 'Extension API' },
              { name: 'TypeScript', desc: 'Type safety' },
            ].map((tech) => (
              <div key={tech.name} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/30">
                <span className="text-sm text-white">{tech.name}</span>
                <span className="text-xs text-slate-500">{tech.desc}</span>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Server</h3>
            {[
              { name: 'Node.js 20', desc: 'Runtime' },
              { name: 'Express', desc: 'HTTP framework' },
              { name: 'PostgreSQL', desc: 'Database (Supabase)' },
              { name: 'Zod', desc: 'Validation' },
              { name: 'JWT', desc: 'Authentication' },
              { name: 'TypeScript', desc: 'Type safety' },
            ].map((tech) => (
              <div key={tech.name} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/30">
                <span className="text-sm text-white">{tech.name}</span>
                <span className="text-xs text-slate-500">{tech.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extension Architecture */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          🔌 Chrome Extension Architecture
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">⚙️</span>
              <h3 className="font-medium text-indigo-300 text-sm">Background Worker</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• Notification listener</li>
              <li>• OTP parser (regex)</li>
              <li>• Storage manager</li>
              <li>• Message hub</li>
              <li>• Alarm scheduler</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">📄</span>
              <h3 className="font-medium text-purple-300 text-sm">Content Script</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• OTP field detector</li>
              <li>• Input watcher</li>
              <li>• Auto-fill injector</li>
              <li>• Toast/overlay UI</li>
              <li>• Mutation observer</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🪟</span>
              <h3 className="font-medium text-emerald-300 text-sm">Popup (React)</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• Capture history list</li>
              <li>• Status indicator</li>
              <li>• Quick settings</li>
              <li>• Copy to clipboard</li>
              <li>• Dashboard link</li>
            </ul>
          </div>
        </div>

        {/* Communication flow */}
        <div className="mt-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
          <h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">Communication Flow</h4>
          <div className="flex items-center justify-center gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">Background</span>
            <span className="text-slate-500">←→</span>
            <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20">Content Script</span>
            <span className="text-slate-500">←→</span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Popup</span>
            <span className="text-slate-500">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20">API Server</span>
          </div>
        </div>
      </div>

      {/* Data Flow */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          🔄 Data Flow
        </h2>
        <div className="bg-slate-900 rounded-xl p-5 border border-slate-700/50">
          <div className="flex flex-col items-center gap-3">
            {[
              { label: 'Fonte (Email / Notification / Clipboard)', color: 'bg-amber-500/10 border-amber-500/20 text-amber-300' },
              { label: '↓' },
              { label: 'Background Worker (captura + parse OTP)', color: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300' },
              { label: '↓' },
              { label: 'chrome.storage.local (encrypted)', color: 'bg-slate-700/50 border-slate-600 text-slate-300' },
              { label: '↓' },
              { label: 'Content Script (detecta campo + auto-fill)', color: 'bg-purple-500/10 border-purple-500/20 text-purple-300' },
              { label: '↓' },
              { label: 'Feedback visual (toast + badge)', color: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' },
            ].map((item, i) => (
              item.color ? (
                <div key={i} className={`px-4 py-2 rounded-lg border text-sm ${item.color}`}>
                  {item.label}
                </div>
              ) : (
                <span key={i} className="text-slate-500 text-lg">{item.label}</span>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className="glass rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          🧠 Design Principles
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: 'Vertical Slices', desc: 'Cada feature é auto-contida. Sem camadas horizontais globais.', icon: '📐' },
            { title: 'Privacy First', desc: 'Tudo processado localmente. Sync é opcional e criptografado.', icon: '🔒' },
            { title: 'Anti-Abstraction', desc: 'Não criar micro-arquivos inúteis. Código direto e funcional.', icon: '🎯' },
            { title: 'Spec-Driven', desc: 'Toda implementação nasce de uma spec/task documentada.', icon: '📋' },
            { title: 'Dark Mode First', desc: 'Design system pensado para dark mode como padrão.', icon: '🌙' },
            { title: 'Micro Tasks', desc: 'Tasks de no máximo 1 hora. Dev com TDAH precisa de dopamina frequente.', icon: '⚡' },
          ].map((principle) => (
            <div key={principle.title} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{principle.icon}</span>
                <h3 className="font-medium text-white text-sm">{principle.title}</h3>
              </div>
              <p className="text-xs text-slate-400">{principle.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
