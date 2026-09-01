import type { ReactNode } from "react";

/**
 * A tiny Markdown renderer for essay bodies — deliberately not a library.
 * It covers the subset essays actually use:
 *
 *   ## Heading          h2 (### → h3)
 *   blank-line-separated paragraphs, soft-wrapped lines joined
 *   > Blockquote        pull quote
 *   - Item              bullet list
 *   ---                 section divider
 *   **bold**  *italic*  `code`  [label](https://url)
 *
 * Anything it doesn't recognize falls through as plain text, so an essay can
 * never fail to render — it just renders less prettily.
 */

const BULLET = /^[-*+]\s+/;
const HEADING = /^(#{1,3})\s+(.*)$/;
const RULE = /^(-{3,}|\*{3,}|_{3,})$/;
const QUOTE = /^>\s?/;

/** Inline spans: links, bold, italic, code. */
function renderInlineMarkdown(text: string, keyPrefix: string): ReactNode {
  const pattern =
    /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const key = `${keyPrefix}-${match.index}`;

    if (match[1] !== undefined) {
      parts.push(
        <a
          key={key}
          className="inline-link"
          href={match[2]}
          target="_blank"
          rel="noreferrer"
        >
          {match[1]}
        </a>,
      );
    } else if (match[3] !== undefined) {
      parts.push(<strong key={key}>{match[3]}</strong>);
    } else if (match[4] !== undefined) {
      parts.push(<em key={key}>{match[4]}</em>);
    } else {
      parts.push(<code key={key}>{match[5]}</code>);
    }

    lastIndex = match.index + match[0].length;
  }

  if (parts.length === 0) return text;
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

/** True for any line that opens a block other than a paragraph. */
function startsBlock(line: string): boolean {
  return (
    line.trim() === "" ||
    HEADING.test(line) ||
    RULE.test(line.trim()) ||
    QUOTE.test(line) ||
    BULLET.test(line)
  );
}

export function renderMarkdown(source: string): ReactNode[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    const heading = HEADING.exec(line);
    if (heading) {
      const level = heading[1].length;
      const Tag = (level === 1 ? "h2" : level === 2 ? "h2" : "h3") as
        | "h2"
        | "h3";
      blocks.push(
        <Tag key={i} className="prose__heading">
          {renderInlineMarkdown(heading[2], `h${i}`)}
        </Tag>,
      );
      i++;
      continue;
    }

    if (RULE.test(line.trim())) {
      blocks.push(<hr key={i} className="prose__rule" />);
      i++;
      continue;
    }

    if (QUOTE.test(line)) {
      const start = i;
      const quoted: string[] = [];
      while (i < lines.length && QUOTE.test(lines[i])) {
        quoted.push(lines[i].replace(QUOTE, ""));
        i++;
      }
      blocks.push(
        <blockquote key={start} className="prose__quote">
          <p>{renderInlineMarkdown(quoted.join(" "), `q${start}`)}</p>
        </blockquote>,
      );
      continue;
    }

    if (BULLET.test(line)) {
      const start = i;
      const items: string[] = [];
      while (i < lines.length && BULLET.test(lines[i])) {
        items.push(lines[i].replace(BULLET, ""));
        i++;
      }
      blocks.push(
        <ul key={start} className="prose__list">
          {items.map((item, n) => (
            <li key={n}>{renderInlineMarkdown(item, `l${start}-${n}`)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    // Paragraph: soft-wrapped lines belong to the same paragraph.
    const start = i;
    const paragraph: string[] = [line];
    i++;
    while (i < lines.length && !startsBlock(lines[i])) {
      paragraph.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={start}>
        {renderInlineMarkdown(paragraph.join(" ").trim(), `p${start}`)}
      </p>,
    );
  }

  return blocks;
}
