'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Navbar from './Navbar'
import { useLoadingContext } from '@/contexts/LoadingContext'

const ROLES   = ['Creative', 'Fullstack', 'Founder', 'Scholar']
const HLS_SRC = 'https://stream.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g.m3u8'

/* ─────────────────────────────────────────────────
   Gradient-border CTA button
   variant="filled"  → white bg, dark text; hover → dark bg + gradient ring
   variant="outline" → dark bg, white text, stroke border; hover → gradient ring
───────────────────────────────────────────────── */
function GradientBorderBtn({
  children,
  variant,
}: {
  children: React.ReactNode
  variant: 'filled' | 'outline'
}) {
  const isFilled = variant === 'filled'
  return (
    <div className="relative group">
      <span
        className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          inset:      '-2px',
          background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
        }}
      />
      <button
        className={`
          relative z-10 px-7 py-3.5 text-sm rounded-full
          transition-all duration-200 group-hover:scale-105
          ${isFilled
            ? 'bg-text text-bg group-hover:bg-bg group-hover:text-text'
            : 'bg-bg text-text border-2 border-stroke'}
        `}
      >
        {children}
      </button>
    </div>
  )
}

/* ─────────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────────── */
export default function Hero() {
  const { isReady }          = useLoadingContext()
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleKey,   setRoleKey]   = useState(0)
  const heroRef      = useRef<HTMLElement>(null)
  const videoRef     = useRef<HTMLVideoElement>(null)
  const animatedRef  = useRef(false)

  // ── Role cycling every 2s ──
  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % ROLES.length)
      setRoleKey(prev => prev + 1)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  // ── HLS video init (HLS.js for Chrome/Firefox, native for Safari) ──
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hlsInstance: { destroy: () => void } | null = null

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari — native HLS
      video.src = HLS_SRC
    } else {
      import('hls.js').then(({ default: Hls }) => {
        if (!Hls.isSupported()) return
        const hls = new Hls({ autoStartLoad: true, startLevel: -1 })
        hlsInstance = hls
        hls.loadSource(HLS_SRC)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {/* autoplay blocked — fine, loop attr handles it */})
        })
      })
    }

    return () => { hlsInstance?.destroy() }
  }, [])

  // ── GSAP entrance — runs once, after the loading screen completes ──
  useEffect(() => {
    if (!isReady || animatedRef.current || !heroRef.current) return
    animatedRef.current = true

    const ctx = gsap.context(() => {
      // Set initial invisible states before timeline plays
      gsap.set('.name-reveal', { opacity: 0, y: 50 })
      gsap.set('.blur-in',     { opacity: 0, filter: 'blur(10px)', y: 20 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Name slides up
      tl.to('.name-reveal', { opacity: 1, y: 0, duration: 1.2 }, 0.1)
      // All .blur-in elements stagger in
      tl.to('.blur-in',     { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 }, 0.3)
    }, heroRef)

    return () => ctx.revert()
  }, [isReady])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Background video layer ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-bg.jpg"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        {/* Subtle darkening overlay */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Bottom gradient — blends into page bg (#0a0a0a) */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* ── Floating pill navbar ── */}
      <Navbar />

      {/* ── Hero content ── */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">

        {/* Eyebrow */}
        <span className="blur-in block text-xs text-muted uppercase tracking-[0.3em] mb-8">
          COLLECTION '26
        </span>

        {/* Name — large display type */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text mb-6">
          Michael Smith
        </h1>

        {/* Role line with cycling word */}
        <p className="blur-in text-lg md:text-xl lg:text-2xl text-muted mb-10">
          <span
            key={roleKey}
            className="font-display italic text-text animate-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>{' '}
          lives in Chicago.
        </p>

        {/* Bio */}
        <p className="blur-in text-sm md:text-base text-muted leading-relaxed max-w-md mb-12">
          Designing seamless digital interactions by focusing on the unique
          nuances which bring systems to life.
        </p>

        {/* CTA buttons */}
        <div className="blur-in flex items-center gap-4 flex-wrap justify-center">
          <GradientBorderBtn variant="filled">See Works</GradientBorderBtn>
          <GradientBorderBtn variant="outline">Reach out...</GradientBorderBtn>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-muted uppercase tracking-[0.2em] select-none">
          SCROLL
        </span>
        {/* Thin line with animated dot */}
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-text animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}
