import { Button, Card, Badge, OTPDisplay } from '@/components/ui'
import { Bell, Settings, ArrowRight } from 'lucide-react'

export default function DesignSystem() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Design System</h1>
        <p className="text-slate-400">Biblioteca de componentes visuais seguindo DESIGN.md</p>
      </div>

      {/* Buttons */}
      <Card>
        <h2 className="text-xl font-semibold text-white mb-4">🔘 Buttons</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Primary</span>
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Variants</span>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-2 block">With Icons</span>
            <div className="flex flex-wrap gap-3">
              <Button icon={<Bell className="w-4 h-4" />}>Instalar</Button>
              <Button variant="secondary" iconRight={<ArrowRight className="w-4 h-4" />}>
                Configurar
              </Button>
              <Button variant="ghost" icon={<Settings className="w-4 h-4" />}>
                Settings
              </Button>
            </div>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Loading</span>
            <div className="flex flex-wrap gap-3">
              <Button loading>Carregando...</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Cards */}
      <Card>
        <h2 className="text-xl font-semibold text-white mb-4">📦 Cards</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card hoverable>
            <h3 className="font-semibold text-white mb-2">Card Hoverable</h3>
            <p className="text-sm text-slate-400">
              Passe o mouse para ver o efeito de borda indigo e shadow.
            </p>
          </Card>
          <Card padding="lg">
            <h3 className="font-semibold text-white mb-2">Card com Padding Grande</h3>
            <p className="text-sm text-slate-400">
              Cards podem ter diferentes paddings: none, sm, md, lg.
            </p>
          </Card>
        </div>
      </Card>

      {/* Badges */}
      <Card>
        <h2 className="text-xl font-semibold text-white mb-4">🏷️ Badges</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="success" dot>
            Monitorando
          </Badge>
          <Badge variant="warning" size="md">
            Medium Size
          </Badge>
        </div>
      </Card>

      {/* OTP Display */}
      <Card>
        <h2 className="text-xl font-semibold text-white mb-4">🔐 OTP Display</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Revealed</span>
            <OTPDisplay code="847291" />
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Masked</span>
            <OTPDisplay code="847291" masked />
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-2 block">With Countdown</span>
            <OTPDisplay code="847291" expiresAt={Date.now() + 180000} />
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-2 block">Sizes</span>
            <div className="flex flex-wrap gap-4 items-center">
              <OTPDisplay code="1234" size="sm" />
              <OTPDisplay code="123456" size="md" />
              <OTPDisplay code="12345678" size="lg" />
            </div>
          </div>
        </div>
      </Card>

      {/* Color Palette */}
      <Card>
        <h2 className="text-xl font-semibold text-white mb-4">🎨 Color Palette</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {[
            { name: 'Primary', color: 'bg-indigo-500', hex: '#6366F1' },
            { name: 'Secondary', color: 'bg-emerald-500', hex: '#10B981' },
            { name: 'Accent', color: 'bg-amber-500', hex: '#F59E0B' },
            { name: 'Background', color: 'bg-slate-900', hex: '#0F172A' },
            { name: 'Surface', color: 'bg-slate-800', hex: '#1E293B' },
            { name: 'Text', color: 'bg-slate-50', hex: '#F8FAFC' },
            { name: 'Muted', color: 'bg-slate-400', hex: '#94A3B8' },
            { name: 'Danger', color: 'bg-red-500', hex: '#EF4444' },
          ].map((c) => (
            <div key={c.name} className="text-center">
              <div className={`w-full aspect-square rounded-xl ${c.color} mb-2 shadow-lg`} />
              <p className="text-xs font-medium text-white">{c.name}</p>
              <p className="text-xs text-slate-500 font-mono">{c.hex}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Typography */}
      <Card>
        <h2 className="text-xl font-semibold text-white mb-4">📝 Typography</h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-slate-500 mb-1 block">Heading 1 (Inter 700)</span>
            <p className="text-3xl font-bold text-white">Nunca mais perca um código OTP</p>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-1 block">Heading 2 (Inter 700)</span>
            <p className="text-xl font-bold text-white">Últimas Capturas</p>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-1 block">Body (Inter 400)</span>
            <p className="text-base text-slate-300">
              AutoFill Guardian captura e preenche automaticamente códigos de verificação.
            </p>
          </div>
          <div>
            <span className="text-xs text-slate-500 mb-1 block">Mono (JetBrains Mono)</span>
            <p className="font-mono text-lg text-emerald-400">847291</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
