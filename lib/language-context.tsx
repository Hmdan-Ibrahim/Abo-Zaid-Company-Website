'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language } from './translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar')
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved && (saved === 'ar' || saved === 'en')) {
      setLanguageState(saved)
      document.documentElement.lang = saved
      document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr'
    } else {
      // تعيين RTL للافتراضي
      document.documentElement.lang = 'ar'
      document.documentElement.dir = 'rtl'
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
