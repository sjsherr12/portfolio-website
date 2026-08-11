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
    credential: "Computer Science major · Mathematics minor",
    period: "2026 — 2030",
    notes: ["Class of 2030."],
    // Once you've picked courses, list the interesting ones:
    // coursework: ["COS 126", "MAT 215", "COS 217"],
  },
  {
    school: "Your High School", // TODO
    credential: "High School Diploma",
    period: "2022 — 2026",
    notes: [
      "Add honors, awards, or activities here — or delete this entry entirely.",
    ],
  },
];
