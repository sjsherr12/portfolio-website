import type { EducationItem } from "./types";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  Education. The Princeton entry is real (verify the details); the high
 *  school entry is a placeholder — fill it in or delete it.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const education: EducationItem[] = [
  {
    school: "Princeton University",
    credential: "B.S.E., Computer Science",
    period: "2026 — 2030",
    notes: ["Coursework: COS 226, COS 240, COS 217, MAT 215, MAT 217"],
  },
  {
    school: "Lawrence Technological University",
    credential: "Dual Enrollment",
    period: "2024 — 2026",
    notes: ["Took a bunch of college courses while in hs like calc 3, diff eq, discrete math, comp arch, linear alg, operating systems, etc."],
  },
  {
    school: "Seaholm High School",
    credential: "High School Diploma",
    period: "2022 — 2026",
    notes: [
      "Took combined 22 AP + dual enrollment courses, 4.81 GPA (no A-), National Merit Scholar, DECA ICDC",
    ],
  },
];
