'use client'

import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'
import Image from 'next/image'
import { Video } from 'lucide-react'

const projects = [
  {
    title: { ar: "قص خرسانة", en: 'Concrete Cutting' },
    image: '/WhatsApp Image 2025-11-15 at 11.32.52 PM (1).jpeg'
  },
  {
    title: { ar: 'تخريم خرسانة لأسلاك كهرباء', en: 'Concrete cutting for electrical wiring' },
    image: '/WhatsApp Image 2025-11-15 at 11.32.52 PM.jpeg'
  },
  {
    title: { ar: 'قص خرسانة حائطية لأعمال الصرف', en: 'Cutting concrete wall for drainage works' },
    image: '/WhatsApp Image 2025-11-15 at 8.00.48 PM.jpeg'
  },
  {
    title: { ar: 'تخريم اسقف متعددة باحترافية', en: 'Professionally drilling multiple ceilings' },
    image: '/WhatsApp Image 2025-11-15 at 8.00.50 PM (1).jpeg'
  },
  {
    title: { ar: 'قص  حائط  خرساني', en: 'Concrete wall cutting' },
    image: '/WhatsApp Image 2025-11-15 at 8.00.50 PM.jpeg'
  },
  {
    title: { ar: 'أعمال تخريم خرسانة', en: 'Concrete cutting works' },
    image: '/WhatsApp Image 2025-11-15 at 8.00.52 PM.jpeg'
  },
  {
    title: { ar: 'قص خرسانة بالمنشار', en: 'Concrete cutting with a saw' },
    image: '/WhatsApp Image 2025-11-15 at 8.00.53 PM.jpeg'
  },
  {
    title: { ar: 'تخريم خرسانة سقف', en: 'Drilling roof concrete' },
    image: '/WhatsApp Image 2025-11-15 at 8.00.54 PM (1).jpeg'
  },
  {
    title: { ar: ' قص وتخريم الخرسانة', en: 'Concrete cutting and drilling' },
    image: '/WhatsApp Image 2025-11-15 at 8.00.54 PM (2).jpeg'
  },
  {
    title: { ar: 'قص وتخريم الخرسانة', en: 'Concrete cutting and drilling' },
    image: '/WhatsApp Image 2025-11-15 at 8.00.54 PM.jpeg'
  },
  {
    title: { ar: 'قص وتخريم الخرسانة', en: 'Concrete cutting and drilling' },
    video: '/WhatsApp Video 2025-11-15 at 8.00.51 PM.mp4'
  },
  {
    title: { ar: 'قص وتخريم الخرسانة', en: 'Concrete cutting and drilling' },
    video: '/WhatsApp Video 2025-11-17 at 9.57.01 PM.mp4'
  },
]

function ProjectCard({ project, index, language }: { project: typeof projects[0]; index: number; language: string }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${inView ? 'scale-in' : 'scale-95 opacity-0'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      {project.image && (
        <>
          <Image
            src={project.image || "/placeholder.svg"}
            width={10}
            height={15}
            alt={project.title[language as "ar" | "en"]}
            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">{project.title[language as 'ar' | 'en']}</h3>
            {/* <p className="text-primary font-semibold">{project.category[language as 'ar' | 'en']}</p> */}
          </div>
        </>
      )}

      {/* Video */}
      {project.video && (
        <video
          src={project.video}
          controls
          className="w-full h-72 object-cover rounded-lg"
        />
      )}

    </div>
  )
}

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-primary">{language === 'ar' ? 'مشاريعنا' : 'Our Projects'}</span>
            <span className="text-foreground">{language === 'ar' ? ' الناجحة' : ''}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} language={language} />
          ))}
        </div>
      </div>
    </section>
  )
}
