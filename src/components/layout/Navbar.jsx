import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-editorial ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-ink-line' : 'bg-transparent'
      }`}
    >
      <nav className="container-editorial flex items-center justify-between h-20" aria-label="Primary">
        <Link to="/" className="font-display text-lg tracking-wide text-bone">
          KARTHIKCODES
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-bone-muted hover:text-bone transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          className="hidden md:inline-flex items-center border border-brass text-brass px-5 py-2.5 text-sm tracking-wide hover:bg-brass hover:text-ink transition-all duration-300 ease-editorial"
        >
          Let&apos;s Work Together
        </a>

        <button
          className="md:hidden text-bone"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-ink border-t border-ink-line">
          <ul className="container-editorial py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-base text-bone" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                className="inline-flex items-center border border-brass text-brass px-5 py-2.5 text-sm tracking-wide"
              >
                Let&apos;s Work Together
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
