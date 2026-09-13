import { motion } from 'framer-motion'
import { process } from '../../data/process'
import SectionHeading from '../ui/SectionHeading'

export default function Process() {
  return (
    <section className="bg-ink-panel border-y border-ink-line">
      <div className="container-editorial py-24 md:py-32">
        <SectionHeading
          eyebrow="How We'd Work Together"
          title="A straightforward process, in the order it actually happens."
          description="Six steps, no surprises in between. Most projects move through this in a few weeks, not months."
        />

        <div className="mt-14 border-t border-ink-line">
          {process.map((step, i) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
              className="hairline grid md:grid-cols-[100px_1fr] gap-4 md:gap-10 py-8"
            >
              <span className="font-mono text-brass text-sm">{step.index}</span>
              <div>
                <h3 className="text-xl text-bone">{step.title}</h3>
                <p className="mt-2 text-sm text-bone-muted leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
