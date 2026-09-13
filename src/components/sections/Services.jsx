import { motion } from 'framer-motion'
import { services } from '../../data/services'
import SectionHeading from '../ui/SectionHeading'

export default function Services() {
  return (
    <section id="services" className="bg-ink-panel border-y border-ink-line scroll-mt-20">
      <div className="container-editorial py-24 md:py-32">
        <SectionHeading
          eyebrow="Services"
          title="Where I help."
          description="Frontend-focused development for businesses that need a site to actually earn its keep."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-x-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.05 }}
              className="hairline py-8 first:border-t-0 md:[&:nth-child(-n+2)]:border-t-0"
            >
              <h3 className="text-xl text-bone">{service.title}</h3>
              <p className="mt-3 text-sm text-bone-muted leading-relaxed max-w-md">{service.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
