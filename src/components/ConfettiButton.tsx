"use client"

import { useCallback } from "react"

type Props = { className?: string; children: React.ReactNode; onClick?: () => void }

export default function ConfettiButton({ className, children, onClick }: Props) {
  const burst = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.()
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const container = document.createElement("div")
    container.className = "confetti-container"
    container.style.left = `${rect.left + rect.width / 2}px`
    container.style.top = `${rect.top + rect.height / 2}px`
    document.body.appendChild(container)
    const colors = ["#a78bfa", "#60a5fa", "#34d399", "#f472b6", "#f59e0b"]
    const pieces = 36
    for (let i = 0; i < pieces; i++) {
      const s = document.createElement("span")
      s.className = "confetti-piece"
      const angle = (i / pieces) * Math.PI * 2
      const velocity = 8 + Math.random() * 8
      const dx = Math.cos(angle) * velocity
      const dy = Math.sin(angle) * velocity
      s.style.setProperty("--dx", `${dx}`)
      s.style.setProperty("--dy", `${dy}`)
      s.style.background = colors[Math.floor(Math.random() * colors.length)]
      s.style.width = `${6 + Math.random() * 6}px`
      s.style.height = `${6 + Math.random() * 10}px`
      s.style.transform = `rotate(${Math.random() * 360}deg)`
      container.appendChild(s)
    }
    setTimeout(() => container.remove(), 1200)
  }, [onClick])

  return (
    <button onClick={burst} className={className}>
      {children}
    </button>
  )
} 