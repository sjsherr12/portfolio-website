# spencersherr — personal portfolio

Personal portfolio of **Spencer Sherr** — computer science & mathematics at
Princeton University. Designed and built from scratch with React, TypeScript,
Vite, and hand-written CSS. No UI kits, no templates.

## Quick start

```bash
npm install      # once
npm run dev      # local dev server at http://localhost:5173
npm run build    # type-checks + production build into dist/
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

## Editing content (the part you'll do for the next 4 years)

**All content lives in `src/data/`.** You should never need to touch a
component to update the site:

| File                     | What it controls                                            |
| ------------------------ | ----------------------------------------------------------- |
| `src/data/profile.ts`    | Name, hero line, bio, email, socials, portrait, resume      |
| `src/data/education.ts`  | Princeton + anything else                                   |
| `src/data/experience.ts` | Internships, jobs, teaching                                 |
| `src/data/projects.ts`   | Projects **and** ventures, one list — businesses get a `role` ("Founder") and an optional `status` badge |
| `src/data/types.ts`      | The shapes of all of the above                              |

Page order: **Education → Experience → Projects → Contact.**

Every optional field (links, badges, coursework, resume) simply doesn't render
when omitted — you can add entries sparsely and enrich them later.

### Before you publish — replacement checklist

- [ ] Replace every SAMPLE entry in `projects.ts` and `experience.ts`
      (they are invented placeholders, marked with comments)
- [ ] Fill in your real GitHub / LinkedIn URLs in `profile.ts`
- [ ] Rewrite the `bio` in `profile.ts` in your own words
- [ ] **Portrait**: drop a square photo (≥640×640, e.g. `portrait.jpg`) into
      `public/` and point `profile.portrait` at it
- [ ] **Resume**: add `public/resume.pdf` and set `profile.resumeUrl` to
      `"/resume.pdf"` (the Resume button appears automatically)
- [ ] Verify class year / degree wording in `profile.ts` and `education.ts`
- [ ] After deploying: add `og:url` + a 1200×630 `og:image` in `index.html`

## Design notes

The design language is **"paper & ink"**: warm off-white / warm near-black,
one burnt-orange accent (a quiet Princeton nod), hairline rules, and no
ornament — straightforward first.

- **Type**: [Inter](https://rsms.me/inter/) for everything (bold weights for
  the name and headings), JetBrains Mono for small metadata (dates, tags).
  Self-hosted via Fontsource — no external requests, works offline.
- **Tokens**: every color/font/width is a CSS custom property at the top of
  `src/styles/global.css`. Change `--accent` there and the whole site follows.
- **Theme**: light/dark follows the system by default; the toggle persists to
  `localStorage`. An inline script in `index.html` applies it before first
  paint (no flash).
- **Motion**: sections fade up on first view (IntersectionObserver), honors
  `prefers-reduced-motion`.
- **A11y**: semantic landmarks, skip-link, focus-visible rings, aria-current
  nav highlighting, aria-labels on icon links.

## Structure

```
src/
├── data/          ← all content (edit this)
├── components/    ← one component per page region
├── hooks/         ← useTheme, useActiveSection, useReveal
└── styles/        ← global.css: tokens + every rule, organized by section
```

## Deploying

Any static host works — the build output is `dist/`.

- **Vercel / Netlify** (easiest): import the repo, framework preset "Vite",
  done. Both give you previews per commit.
- **GitHub Pages**: set `base` in `vite.config.ts` to `"/<repo-name>/"` (or
  use a custom domain and keep `/`), build, and publish `dist/` — the
  [official guide](https://vite.dev/guide/static-deploy.html#github-pages)
  has a ready-made Action.

A custom domain (e.g. `spencersherr.com`) is worth the ~$12/yr — set it up in
your host's dashboard and update `og:url` in `index.html`.
