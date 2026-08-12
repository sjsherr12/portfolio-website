import type { Project } from "./types";

// Projects & ventures, strongest first. `href` makes the whole row a link;
// `tags` renders as a small line under the description.
export const projects: Project[] = [
  {
    title: "GetPaid",
    year: "2026 — Present",
    description:
      "Partnered with [Sam Jarman](https://www.instagram.com/realsamjarman/) and [Addison Jarman](https://www.instagram.com/addison.jarman/) (combined 10M+ followers) to launch a mobile app allowing users to find and save money.",
    href: "https://trygetpaid.app/",
    tags: ["React Native", "Firebase", "Appsflyer", "RevenueCat"],
  },
  {
    title: "Derm AI",
    year: "2025 — Present",
    description:
      "Struggled with acne in high school, so built a mobile app to deliver personalized skin analysis and commercially available treatment recommendations. Developed a proprietary skincare database and scoring algorithm. Later partnered with [Dr. Dustin Portela](https://www.instagram.com/drdustinportela/).",
    href: "https://apps.apple.com/us/app/derm-ai-skin-analysis/id6748288286",
    tags: ["React Native", "Firebase", "OpenAI API"],
  },
  {
    title: "SpareLot",
    year: "2024 — 2026",
    description:
      "Partnered with a classmate from AP CSA to build a peer-to-peer marketplace, connecting people searching for storage/parking to those with unused space. First real experience with production development of any kind.",
    href: "https://sparelot.com/",
    tags: ["React", "HTML", "CSS", "Node.js"],
  },
  {
    title: "Sneaker Reselling",
    year: "2018 — 2020",
    description:
      "Automated system to buy sneakers at retail prices. Shoutout Sneakercon Toronto 2019 and Michigan Sneaker XChange. I'll know I've made it if I ever get to go on Sneaker Shopping with Complex.",
    tags: ["Hustle", "Heart"],
  },
  {
    title: "Slime Business",
    year: "2017",
    description:
      "Made and sold slime to classmates in 4th grade. My most successful venture to date, as my parents financed the COGS in exchange for 0% equity or repayment.",
    tags: ["Glue", "Borax", "Sometimes dad's shaving cream"],
  },
];
