import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

/** Numbered section with a serif title and a hairline rule — "01 — Projects". */
export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <header className="section__head" data-reveal>
        <span className="section__index" aria-hidden="true">
          {index}
        </span>
        <h2 className="section__title">{title}</h2>
        <span className="section__rule" aria-hidden="true" />
      </header>
      {children}
    </section>
  );
}
