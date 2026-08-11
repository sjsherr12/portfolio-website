/**
 * The page's sections, in order. Drives the header nav, the section numbering,
 * and scroll-position highlighting. If you ever add or remove a section,
 * update it here and in App.tsx.
 */
export const NAV_SECTIONS = [
  { id: "projects", label: "Projects" },
  { id: "ventures", label: "Ventures" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const NAV_IDS: readonly string[] = NAV_SECTIONS.map((s) => s.id);
