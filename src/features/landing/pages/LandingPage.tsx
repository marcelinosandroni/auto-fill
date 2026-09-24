import { Shield, Bell, Zap, Lock, Mail, RefreshCw, ArrowRight, Chrome } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-slate-950 to-slate-950" />
        
        {/* Subtle particles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-indigo-300">Chrome Extension</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Nunca mais perca um
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
                código OTP
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              AutoFill Guardian captura e preenche automaticamente códigos de verificação 
              do seu email, notificações e browser. Como o autofill do Android, mas para desktop.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-3">
                <Chrome className="w-5 h-5" />
                Instalar Grátis no Chrome
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 text-slate-300 hover:text-white font-semibold rounded-xl border border-slate-700 hover:border-slate-600 transition-all">
                Ver como funciona →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tudo que você precisa</h2>
            <p className="text-xl text-slate-400">Recursos poderosos para automatizar seus códigos OTP</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bell className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Captura Inteligente</h3>
              <p className="text-slate-400">
                Detecta códigos OTP em notificações, emails e clipboard automaticamente
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto-Fill Instantâneo</h3>
              <p className="text-slate-400">
                Preenche campos de verificação na hora, sem você precisar copiar/colar
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Privado</h3>
              <p className="text-slate-400">
                Tudo processado localmente. Seus dados nunca saem do seu computador
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Source</h3>
              <p className="text-slate-400">
                Gmail, Outlook, notificações do browser, clipboard — tudo em um lugar
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Histórico Seguro</h3>
              <p className="text-slate-400">
                Veja todos os códigos capturados, mascarados por padrão
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <RefreshCw className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sync Futuro</h3>
              <p className="text-slate-400">
                Em breve: sincronize entre desktop e mobile
              </p>
            </div>
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
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 ml-4">
                <h3 className="text-xl font-semibold mb-3">Instale em 5 segundos</h3>
                <p className="text-slate-400">
                  Adicione a extensão ao Chrome com um click. Sem cadastro, sem configuração.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 ml-4">
                <h3 className="text-xl font-semibold mb-3">Conecte suas fontes</h3>
                <p className="text-slate-400">
                  Escolha de onde capturar códigos: Gmail, notificações do browser, clipboard.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 ml-4">
                <h3 className="text-xl font-semibold mb-3">Relaxe e trabalhe</h3>
                <p className="text-slate-400">
                  Códigos são capturados e preenchidos automaticamente. Você nem percebe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Preços simples</h2>
            <p className="text-xl text-slate-400">Comece grátis, faça upgrade quando precisar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="p-8 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-1">$0</div>
              <p className="text-slate-400 mb-6">Para sempre</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  50 auto-fills por dia
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  2 fontes
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  Histórico 7 dias
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  1 dispositivo
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <span>✗</span>
                  Sync
                </li>
              </ul>
              
              <button className="w-full px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors">
                Começar Grátis
              </button>
            </div>
            
            {/* Pro Plan */}
            <div className="relative p-8 bg-slate-800/50 rounded-xl border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full">
                Popular
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-1">$4.99</div>
              <p className="text-slate-400 mb-6">por mês</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  Auto-fills ilimitados
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  Todas as fontes
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  Histórico ilimitado
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  3 dispositivos
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  Cross-device sync
                </li>
              </ul>
              
              <button className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
                Upgrade Pro
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="p-8 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-1">Custom</div>
              <p className="text-slate-400 mb-6">Entre em contato</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  Tudo do Pro
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  API access
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  Dispositivos ilimitados
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  SSO / SAML
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  Suporte dedicado
                </li>
              </ul>
              
              <button className="w-full px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors">
                Falar com vendas
              </button>
            </div>
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
            
            <div className="text-sm text-slate-500">
              Made with ❤️ for productivity nerds
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
