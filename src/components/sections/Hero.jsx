import { motion } from 'framer-motion'
import Button from '../ui/Button'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end pt-32 pb-20 overflow-hidden">
      {/* Ambient corner texture — quiet, not a gradient hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: 'radial-gradient(circle, #B08D3F 0%, transparent 70%)' }}
      />

      <div className="container-editorial relative w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="eyebrow mb-6 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brass-bright animate-pulse" />
          Available for freelance projects — Jan 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="text-[13vw] sm:text-[9vw] md:text-[6.2vw] leading-[0.98] text-bone max-w-5xl"
        >
          I build websites that make small teams look like established ones.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.25 }}
          className="mt-8 max-w-xl text-base md:text-lg text-bone-muted leading-relaxed"
        >
          Freelance web development for founders and small businesses — React and Next.js
          websites built with the kind of care that shows up in load times, not just screenshots.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/#work" variant="primary">
            View My Work
          </Button>
          <Button href="/#contact" variant="ghost">
            Start a Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
