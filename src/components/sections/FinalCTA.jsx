import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function FinalCTA() {
  return (
    <section className="container-editorial py-28 md:py-40 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-6xl leading-[1.05] text-bone max-w-3xl mx-auto"
      >
        Have a project in mind?
        <br />
        <span className="text-brass italic">Let's build something worth remembering.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="mt-10"
      >
        <Button href="/#contact" variant="primary">
          Start a Project
        </Button>
      </motion.div>
    </section>
  )
}
