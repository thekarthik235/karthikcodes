import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] text-bone">{title}</h2>
      {description && <p className="mt-5 text-bone-muted text-base md:text-lg leading-relaxed">{description}</p>}
    </motion.div>
  )
}
