import { formatEssayDate } from "../data/essays";
import type { Essay } from "../data/types";
import { Icon } from "./Icons";
import { Link } from "./Link";
import { renderMarkdown } from "./markdown";

/** The reading page: /essays/<slug>. */
export function EssayPage({ essay }: { essay: Essay }) {
  return (
    <article className="essay">
      <Link className="essay__back" to="/#essays">
        <Icon name="arrow-left" size={14} />
        Essays
      </Link>

      <header className="essay__head" data-reveal>
        <h1 className="essay__title">{essay.title}</h1>
        <p className="essay__meta">
          {essay.date && (
            <>
              <time dateTime={essay.date}>{formatEssayDate(essay.date)}</time>
              <span className="essay__meta-sep" aria-hidden="true">
                ·
              </span>
            </>
          )}
          {essay.readingTime} min read
        </p>
      </header>

      {/* No scroll-reveal on the body, deliberately: paragraphs fading in
          one by one while you're reading them would be maddening, and a
          single reveal on a block this tall never crosses the observer's
          threshold — the essay would stay invisible. */}
      <div className="prose">{renderMarkdown(essay.body)}</div>

      <footer className="essay__foot">
        <Link className="pill" to="/#essays">
          <Icon name="arrow-left" size={14} />
          All essays
        </Link>
      </footer>
    </article>
  );
}
