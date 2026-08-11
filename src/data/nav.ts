/**
 * The page's sections, in order. Drives the header nav, the section order
 * highlighting, and scroll-position tracking. If you ever add or remove a
 * section, update it here and in App.tsx.
 */
export const NAV_SECTIONS = [
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const NAV_IDS: readonly string[] = NAV_SECTIONS.map((s) => s.id);
