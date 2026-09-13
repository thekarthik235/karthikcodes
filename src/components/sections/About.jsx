import { motion } from 'framer-motion'

const points = [
  'Responsive by default, not as an afterthought pass at the end.',
  'Performance budget considered from the first component, not bolted on later.',
  'Code handed over clean enough that another developer could pick it up.',
  'Direct communication — you always know what stage the project is at.',
]

export default function About() {
  return (
    <section id="about" className="container-editorial py-24 md:py-32 scroll-mt-20">
      <div className="grid md:grid-cols-[0.8fr_1fr] gap-12 md:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="aspect-[4/5] bg-ink-panel border border-ink-line flex items-center justify-center">
            <span className="font-mono text-xs tracking-widest2 uppercase text-bone-muted">
              <img src="src\assets\portrait.png" alt="Golden words of LT"/>
             </span>
          </div>
        </motion.div>

        <div>
          <p className="eyebrow mb-4">About</p>
          <h2 className="text-3xl md:text-4xl leading-[1.15] text-bone max-w-xl">
            I work like the site is mine to defend, not just mine to ship.
          </h2>
          <p className="mt-6 text-bone-muted leading-relaxed max-w-xl">
            I'm Karthik, a freelance web developer working with founders and small
            businesses who need a site that performs — for search, for conversions, and for the
            people actually visiting it. I keep engagements small and focused: one project,
            clear scope, and a build I'd be comfortable putting my name on.
          </p>

          <ul className="mt-10 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-bone">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brass shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
