# spencersherr.com

Personal portfolio site. Built from scratch with React, TypeScript, Vite, and
hand-written CSS — no templates, no UI kits.

## Development

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
npm run lint
```

## Structure

```
src/
├── data/          all page content (profile, education, experience, projects)
├── components/    one component per page region
├── hooks/         useTheme, useActiveSection, useReveal
└── styles/        global.css — design tokens + every rule
```

Page content lives entirely in `src/data/` as plain typed objects, so updating
the site never means touching a component. Description strings support inline
links with `[label](https://url)` syntax.

## Design

Neutral palette (white / `#1a1a1a`) with a single orange accent, defined as
CSS custom properties at the top of `global.css`. Inter for text, JetBrains
Mono for small labels. Light/dark theme follows the system, persists to
`localStorage`, and is applied before first paint. Scroll-reveal animations
respect `prefers-reduced-motion`.

## Deploying

The build output in `dist/` is fully static — deploys as-is on Vercel,
Netlify, or GitHub Pages.
