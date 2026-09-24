import { Button, Card, Badge } from '@/components/ui'
import { Shield, Bell, Zap, Lock, Mail, RefreshCw, Chrome, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background: gradiente escuro com partículas sutis */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-950/20 to-slate-900" />
        
        {/* Partículas sutis */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/3 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <Badge variant="primary" dot className="mb-8">
                Chrome Extension
              </Badge>
              
              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Nunca mais perca um
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
                  código OTP
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                AutoFill Guardian captura e preenche automaticamente códigos de verificação do seu email, notificações e browser.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
                <Button size="lg" icon={<Chrome className="w-5 h-5" />} iconRight={<ArrowRight className="w-5 h-5" />}>
                  Instalar no Chrome
                </Button>
                <Button variant="secondary" size="lg">
                  Ver como funciona
                </Button>
              </div>
            </div>
            
            {/* Right: Mockup da extensão */}
            <div className="relative">
              <div className="relative w-[350px] mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-2xl" />
                
                {/* Extension popup mockup */}
                <Card className="relative overflow-hidden">
                  {/* Header */}
                  <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 -m-6 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="w-6 h-6 text-white" />
                        <span className="font-bold text-white">AutoFill Guardian</span>
                      </div>
                      <Badge variant="success" dot size="sm">
                        Monitorando
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-px bg-slate-700 -mx-6 mb-4">
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
                  
                  {/* Captures */}
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-slate-400 mb-2">Últimas Capturas</div>
                    {[
                      { icon: '📧', from: 'Google', code: '••••••', time: '2 min', used: true },
                      { icon: '🔔', from: 'Slack', code: '••••••', time: '15 min', used: false },
                      { icon: '📋', from: 'Clipboard', code: '••••••', time: '1h', used: true },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-indigo-500/30 transition-all">
                        <span className="text-base">{item.icon}</span>
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
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-700">
                    <Button variant="ghost" size="sm">
                      ⚙️ Settings
                    </Button>
                    <Button size="sm">
                      Dashboard
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tudo que você precisa</h2>
            <p className="text-xl text-slate-400">Recursos poderosos para automatizar seus códigos OTP</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: Captura Inteligente */}
            <Card hoverable>
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bell className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Captura Inteligente</h3>
              <p className="text-slate-400">
                Detecta códigos OTP em notificações, emails e clipboard automaticamente
              </p>
            </Card>
            
            {/* Feature 2: Auto-Fill Instantâneo */}
            <Card hoverable>
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto-Fill Instantâneo</h3>
              <p className="text-slate-400">
                Preenche campos de verificação na hora, sem você precisar copiar/colar
              </p>
            </Card>
            
            {/* Feature 3: Histórico Seguro */}
            <Card hoverable>
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Histórico Seguro</h3>
              <p className="text-slate-400">
                Veja todos os códigos capturados, mascarados por padrão
              </p>
            </Card>
            
            {/* Feature 4: Multi-Source */}
            <Card hoverable>
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Source</h3>
              <p className="text-slate-400">
                Gmail, Outlook, notificações do browser, clipboard — tudo em um lugar
              </p>
            </Card>
            
            {/* Feature 5: Privacidade Total */}
            <Card hoverable>
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacidade Total</h3>
              <p className="text-slate-400">
                Tudo processado localmente. Seus dados nunca saem do seu computador
              </p>
            </Card>
            
            {/* Feature 6: Sync entre dispositivos */}
            <Card hoverable>
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <RefreshCw className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sync entre dispositivos</h3>
              <p className="text-slate-400">
                Em breve: sincronize entre desktop e mobile
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Como funciona</h2>
            <p className="text-xl text-slate-400">Três passos simples para nunca mais perder um código</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-indigo-500/20">
                1
              </div>
              <Card className="ml-4">
                <h3 className="text-xl font-semibold mb-3">Instale a extensão</h3>
                <p className="text-slate-400">
                  Adicione ao Chrome com um click. Sem cadastro, sem configuração.
                </p>
              </Card>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-purple-500/20">
                2
              </div>
              <Card className="ml-4">
                <h3 className="text-xl font-semibold mb-3">Conecte suas fontes</h3>
                <p className="text-slate-400">
                  Gmail, notificações do browser, clipboard — escolha de onde capturar.
                </p>
              </Card>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-emerald-500/20">
                3
              </div>
              <Card className="ml-4">
                <h3 className="text-xl font-semibold mb-3">Relaxe</h3>
                <p className="text-slate-400">
                  Códigos são preenchidos automaticamente. Você nem percebe.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Preços simples</h2>
            <p className="text-xl text-slate-400">Comece grátis, faça upgrade quando precisar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card padding="lg">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-1">$0</div>
              <p className="text-slate-400 mb-6">Para sempre</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  50 auto-fills/dia
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  1 dispositivo
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  2 fontes
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <span>✗</span>
                  Sync
                </li>
              </ul>
              
              <Button variant="secondary" fullWidth>
                Começar Grátis
              </Button>
            </Card>
            
            {/* Pro Plan */}
            <div className="relative">
              <Card padding="lg" className="border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="primary" size="md">
                    Popular
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-1">$4.99<span className="text-lg text-slate-400">/mês</span></div>
                <p className="text-slate-400 mb-6">Para power users</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-slate-300">
                    <span className="text-emerald-400">✓</span>
                    Auto-fills ilimitados
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <span className="text-emerald-400">✓</span>
                    Multi-dispositivo
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <span className="text-emerald-400">✓</span>
                    Todas as fontes
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <span className="text-emerald-400">✓</span>
                    Prioridade
                  </li>
                </ul>
                
                <Button fullWidth>
                  Upgrade Pro
                </Button>
              </Card>
            </div>
            
            {/* Enterprise Plan */}
            <Card padding="lg">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-1">Custom</div>
              <p className="text-slate-400 mb-6">Para times</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  API access
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  SSO
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  Audit logs
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  Suporte dedicado
                </li>
              </ul>
              
              <Button variant="secondary" fullWidth>
                Falar com vendas
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">AutoFill Guardian</div>
                <div className="text-sm text-slate-400">Nunca mais perca um código OTP</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            
            <div className="text-sm text-slate-500">
              Made with ❤️ for productivity nerds
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
