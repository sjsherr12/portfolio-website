import type { Project } from "./types";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  Projects and ventures share this one list.
 *   · `href` — live site, demo, or source. If present, the whole row is
 *     clickable (↗ arrow). If absent, the row is plain text.
 *   · `tags` — technologies used, shown as a small line under the
 *     description. Omit for entries where it doesn't apply.
 *   · Order matters: put your strongest work first.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    title: "GetPaid",
    year: "2026 — Present",
    description:
      "Partnered with [Sam Jarman](https://www.instagram.com/realsamjarman/) and [Addison Jarman](https://www.instagram.com/addison.jarman/) (combined 10M+ followers) to launch mobile app allowing users to find and save money.",
    href: "https://trygetpaid.app/",
    tags: ["React Native", "Firebase", "Appsflyer", "RevenueCat"], // TODO: confirm — my best guess at your stack
  },
  {
    title: "Derm AI",
    year: "2025 — Present",
    description:
      "Struggled with acne in high school, so built mobile app to deliver personalized skin analysis and commercially-available treatment recommendations. Developed a proprietary skincare database and scoring algorithm. Later partnered with [Dr. Dustin Portela](https://www.instagram.com/drdustinportela/).",
    href: "https://apps.apple.com/us/app/derm-ai-skin-analysis/id6748288286",
    tags: ["React Native", "Firebase", "OpenAI API"], // TODO: confirm — my best guess at your stack
  },
  {
    title: "SpareLot",
    year: "2024 — 2026",
    description:
      "Partnered with classmate from AP CSA to build peer-to-peer marketplace, connecting people searching for storage/parking to those with unused space. First real experience with production development of any kind.",
    href: "https://sparelot.com/",
    tags: ["React", "HTML", "CSS", "Node.js"], // TODO: confirm — my best guess at your stack
  },
  {
    title: "Sneaker Reselling",
    year: "2018 — 2020",
    description:
      "Automated system to buy sneakers for retail prices. Shoutout Sneakercon Toronto 2019 and Michigan Sneaker XChange. I know I've made it if I ever get to go on sneaker shopping with Complex.",
    tags: ["Hustle", "Heart"], // TODO: confirm — my best guess at your stack
  },
  {
    title: "Slime Business",
    year: "2017",
    description:
      "Made and sold slime to classmates in 4th grade. My most successful venture to date, as parents financed the costs in exchange for 0% equity or repayment.",
    tags: ["Glue", "Borax", "Sometimes dad's shaving cream"],
  },
];
