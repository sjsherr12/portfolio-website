import type { SocialLink } from "./types";

// Profile content — the hero, header, and contact sections read from here.
export const profile = {
  name: "Spencer Sherr",
  shortName: "Spencer Sherr",

  focusA: "computer science",
  focusB: "mathematics",
  institution: "Princeton University",
  classYear: "2030",

  location: "Princeton, NJ",

  bio: "Hi, I'm Spencer! I'm an engineer and avid entrepreneur broadly interested in machine learning and applied math & statistics. In my free time I love to play basketball, go to the gym, and play poker with friends.",

  email: "sjsherr12@gmail.com",

  portrait: "/portrait.jpeg",
  portraitAlt: "Portrait of Spencer Sherr",

  /** When set (e.g. "/resume.pdf"), a Resume button renders in the hero. */
  resumeUrl: null as string | null,

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/sjsherr12",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/spencersherr",
      icon: "linkedin",
    },
    {
      label: "X",
      href: "https://x.com/pixelpilot10",
      icon: "x",
    },
  ] satisfies SocialLink[],
};
