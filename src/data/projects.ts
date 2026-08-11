import type { Project } from "./types";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SAMPLE DATA — every entry below (except the last) is invented placeholder
 *  content so you can see how the layout handles real-looking text.
 *  Replace with your actual work before publishing.
 *
 *  Projects and ventures share this one list.
 *   · `href` — live site, demo, or source. If present, the whole row is
 *     clickable (↗ arrow). If absent, the row is plain text.
 *   · Order matters: put your strongest work first.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    title: "Ledgerline",
    year: "2026",
    description:
      "Lightweight bookkeeping for student-run businesses — double-entry accounting under the hood, plain English on top.",
    href: "https://example.com", // TODO
  },
  {
    title: "Proofpad",
    year: "2025",
    description:
      "A scratchpad for writing induction proofs that checks your base cases and flags unjustified steps as you type.",
    href: "https://github.com/your-username/proofpad", // TODO
  },
  {
    title: "Shorefront Detailing",
    year: "2023 — Present",
    description:
      "Mobile car-detailing service I founded in high school. Grew from a bucket and a hose into steady weekend bookings and repeat clients — and my first real lessons in pricing, scheduling, and customer service.",
  },
  {
    title: "Study Sprint",
    year: "2024 — 2025",
    description:
      "Small-group SAT tutoring I co-founded with two classmates. We ran cohorts of six students at a time; wound it down before college — but not before it paid for this laptop.",
  },
  {
    title: "Campus Courier",
    year: "2025",
    description:
      "Peer-to-peer package routing for a school campus. Matched 400+ deliveries with a greedy assignment algorithm and a lot of duct tape.",
  },
  {
    // This one is real — keep it if you like.
    title: "This website",
    year: "2026",
    description:
      "Designed and built from scratch — no templates, no UI kits. Hand-written CSS, typed content files, and a lot of small decisions.",
    href: "https://github.com/your-username/portfolio-website", // TODO
  },
];
