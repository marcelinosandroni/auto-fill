import { Button, Card, Badge, OTPDisplay } from '@/components/ui'
import { Bell, Settings, ArrowRight } from 'lucide-react'

export default function DesignSystem() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Design System</h1>
        <p className="text-slate-400">Biblioteca de componentes visuais seguindo DESIGN.md</p>
      </div>

      <Card>
        <h2 className="text-xl font-semibold text-white mb-4">🔘 Buttons</h2>
        <div className="space-y-4">
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
            <span className="text-xs text-slate-500 mb-2 block">Sizes</span>
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold text-white mb-4">🏷️ Badges</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success" dot>Monitorando</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold text-white mb-4">🔐 OTP Display</h2>
        <div className="space-y-4">
          <OTPDisplay code="847291" />
          <OTPDisplay code="847291" masked />
          <OTPDisplay code="847291" expiresAt={Date.now() + 180000} />
        </div>
      </Card>
    </div>
  )
}
