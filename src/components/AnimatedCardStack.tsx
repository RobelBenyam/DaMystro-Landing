"use client"

import { useEffect, useRef, useState } from "react"

type Props = { className?: string }

type Card = {
  id: number
  from: string
  to: string
  rotate: number
  offsetX: number
  offsetY: number
  icon: string
}

export default function AnimatedCardStack({ className }: Props) {
  const targetTiltY = useRef(0)
  const targetShiftX = useRef(0)
  const targetScale = useRef(1)
  const currentTiltY = useRef(0)
  const currentShiftX = useRef(0)
  const currentScale = useRef(1)
  const rafRef = useRef<number | null>(null)
  const timeRef = useRef(0)
  const hoveringRef = useRef(false)
  const [tick, setTick] = useState(0)
  const cursorPx = useRef(0.5)
  const cursorPy = useRef(0.5)

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    cursorPx.current = Math.max(0, Math.min(1, px))
    cursorPy.current = Math.max(0, Math.min(1, py))
    targetTiltY.current = (px - 0.5) * 7
    targetShiftX.current = (px - 0.5) * 10
  }

  function onEnter() {
    hoveringRef.current = true
    targetScale.current = 1.015
  }

  function onLeave() {
    hoveringRef.current = false
    targetTiltY.current = 0
    targetShiftX.current = 0
    targetScale.current = 1
  }

  useEffect(() => {
    let mounted = true
    const loop = () => {
      if (!mounted) return
      timeRef.current += 16
      if (!hoveringRef.current) {
        const t = timeRef.current * 0.0015
        targetTiltY.current = Math.sin(t) * 2.2
        targetShiftX.current = Math.sin(t * 0.9) * 4
        targetScale.current = 1
      }
      currentTiltY.current += (targetTiltY.current - currentTiltY.current) * 0.12
      currentShiftX.current += (targetShiftX.current - currentShiftX.current) * 0.12
      currentScale.current += (targetScale.current - currentScale.current) * 0.1
      setTick(t => (t + 1) % 100000)
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => {
      mounted = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const cards: Card[] = [
    { id: 1, from: "from-purple-500", to: "to-blue-500", rotate: -8, offsetX: -18, offsetY: 10, icon: "♠" },
    { id: 2, from: "from-fuchsia-500", to: "to-violet-500", rotate: 0, offsetX: 0, offsetY: 0, icon: "♦" },
    { id: 3, from: "from-indigo-500", to: "to-cyan-500", rotate: 8, offsetX: 18, offsetY: -10, icon: "♣" },
  ]

  const tiltY = currentTiltY.current
  const shiftX = currentShiftX.current
  const scale = currentScale.current
  const spotX = Math.round(cursorPx.current * 100)
  const spotY = Math.round(cursorPy.current * 100)

  return (
    <div
      className={`relative mx-auto h-[360px] w-[300px] sm:h-[420px] sm:w-[360px] perspective-1000 ${className ?? ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
    >
      <div className="absolute inset-0 preserve-3d" style={{ transform: `rotateY(${tiltY}deg) scale(${scale})`, transition: "transform 60ms linear" }}>
        {cards.map((c, i) => (
          <div
            key={c.id}
            className={`absolute left-1/2 top-1/2 h-[200px] w-[140px] sm:h-[240px] sm:w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br ${c.from} ${c.to} shadow-2xl card-glow overflow-hidden`}
            style={{ transform: `translate3d(${c.offsetX + shiftX * ((i - 1) * 0.6)}px, ${c.offsetY}px, ${i * 40 + 80}px) rotateZ(${c.rotate}deg)` }}
          >
            <div className="absolute inset-0 rounded-2xl" style={{ background: `radial-gradient(600px circle at ${spotX}% ${spotY}%, rgba(255,255,255,0.18), transparent 60%)`, mixBlendMode: "screen" as any, transition: "background 80ms linear" }} />
            <div className="absolute inset-0">
              <div className="shine" />
            </div>
            <div className="relative flex h-full w-full items-center justify-center text-4xl sm:text-5xl text-white/90">{c.icon}</div>
            <div className="absolute bottom-3 left-3 text-xs sm:text-sm tracking-wider text-white/90">DaMystro</div>
          </div>
        ))}
      </div>
    </div>
  )
} 