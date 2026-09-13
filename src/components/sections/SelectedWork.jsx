import { projects } from '../../data/projects'
import SectionHeading from '../ui/SectionHeading'
import ProjectSpread from '../projects/ProjectSpread'

export default function SelectedWork() {
  return (
    <section id="work" className="container-editorial py-24 md:py-32 scroll-mt-20">
      <SectionHeading
        eyebrow="Selected Work"
        title="Three projects, in the order I'd walk a client through them."
        description="Each one was built to solve a specific business problem, not just to look good in a screenshot. Full case studies below."
      />

      {/* Editorial index — doubles as a quick scan and in-page navigation */}
      <ol className="mt-14 hidden md:block border-t border-ink-line">
        {projects.map((project) => (
          <li key={project.slug} className="hairline">
            <a
              href={`#project-${project.slug}`}
              className="group flex items-center justify-between py-5 px-1 hover:pl-3 transition-all duration-300 ease-editorial"
            >
              <span className="flex items-center gap-6">
                <span className="font-mono text-xs text-brass w-8">{project.index}</span>
                <span className="text-lg text-bone group-hover:text-brass transition-colors">{project.name}</span>
              </span>
              <span className="text-sm text-bone-muted">{project.category}</span>
            </a>
          </li>
        ))}
      </ol>

      <div className="mt-4">
        {projects.map((project, i) => (
          <div id={`project-${project.slug}`} key={project.slug} className="scroll-mt-24">
            <ProjectSpread project={project} reversed={i % 2 === 1} />
          </div>
        ))}
      </div>
    </section>
  )
}
