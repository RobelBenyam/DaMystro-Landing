"use client"

import { useEffect, useState } from "react"
import HeroParticles from "./HeroParticles"

type Props = { count?: number; className?: string }

export default function HeroParticlesClient(props: Props) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return <HeroParticles {...props} />
} 