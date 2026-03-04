'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen from './LoadingScreen'
import { LoadingContext } from '@/contexts/LoadingContext'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <LoadingContext.Provider value={{ isReady: !isLoading }}>
      {/* Loading screen — exits with opacity fade when isLoading → false */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Page content — fades in once loader is done */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </LoadingContext.Provider>
  )
}
