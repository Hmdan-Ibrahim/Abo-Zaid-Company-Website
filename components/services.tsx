'use client'

import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

function ServiceCard({ title, description, index }: { title: string; description: string; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const icons = ['✂️', '⚙️', '⏱️']

  return (
    <div
      ref={ref}
      className={`bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-500 hover:glow-box group cursor-pointer ${inView ? 'fade-in-up' : 'opacity-0'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icons[index]}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-foreground">{language === 'ar' ? 'خدماتنا ' : 'Our '}</span>
            <span className="text-primary">{language === 'ar' ? 'المتميزة' : 'Services'}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
