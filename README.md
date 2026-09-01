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
├── content/       essays, as Markdown files
├── components/    one component per page region
├── hooks/         useTheme, useActiveSection, useReveal, useRoute
└── styles/        global.css — design tokens + every rule
```

Page content lives entirely in `src/data/` as plain typed objects, so updating
the site never means touching a component. Description strings support inline
links with `[label](https://url)` syntax.

## Essays

Essays are Markdown files in `src/content/essays/`. To publish one, drop a
file in that folder — no code changes. The filename becomes the URL
(`practical-thoughts.md` → `/essays/practical-thoughts`), and the file opens
with a frontmatter block:

```markdown
---
title: Practical thoughts on building a successful business and life
date: 2026-09-01
blurb: One line, shown under the title in the essay list.
---

The essay body. Blank-line-separated paragraphs, plus `## headings`,
`> quotes`, `- lists`, `**bold**`, `*italic*`, and [links](https://url).
```

The list on the home page is ordered newest first by `date`, and reading time
is computed from the word count. `src/components/markdown.tsx` is a small
hand-written renderer for the subset above — there is no Markdown dependency.

Essays are inlined into the JS bundle at build time (about 9 kB each), which
is the right trade at this scale; past a few dozen, switch the glob in
`src/data/essays.ts` to lazy loading.

## Design

Neutral palette (white / `#1a1a1a`) with a single orange accent, defined as
CSS custom properties at the top of `global.css`. Inter for text, JetBrains
Mono for small labels. Light/dark theme follows the system, persists to
`localStorage`, and is applied before first paint. Scroll-reveal animations
respect `prefers-reduced-motion`.

## Deploying

The build output in `dist/` is fully static — deploys as-is on Vercel,
Netlify, or GitHub Pages.
