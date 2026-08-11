import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

/** Page section with a bold title and a hairline rule. */
export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <header className="section__head" data-reveal>
        <h2 className="section__title">{title}</h2>
        <span className="section__rule" aria-hidden="true" />
      </header>
      {children}
    </section>
  );
}
