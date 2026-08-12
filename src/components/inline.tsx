import type { ReactNode } from "react";

/**
 * Renders a content string that may contain markdown-style inline links:
 *
 *   "Partnered with [Sam Jarman](https://www.tiktok.com/@sam_jarman) to…"
 *
 * Links open in a new tab and are styled via `.inline-link` — highlighted and
 * underlined, and kept clickable even inside a project row whose whole box is
 * a link. Plain strings pass through untouched.
 */
export function renderInline(text: string): ReactNode {
  const linkPattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        className="inline-link"
        href={match[2]}
        target="_blank"
        rel="noreferrer"
      >
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (parts.length === 0) return text;
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}
