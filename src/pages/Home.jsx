import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import SelectedWork from '../components/sections/SelectedWork'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Process from '../components/sections/Process'
import Testimonials from '../components/sections/Testimonials'
import FinalCTA from '../components/sections/FinalCTA'
import Contact from '../components/sections/Contact'

export default function Home() {
  useEffect(() => {
    document.title = 'Karthik — Freelance Web Developer'
  }, [])

  return (
    <main>
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Contact />
    </main>
  )
}
