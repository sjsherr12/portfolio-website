import type { EducationItem } from "./types";

// Education, newest first.
export const education: EducationItem[] = [
  {
    school: "Princeton University",
    credential: "B.S.E., Computer Science",
    period: "2026 — 2029",
    notes: ["Coursework: COS 226, COS 217, COS 445, MAT 215, MAT 217"],
  },
  {
    school: "Lawrence Technological University",
    credential: "Dual Enrollment",
    period: "2024 — 2026",
    notes: ["Took a bunch of college courses while in high school, like calc 3, diff eq, discrete math, comp arch, linear alg, and operating systems."],
  },
  {
    school: "Seaholm High School",
    credential: "High School Diploma",
    period: "2022 — 2026",
    notes: [
      "Took a combined 22 AP + dual enrollment courses, 4.81 GPA (no A-), National Merit Scholar, DECA ICDC",
    ],
  },
];
