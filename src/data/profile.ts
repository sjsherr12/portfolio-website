import type { SocialLink } from "./types";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  YOUR PROFILE — the hero section, header, and contact section read from here.
 *  Everything marked TODO is placeholder: swap in your real links and copy.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const profile = {
  name: "Spencer Sherr",
  /** Used in the header wordmark and page footer. */
  shortName: "Spencer Sherr",

  /** The two fields of study woven into the hero line. */
  focusA: "computer science",
  focusB: "mathematics",
  institution: "Princeton University",
  classYear: "2030", // TODO: confirm your class year

  location: "Princeton, NJ",

  /**
   * One short paragraph. Aim for plain, confident, specific — this is the
   * first (often only) thing people read.
   * TODO: replace with your own words.
   */
  bio: "I like building things end to end — sketching an idea, shipping the first version, and sticking around long enough to make it good. Before Princeton, that meant a mix of software projects and small businesses I started and ran myself. This site is a running record of that work.",

  email: "sjsherr12@gmail.com",

  /**
   * Portrait shown in the hero. Drop your photo into /public (a square crop,
   * ~640×640 or larger, works best) and change this to e.g. "/portrait.jpg".
   */
  portrait: "/portrait-placeholder.svg", // TODO: replace with your photo
  portraitAlt: "Portrait of Spencer Sherr",

  /**
   * Set to "/resume.pdf" once you add your resume to /public.
   * While null, the resume button simply doesn't render.
   */
  resumeUrl: null as string | null,

  /** Icon links. Remove or add entries freely — supported icons: see types.ts */
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/your-username", // TODO
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-handle", // TODO
      icon: "linkedin",
    },
    {
      label: "X",
      href: "https://x.com/your-handle", // TODO
      icon: "x",
    },
  ] satisfies SocialLink[],
};
