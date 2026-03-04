'use client'

import { useEffect, useState } from 'react'

const NAV_LINKS = ['Home', 'Work', 'Resume']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    // pointer-events-none on wrapper so clicks fall through the empty space
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 pointer-events-none">
      <nav
        className={`
          pointer-events-auto inline-flex items-center gap-0.5
          rounded-full border border-white/10 bg-surface/80
          backdrop-blur-md px-2 py-2
          transition-shadow duration-300
          ${scrolled ? 'shadow-md shadow-black/30' : ''}
        `}
      >
        {/* Logo ring */}
        <LogoButton />

        <Divider />

        {/* Nav links */}
        {NAV_LINKS.map(link => (
          <button
            key={link}
            onClick={() => setActive(link)}
            className={`
              text-xs sm:text-sm rounded-full
              px-3 sm:px-4 py-1.5 sm:py-2
              transition-colors duration-200
              ${active === link
                ? 'text-text bg-stroke/50'
                : 'text-muted hover:text-text hover:bg-stroke/50'}
            `}
          >
            {link}
          </button>
        ))}

        <Divider />

        {/* "Say hi ↗" with gradient border on hover */}
        <SayHiButton />
      </nav>
    </div>
  )
}

/* ─── Logo ─── */
function LogoButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      className="relative flex-shrink-0 w-9 h-9 rounded-full p-[2px] transition-all duration-300"
      style={{
        background: hovered
          ? 'linear-gradient(270deg, #89AACC 0%, #4E85BF 100%)'
          : 'linear-gradient(90deg,  #89AACC 0%, #4E85BF 100%)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Home"
    >
      <div
        className="w-full h-full rounded-full bg-bg flex items-center justify-center transition-transform duration-200"
        style={{ transform: hovered ? 'scale(1.1)' : 'scale(1)' }}
      >
        <span className="text-[13px] font-display italic tracking-tighter text-text select-none">
          JA
        </span>
      </div>
    </button>
  )
}

/* ─── "Say hi" button ─── */
function SayHiButton() {
  return (
    <div className="relative group">
      {/* Gradient ring — expands 2px beyond the button on hover */}
      <span
        className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          inset:      '-2px',
          background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
        }}
      />
      <button className="relative z-10 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-muted group-hover:text-text transition-colors duration-200 bg-surface backdrop-blur-md">
        Say hi ↗
      </button>
    </div>
  )
}

/* ─── Thin vertical divider ─── */
function Divider() {
  return <div className="flex-shrink-0 w-px h-5 bg-stroke mx-1 hidden sm:block" />
}
