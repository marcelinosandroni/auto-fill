/**
 * OTP Display Component
 * Segue DESIGN.md: Notificações/OTP Display
 * - bg-slate-900, border-2 border-emerald-500, rounded-lg
 * - Fonte mono grande para o código
 * - Countdown timer visual
 */

import { useState, useEffect } from 'react'
import { cn } from '@/utils/cn'
import { Eye, EyeOff, Copy, Check } from 'lucide-react'

interface OTPDisplayProps {
  code: string
  masked?: boolean
  expiresAt?: number
  onCopy?: () => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function OTPDisplay({
  code,
  masked = false,
  expiresAt,
  onCopy,
  size = 'md',
  className,
}: OTPDisplayProps) {
  const [isRevealed, setIsRevealed] = useState(!masked)
  const [copied, setCopied] = useState(false)
  const [timeLeft, setTimeLeft] = useState<string | null>(null)

  // Countdown timer
  useEffect(() => {
    if (!expiresAt) return

    const updateTimer = () => {
      const now = Date.now()
      const diff = expiresAt - now

      if (diff <= 0) {
        setTimeLeft('Expirado')
        return
      }

      const minutes = Math.floor(diff / 60000)
      const seconds = Math.floor((diff % 60000) / 1000)
      setTimeLeft(`${minutes}:${seconds.toString().padStart(2, '0')}`)
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [expiresAt])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      onCopy?.()
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const sizeStyles = {
    sm: 'text-2xl px-4 py-2',
    md: 'text-3xl px-5 py-3',
    lg: 'text-4xl px-6 py-4',
  }

  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 bg-slate-900 border-2 border-emerald-500 rounded-lg',
        'font-mono tracking-wider',
        sizeStyles[size],
        className
      )}
    >
      <span className="text-emerald-400">
        {isRevealed ? code : '••••••'}
      </span>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsRevealed(!isRevealed)}
          className="text-slate-400 hover:text-white transition-colors"
          aria-label={isRevealed ? 'Ocultar código' : 'Revelar código'}
        >
          {isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>

        <button
          onClick={handleCopy}
          className={cn(
            'text-slate-400 hover:text-white transition-colors',
            copied && 'text-emerald-400'
          )}
          aria-label="Copiar código"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {timeLeft && (
        <span
          className={cn(
            'text-xs font-sans',
            timeLeft === 'Expirado' ? 'text-red-400' : 'text-amber-400'
          )}
        >
          {timeLeft}
        </span>
      )}
    </div>
  )
}
