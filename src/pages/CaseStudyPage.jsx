import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, MoveRight } from 'lucide-react'
import { projects, getProjectBySlug } from '../data/projects'
import BrowserMockup from '../components/ui/BrowserMockup'

export default function CaseStudyPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    if (project) document.title = `${project.name} — Case Study`
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const currentIdx = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIdx + 1) % projects.length]

  const block = (label, body) => (
    <div className="hairline py-10 grid md:grid-cols-[200px_1fr] gap-4 md:gap-10">
      <p className="eyebrow">{label}</p>
      <p className="text-bone-muted leading-relaxed max-w-2xl">{body}</p>
    </div>
  )

  return (
    <main className="pt-32 pb-24">
      <div className="container-editorial">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm text-bone-muted hover:text-brass transition-colors"
        >
          <ArrowLeft size={15} /> All work
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <span className="font-mono text-xs text-brass tracking-widest2">{project.index}</span>
          <h1 className="mt-4 text-4xl md:text-6xl leading-[1.05] text-bone max-w-3xl">
            {project.name}
          </h1>
          <p className="mt-4 text-bone-muted uppercase tracking-wide text-sm">
            {project.category} · {project.role} · {project.year}
          </p>
        </motion.header>

        <div className="mt-14">
          <BrowserMockup label={project.heroNote} image={project.image} className="w-full" />
        </div>

        <div className="mt-6 border-t border-ink-line">
          {block('Overview', project.description)}
          {block('The Challenge', project.challenge)}
          {block('The Approach', project.solution)}
          {block(
            'Technologies',
            <span className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="font-mono text-xs border border-ink-line px-2.5 py-1">
                  {t}
                </span>
              ))}
            </span>
          )}
          {block('Result', project.outcome)}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 border border-brass text-brass px-6 py-3 text-sm hover:bg-brass hover:text-ink transition-all duration-300 ease-editorial"
          >
            Visit live site
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-24 hairline pt-10 flex items-center justify-between">
          <div>
            <p className="eyebrow mb-2">Next Project</p>
            <p className="text-2xl text-bone">{next.name}</p>
          </div>
          <Link
            to={`/work/${next.slug}`}
            className="group inline-flex items-center gap-2 text-sm text-bone hover:text-brass transition-colors shrink-0"
          >
            View <MoveRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  )
}
