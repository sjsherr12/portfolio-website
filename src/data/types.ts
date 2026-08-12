/**
 * Shared content types for the site.
 *
 * All page content lives in the files in this folder — you should be able to
 * keep this site up to date for four years without ever touching a component.
 */

export type IconName =
  | "github"
  | "linkedin"
  | "mail"
  | "x"
  | "instagram"
  | "file"
  | "arrow-up-right"
  | "sun"
  | "moon";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

/** One entry in the combined Projects section — a project OR a venture. */
export interface Project {
  title: string;
  /** A year ("2026") or a range ("2023 — Present"). */
  year: string;
  /**
   * Supports inline links: "Partnered with [Name](https://…) to build…"
   * (as do experience descriptions, education notes, and the hero bio).
   */
  description: string;
  /**
   * Live site, demo, or source — whatever best represents it. When present,
   * the entire row becomes clickable; when absent, the row is plain text.
   */
  href?: string;
  /**
   * Technologies used — rendered as a small "SwiftUI · Firebase" line under
   * the description. Omit for entries where it doesn't apply.
   */
  tags?: string[];
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  description: string;
  href?: string;
}

export interface EducationItem {
  school: string;
  credential: string;
  period: string;
  /** Extra lines under the credential (honors, activities, awards…). */
  notes?: string[];
  /** Optional mono line, e.g. relevant coursework. */
  coursework?: string[];
}
