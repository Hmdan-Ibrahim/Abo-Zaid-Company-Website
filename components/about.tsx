'use client'

import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={ref}
            className={`transition-all duration-700 ${inView ? 'fade-in-up' : 'opacity-0'}`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">{language === 'ar' ? 'عن ' : 'About '}</span>
              <span className="text-primary">{language === 'ar' ? 'شركتنا' : 'Our Company'}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              {t.about.description1}
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              {t.about.description2}
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              {t.about.description3}
            </p>

            <div className="space-y-3">
              {t.about.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 ${inView ? 'slide-in-right' : 'opacity-0'}`}
          >
            <img
              src="/concrete-cutting-professional-team.jpg"
              alt={language === 'ar' ? 'فريق العمل' : 'Professional Team'}
              className="rounded-2xl shadow-2xl shadow-primary/20 glow-box"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
