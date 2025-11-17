

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Projects from '@/components/projects'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {


  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
