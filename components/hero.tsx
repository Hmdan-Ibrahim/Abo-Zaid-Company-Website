'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-5xl sm:text-7xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0'
            }`}
        >
          <span className="text-foreground">
            {language === 'ar' ? 'قص وتخريم ' : 'Concrete '}
          </span>
          <span className="text-primary text-glow">
            {language === 'ar' ? 'الخرسانة' : 'Cutting & Drilling'}
          </span>
        </h1>

        <p
          className={`text-lg sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'fade-in-up' : 'opacity-0'
            }`}
        >
          {t.hero.subtitle}
        </p>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
