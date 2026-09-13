# Freelance Portfolio

A production-ready personal portfolio built with React, Vite, Tailwind CSS, Framer Motion,
and React Router.

## Design system

- **Background**: `#121110` (ink) / `#1B1A17` (panel)
- **Text**: `#F3EFE6` (bone) / `#9C9488` (muted)
- **Accent**: `#B08D3F` (brass) — used sparingly, on CTAs, numbers, and hover states
- **Type**: Fraunces (display serif) + Manrope (body) + IBM Plex Mono (labels/index numbers)
- **Signature element**: the "Selected Work" editorial index — a numbered list that doubles as
  in-page navigation into alternating full-width project spreads, instead of a card grid.

All tokens live in `tailwind.config.js` — change them there and they propagate everywhere.

## Before you launch — replace these

Every placeholder is bracketed like `[YOUR NAME]` so they're easy to find:

```
grep -rn "\[YOUR\|\[Your\|\[PROJECT\|\[CLIENT\|\[RESULT\|\[YEAR\|\[ROLE\|\[COMPANY\|\[Month" src public index.html
```

Specifically:

- `index.html` — title, meta description, canonical URL, OG/Twitter tags, structured data
- `src/data/projects.js` — real project names, descriptions, stack, results, live URLs
- `src/data/testimonials.js` — real client testimonials, or delete the section if you don't
  have any yet (never publish these as-is — they're clearly marked sample content)
- `src/components/layout/Navbar.jsx` and `Footer.jsx` — your name, email, GitHub, LinkedIn
- `src/components/sections/About.jsx` — your name and bio
- `src/components/sections/Contact.jsx` — your email and location
- `src/components/sections/Hero.jsx` — availability note
- `public/favicon.svg`, `public/robots.txt`, `public/sitemap.xml` — your domain and initials
- Swap the `BrowserMockup` placeholder blocks for real project screenshots
  (`src/components/ui/BrowserMockup.jsx` — replace the placeholder `<div>` with an `<img>`)

## Install & run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying to your own domain

This is a static single-page app — `dist/` is everything you need. Upload its contents to
your host's web root (via your host's file manager, FTP/SFTP, or their deploy CLI).

Because routing happens client-side (`/work/atlas-studio` etc.), your server needs to serve
`index.html` for any unknown path, or a direct visit/refresh on a case-study URL will 404.

**Nginx**
```nginx
location / {
  try_files $uri /index.html;
}
```

**Apache** (`.htaccess` in the same folder as `index.html`)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Then point your domain's DNS at your host and (if not already covered by your host) set up
HTTPS via Let's Encrypt/Certbot or your host's SSL option.

## SEO checklist before going live

- Fill in real title/description/canonical/OG tags in `index.html`
- Update `public/sitemap.xml` and `public/robots.txt` with your real domain
- Add real `alt` text once you swap in real project screenshots
- Submit the sitemap to Google Search Console after launch

## Notes

- Respects `prefers-reduced-motion` globally (see `src/index.css`)
- Keyboard focus states are visible everywhere (`:focus-visible` in `src/index.css`) —
  don't remove them
- The contact form validates client-side and is wired with a placeholder submit handler in
  `src/components/sections/Contact.jsx` — replace the placeholder `await` with a real call to
  Formspree, EmailJS, or your own API route (an example Formspree call is commented in file)
