import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-ink-line">
      <div className="container-editorial py-16 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:gap-6">
        <div>
          <p className="font-display text-xl text-bone">KARTHIK</p>
          <p className="mt-3 text-sm text-bone-muted max-w-xs leading-relaxed">
            Freelance web developer building fast, considered websites for founders and small
            businesses.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <a
            href="mailto:karthikcodes2@gmail.com"
            className="flex items-center gap-2 text-sm text-bone hover:text-brass transition-colors"
          >
            <Mail size={15} /> karthikcodes2@gmail.com
          </a>
        </div>

        <div>
          <p className="eyebrow mb-4">Elsewhere</p>
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/[yourusername]"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-bone hover:text-brass transition-colors"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href="www.linkedin.com/in/karthik-kamaraj-873610209/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-bone hover:text-brass transition-colors"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="hairline">
        <div className="container-editorial py-6 flex items-center justify-between">
          <p className="text-xs text-bone-muted">© {new Date().getFullYear()} KARTHIKCODES. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-bone-muted hover:text-brass transition-colors"
            aria-label="Back to top"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
