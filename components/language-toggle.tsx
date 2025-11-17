'use client'

import { useLanguage } from '@/lib/language-context'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      className="px-3 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all text-sm font-medium"
      aria-label="Toggle language"
    >
      {language === 'ar' ? 'EN' : 'العربية'}
    </button>
  )
}
