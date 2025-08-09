"use client"

import { useMemo } from "react"

type Props = { count?: number; className?: string }

export default function HeroParticles({ count = 36, className }: Props) {
  const particles = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 4 + Math.random() * 6,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 6,
      opacity: 0.2 + Math.random() * 0.6,
      hue: Math.floor(200 + Math.random() * 160),
    })), [count])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute rounded-full animate-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            background: `radial-gradient(hsl(${p.hue} 90% 70%), transparent)`
          }}
        />
      ))}
    </div>
  )
} 