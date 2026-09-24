import { Button, Card, Badge } from '@/components/ui'
import { Shield, Bell, Zap, Lock, Mail, RefreshCw, Chrome, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-950/20 to-slate-900" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="primary" dot className="mb-8">Chrome Extension</Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Nunca mais perca um<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">código OTP</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                AutoFill Guardian captura e preenche automaticamente códigos de verificação do seu email, notificações e browser.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
                <Button size="lg" icon={<Chrome className="w-5 h-5" />} iconRight={<ArrowRight className="w-5 h-5" />}>
                  Instalar no Chrome
                </Button>
                <Button variant="secondary" size="lg">Ver como funciona</Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-[350px] mx-auto">
                <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-2xl" />
                <Card className="relative overflow-hidden">
                  <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 -m-6 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="w-6 h-6 text-white" />
                        <span className="font-bold text-white">AutoFill Guardian</span>
                      </div>
                      <Badge variant="success" dot size="sm">Monitorando</Badge>
                    </div>
                  </div>
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
                  <div className="space-y-2">
                    {[
                      { icon: '📧', from: 'Google', code: '••••••', time: '2 min', used: true },
                      { icon: '🔔', from: 'Slack', code: '••••••', time: '15 min', used: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900 border border-slate-700">
                        <span>{item.icon}</span>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-white">{item.from}</div>
                          <div className="font-mono text-xs text-slate-400">{item.code}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-slate-500">{item.time}</div>
                          {item.used && <span className="text-xs text-emerald-400">✓</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tudo que você precisa</h2>
            <p className="text-xl text-slate-400">Recursos poderosos para automatizar seus códigos OTP</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Bell, title: 'Captura Inteligente', desc: 'Detecta códigos OTP em notificações, emails e clipboard', color: 'indigo' },
              { icon: Zap, title: 'Auto-Fill Instantâneo', desc: 'Preenche campos de verificação na hora', color: 'emerald' },
              { icon: Shield, title: 'Histórico Seguro', desc: 'Veja todos os códigos capturados, mascarados', color: 'cyan' },
              { icon: Mail, title: 'Multi-Source', desc: 'Gmail, Outlook, notificações, clipboard', color: 'amber' },
              { icon: Lock, title: 'Privacidade Total', desc: 'Tudo processado localmente', color: 'purple' },
              { icon: RefreshCw, title: 'Sync Futuro', desc: 'Em breve: sincronize entre dispositivos', color: 'pink' },
            ].map((feature, i) => (
              <Card key={i} hoverable>
                <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Preços simples</h2>
            <p className="text-xl text-slate-400">Comece grátis, faça upgrade quando precisar</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card padding="lg">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-1">$0</div>
              <p className="text-slate-400 mb-6">Para sempre</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2 text-slate-300"><span className="text-emerald-400">✓</span>50 auto-fills/dia</li>
                <li className="flex items-center gap-2 text-slate-300"><span className="text-emerald-400">✓</span>1 dispositivo</li>
              </ul>
              <Button variant="secondary" fullWidth>Começar Grátis</Button>
            </Card>
            <Card padding="lg" className="border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/10 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2"><Badge variant="primary" size="md">Popular</Badge></div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-1">$4.99<span className="text-lg text-slate-400">/mês</span></div>
              <p className="text-slate-400 mb-6">Para power users</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2 text-slate-300"><span className="text-emerald-400">✓</span>Ilimitado</li>
                <li className="flex items-center gap-2 text-slate-300"><span className="text-emerald-400">✓</span>Multi-dispositivo</li>
              </ul>
              <Button fullWidth>Upgrade Pro</Button>
            </Card>
            <Card padding="lg">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-1">Custom</div>
              <p className="text-slate-400 mb-6">Para times</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2 text-slate-300"><span className="text-emerald-400">✓</span>API access</li>
                <li className="flex items-center gap-2 text-slate-300"><span className="text-emerald-400">✓</span>SSO + Audit</li>
              </ul>
              <Button variant="secondary" fullWidth>Falar com vendas</Button>
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
            <div className="text-sm text-slate-500">Made with ❤️ for productivity nerds</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
