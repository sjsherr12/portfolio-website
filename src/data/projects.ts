import type { Project } from "./types";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SAMPLE DATA — every entry below (except the last) is invented placeholder
 *  content so you can see how the layout handles real-looking text.
 *  Replace with your actual projects before publishing.
 *
 *  Field notes:
 *   · `href`     — live demo / site. Makes the whole row clickable (↗ arrow).
 *   · `repoHref` — adds a small "Source" link under the description.
 *   · Order matters: put your strongest work first.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    title: "Ledgerline",
    year: "2026",
    description:
      "Lightweight bookkeeping for student-run businesses — double-entry accounting under the hood, plain English on top.",
    tags: ["TypeScript", "React", "PostgreSQL"],
    href: "https://example.com", // TODO
    repoHref: "https://github.com/your-username/ledgerline", // TODO
  },
  {
    title: "Proofpad",
    year: "2025",
    description:
      "A scratchpad for writing induction proofs that checks your base cases and flags unjustified steps as you type.",
    tags: ["TypeScript", "Parser design"],
    repoHref: "https://github.com/your-username/proofpad", // TODO
  },
  {
    title: "Campus Courier",
    year: "2025",
    description:
      "Peer-to-peer package routing for a school campus. Matched 400+ deliveries with a greedy assignment algorithm and a lot of duct tape.",
    tags: ["Python", "Flask", "Maps API"],
  },
  {
    // This one is real — keep it if you like.
    title: "This website",
    year: "2026",
    description:
      "Designed and built from scratch — no templates, no UI kits. Hand-written CSS, typed content files, and a lot of small decisions.",
    tags: ["React", "TypeScript", "Vite"],
    repoHref: "https://github.com/your-username/portfolio-website", // TODO
  },
];
