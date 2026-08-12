// Content types for the data files in this folder.

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

/** One entry in the Projects / Ventures section. */
export interface Project {
  title: string;
  /** A year ("2026") or a range ("2023 — Present"). */
  year: string;
  /** Supports inline links: "[label](https://url)". */
  description: string;
  /** When present, the entire row becomes clickable. */
  href?: string;
  /** Rendered as a small "React · Firebase" line under the description. */
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
