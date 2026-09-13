import { motion } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section className="container-editorial py-24 md:py-32">
      <SectionHeading eyebrow="What Clients Say" title="Testimonials." />
      <p className="mt-2 text-xs text-bone-muted font-mono">
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
            className="border border-ink-line p-8 flex flex-col justify-between"
          >
            <blockquote className="text-bone leading-relaxed">"{t.quote}"</blockquote>
            <figcaption className="mt-8 pt-6 border-t border-ink-line">
              <p className="text-sm text-bone">{t.name}</p>
              <p className="text-xs text-bone-muted mt-0.5">
                {t.role}, {t.company}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
