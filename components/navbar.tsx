'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'
import LanguageToggle from './language-toggle'

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <nav
      className={`fixed top-0 ${language === 'ar' ? 'right-0 left-auto' : 'left-0 right-auto'} z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-secondary/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AZ</span>
            </div>
            <span className="text-xl font-bold text-primary hidden sm:inline">
              {language === 'ar' ? 'ابو زيد' : 'Abu Zaid'}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              {t.nav.services}
            </a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">
              {t.nav.projects}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              {t.nav.contact}
            </a>
            <LanguageToggle />
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex md:hidden gap-2 items-center">
            <LanguageToggle />
            <button
              className="text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-secondary/95 border-t border-border py-4 space-y-2">
            <a href="#services" className="block px-4 py-2 text-foreground hover:text-primary">
              {t.nav.services}
            </a>
            <a href="#projects" className="block px-4 py-2 text-foreground hover:text-primary">
              {t.nav.projects}
            </a>
            <a href="#about" className="block px-4 py-2 text-foreground hover:text-primary">
              {t.nav.about}
            </a>
            <a href="#contact" className="block px-4 py-2 text-foreground hover:text-primary">
              {t.nav.contact}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
