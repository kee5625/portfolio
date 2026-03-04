'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WORDS       = ['Design', 'Create', 'Inspire']
const DURATION_MS = 2700

interface Props {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: Props) {
  const [wordIndex, setWordIndex] = useState(0)
  const [count, setCount]         = useState(0)
  const startTimeRef              = useRef<number | null>(null)
  const rafRef                    = useRef<number | null>(null)
  const onCompleteRef             = useRef(onComplete)

  useEffect(() => { onCompleteRef.current = onComplete }, [onComplete])

  useEffect(() => {
    // ── Word rotation: every 900ms, step through WORDS ──
    const wordTimer = setInterval(() => {
      setWordIndex(prev => Math.min(prev + 1, WORDS.length - 1))
    }, 900)

    // ── Counter: 000 → 100 over DURATION_MS via rAF ──
    const tick = (ts: number) => {
      if (!startTimeRef.current) startTimeRef.current = ts
      const progress = Math.min((ts - startTimeRef.current) / DURATION_MS, 1)
      setCount(Math.floor(progress * 100))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setCount(100)
        clearInterval(wordTimer)
        // Wait 400ms after hitting 100, then signal completion
        setTimeout(() => onCompleteRef.current(), 400)
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      clearInterval(wordTimer)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const fmt = (n: number) => String(n).padStart(3, '0')

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* ── Top-left: "Portfolio" label ── */}
      <motion.p
        className="absolute top-8 left-8 md:top-12 md:left-12 text-xs md:text-sm text-muted uppercase tracking-[0.3em] select-none"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Portfolio
      </motion.p>

      {/* ── Center: rotating word ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={WORDS[wordIndex]}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text/80 select-none"
            initial={{ y: 20,  opacity: 0 }}
            animate={{ y: 0,   opacity: 1 }}
            exit={   { y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ── Bottom-right: numeric counter ── */}
      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-6xl md:text-8xl lg:text-9xl font-display text-text tabular-nums leading-none select-none"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {fmt(count)}
      </motion.div>

      {/* ── Progress bar (3px, gradient fill, glow) ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <motion.div
          className="h-full origin-left"
          style={{
            background:  'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
            boxShadow:   '0 0 8px rgba(137, 170, 204, 0.35)',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: DURATION_MS / 1000, ease: 'linear' }}
        />
      </div>
    </motion.div>
  )
}
