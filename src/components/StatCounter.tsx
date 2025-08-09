"use client"

import { useEffect, useRef, useState } from "react"

type Props = { end: number; duration?: number; suffix?: string; className?: string }

export default function StatCounter({ end, duration = 1.8, suffix = "", className }: Props) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.6 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let start: number | null = null
    const step = (t: number) => {
      if (start === null) start = t
      const p = Math.min((t - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(end * eased))
      if (p < 1) requestAnimationFrame(step)
    }
    const r = requestAnimationFrame(step)
    return () => cancelAnimationFrame(r)
  }, [visible, end, duration])

  return <span ref={ref} className={className}>{value}{suffix}</span>
} 