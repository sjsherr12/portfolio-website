import type { Venture } from "./types";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SAMPLE DATA — invented placeholders. Replace with your real businesses.
 *  `status` renders as a small badge ("Active" gets a green dot); omit to hide.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const ventures: Venture[] = [
  {
    name: "Shorefront Detailing",
    role: "Founder",
    period: "2023 — Present",
    status: "Active",
    description:
      "Mobile car-detailing service I started in high school. Grew from a bucket and a hose into steady weekend bookings and repeat clients — and my first real lessons in pricing, scheduling, and customer service.",
  },
  {
    name: "Study Sprint",
    role: "Co-founder",
    period: "2024 — 2025",
    status: "Wound down",
    description:
      "Small-group SAT tutoring with two classmates. We ran cohorts of six students at a time; wound it down before college — but not before it paid for this laptop.",
  },
];
