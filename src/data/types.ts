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

export interface Project {
  title: string;
  year: string;
  description: string;
  /** Rendered as a mono "TypeScript · React · …" line. */
  tags: string[];
  /** Primary link (live site / demo). Makes the whole row clickable. */
  href?: string;
  /** Secondary link to the source code. */
  repoHref?: string;
}

export interface Venture {
  name: string;
  role: string;
  period: string;
  description: string;
  /** e.g. "Active", "Acquired", "Wound down" — omit to hide the badge. */
  status?: string;
  href?: string;
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
