import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DaMystro - Crafting Extraordinary Gaming Experiences',
  description: 'DaMystro is a leading game development studio creating immersive gaming experiences that push the boundaries of imagination and technology.',
  keywords: 'game development, gaming, DaMystro, video games, game studio',
  authors: [{ name: 'DaMystro' }],
  openGraph: {
    title: 'DaMystro - Crafting Extraordinary Gaming Experiences',
    description: 'Immerse yourself in worlds where fantasy meets reality, where every decision shapes your destiny.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
