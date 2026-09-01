import type { Essay } from "./types";

/**
 * Essays are Markdown files in `src/content/essays/`. Vite inlines them at
 * build time, so publishing a new one means dropping a `.md` file in that
 * folder — nothing here or in the components changes.
 *
 * Each file starts with a small frontmatter block:
 *
 *   ---
 *   title: Practical thoughts on building a successful business and life
 *   date: 2026-09-01
 *   blurb: One line, shown under the title in the essay list.
 *   ---
 *
 * The filename (minus `.md`) becomes the URL: /essays/<filename>.
 */
const files = import.meta.glob("../content/essays/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const WORDS_PER_MINUTE = 225;

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** Splits a `---` frontmatter block off the front of a file. */
function parseFrontmatter(raw: string): {
  meta: Record<string, string>;
  body: string;
} {
  const source = raw.replace(/^﻿/, "").trimStart();
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source);
  if (!match) return { meta: {}, body: source };

  const meta: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line
      .slice(colon + 1)
      .trim()
      .replace(/^["'](.*)["']$/, "$1");
    if (key) meta[key] = value;
  }

  return { meta, body: source.slice(match[0].length).trim() };
}

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

export const essays: Essay[] = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parseFrontmatter(raw);
    const slug = slugFromPath(path);
    const words = body.split(/\s+/).filter(Boolean).length;

    return {
      slug,
      title: meta.title || slug,
      date: meta.date || "",
      blurb: meta.blurb || "",
      body,
      readingTime: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    };
  })
  // Newest first. Dates are ISO, so a string compare is a date compare.
  .sort((a, b) => b.date.localeCompare(a.date));

export function essayBySlug(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}

/** "2026-09-01" → "September 2026". Parsed by hand to dodge UTC drift. */
export function formatEssayDate(iso: string): string {
  const [year, month] = iso.split("-");
  const name = MONTHS[Number(month) - 1];
  return name ? `${name} ${year}` : iso;
}

/** "2026-09-01" → "2026", for the mono column in the essay list. */
export function essayYear(iso: string): string {
  return iso.slice(0, 4) || "—";
}
