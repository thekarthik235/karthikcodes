import { image } from "framer-motion/client"

export const projects = [
  {
    slug: 'Construction Company website',
    index: '01',
    name: 'Murugan Constructions',
    category: 'Business Website',
    year: '2025',
    image: '/project1.png',
    description:
      'A restrained, project marketing site for a construction company, built to make a small team feel established.',
    role: 'Frontend Development & UI Design',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    challenge:
      'The client had strong credibility offline but a site that undersold them — generic template, no clear service structure, weak calls to action.',
    solution:
      'Rebuilt the information architecture around three clear service tiers, wrote conversion-focused copy, and designed a quiet, typographic visual language that reads as senior rather than loud.',
    outcome: 'qualified inquiry volume, load time, client quote',
    liveUrl: '#',
    caseStudyAvailable: true,
    heroNote: 'Construction project website · Editorial layout',
  },
  {
    slug: 'Freelancer Portfolio Website',
    index: '02',
    name: 'Freelancer Portfolio Website ',
    category: 'Digital Marketing Portfolio',
    year: '2026',
    image: '/project2.png',
    description:
      'A single-product landing page built to carry paid traffic — fast, clear, and structured around one decision.',
    role: 'Frontend Development',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    challenge:
      'Paid campaigns were driving traffic to a slow, cluttered page with a low add-to-cart rate.',
    solution:
      'Stripped the page to a single scroll narrative: problem, product, proof, offer. Rebuilt on a lightweight stack with image optimization and no unnecessary scripts.',
    outcome: 'conversion lift, Lighthouse score',
    liveUrl: '#',
    caseStudyAvailable: true,
    heroNote: 'Single-product LP · Conversion-first',
  },
  {
    slug: 'Edutech Company Website',
    index: '03',
    name: 'Edutech Company Website',
    category: 'Website Redesign',
    year: '2026',
    image: '/project3.png',
    description:
      'A ground-up redesign of a Edutech site, prioritizing Content details and trust signals.',
    role: 'Frontend Development & UX',
    stack: ['React', 'Tailwind CSS', 'React Router'],
    challenge:
      'The existing site was unreadable on mobile, where the majority of customers were arriving from search.',
    solution:
      'Mobile-first rebuild with a simplified website flow, clearer product explanations for every audience, and accessible form design.',
    outcome: 'Website Performance,Mobile Responsiveness',
    liveUrl: '#',
    caseStudyAvailable: true,
    heroNote: 'Edutech Company · Mobile-first',
  },
  // {
  //   slug: 'atlas-studio',
  //   index: '04',
  //   name: '[PROJECT NAME] — Atlas Studio',
  //   category: 'Portfolio / Frontend Build',
  //   year: '[YEAR]',
  //   description:
  //     'A motion-forward portfolio for an independent design studio, built to showcase work without slowing the page down.',
  //   role: 'Frontend Development',
  //   stack: ['React', 'Tailwind CSS', 'Framer Motion'],
  //   challenge:
  //     'The studio wanted an expressive, animated site but had been burned by a previous build that scored poorly on performance.',
  //   solution:
  //     'Used scroll-triggered reveals sparingly, lazy-loaded project imagery, and kept the JavaScript bundle lean so motion never came at the cost of speed.',
  //   outcome: '[RESULT]',
  //   liveUrl: '#',
  //   caseStudyAvailable: true,
  //   heroNote: 'Design studio · Motion-forward',
  // },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
