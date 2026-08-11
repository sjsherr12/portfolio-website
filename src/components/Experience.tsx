import { experience } from "../data/experience";
import { Icon } from "./Icons";
import { delay } from "./reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ul className="entry-list">
        {experience.map((e, i) => (
          <li
            key={`${e.role}-${e.org}`}
            className="entry"
            data-reveal
            style={delay(Math.min(i, 4))}
          >
            <span className="entry__period">{e.period}</span>
            <div className="entry__body">
              <h3 className="entry__title">
                {e.role}
                <span className="entry__sep" aria-hidden="true">
                  ·
                </span>
                {e.href ? (
                  <a
                    className="entry__org-link"
                    href={e.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {e.org}
                    <Icon name="arrow-up-right" size={12} />
                  </a>
                ) : (
                  <span className="entry__org">{e.org}</span>
                )}
              </h3>
              <p className="entry__desc">{e.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
