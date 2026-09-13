import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MoveRight } from 'lucide-react'
import BrowserMockup from '../ui/BrowserMockup'

export default function ProjectSpread({ project, reversed = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="hairline py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center"
    >
      <div className={reversed ? 'md:order-2' : ''}>
        <BrowserMockup label={project.heroNote} 
          image={project.image}
        />
      </div>

      <div className={reversed ? 'md:order-1' : ''}>
        <span className="font-mono text-xs text-brass tracking-widest2">{project.index}</span>
        <h3 className="mt-4 text-2xl md:text-[2.1rem] leading-tight text-bone">{project.name}</h3>
        <p className="mt-1 text-sm text-bone-muted uppercase tracking-wide">
          {project.category} · {project.year}
        </p>
        <p className="mt-5 text-bone-muted leading-relaxed">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="font-mono text-[11px] uppercase tracking-wide text-bone-muted border border-ink-line px-2.5 py-1"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          {project.caseStudyAvailable && (
            <Link
              to={`/work/${project.slug}`}
              className="group inline-flex items-center gap-2 text-sm text-bone hover:text-brass transition-colors"
            >
              Read case study
              <MoveRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-bone-muted hover:text-brass transition-colors"
          >
            Live site
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
