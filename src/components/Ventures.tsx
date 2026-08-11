import { ventures } from "../data/ventures";
import { Icon } from "./Icons";
import { delay } from "./reveal";
import { Section } from "./Section";

export function Ventures() {
  return (
    <Section id="ventures" index="02" title="Ventures">
      <ul className="entry-list">
        {ventures.map((v, i) => (
          <li
            key={v.name}
            className="entry"
            data-reveal
            style={delay(Math.min(i, 4))}
          >
            <span className="entry__period">{v.period}</span>
            <div className="entry__body">
              <h3 className="entry__title">
                {v.role}
                <span className="entry__sep" aria-hidden="true">
                  ·
                </span>
                {v.href ? (
                  <a
                    className="entry__org-link"
                    href={v.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {v.name}
                    <Icon name="arrow-up-right" size={12} />
                  </a>
                ) : (
                  <span className="entry__org">{v.name}</span>
                )}
                {v.status && (
                  <span
                    className={`badge${v.status === "Active" ? " badge--active" : ""}`}
                  >
                    {v.status}
                  </span>
                )}
              </h3>
              <p className="entry__desc">{v.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
