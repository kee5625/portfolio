'use client'

import { createContext, useContext } from 'react'

interface LoadingContextType {
  isReady: boolean
}

export const LoadingContext = createContext<LoadingContextType>({ isReady: false })

export function useLoadingContext() {
  return useContext(LoadingContext)
}
