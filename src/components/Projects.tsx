import { projects } from "../data/projects";
import { Icon } from "./Icons";
import { delay } from "./reveal";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" index="01" title="Projects">
      <ul className="project-list">
        {projects.map((p, i) => (
          <li
            key={p.title}
            className="project"
            data-reveal
            style={delay(Math.min(i, 4))}
          >
            <span className="project__index" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="project__body">
              <h3 className="project__title">
                {p.href ? (
                  <a
                    className="project__link"
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.title}
                    <Icon
                      name="arrow-up-right"
                      size={14}
                      className="project__arrow"
                    />
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <p className="project__desc">{p.description}</p>
              <p className="project__meta">
                <span className="project__tags">{p.tags.join(" · ")}</span>
                {p.repoHref && (
                  <a
                    className="project__repo"
                    href={p.repoHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source
                    <Icon name="arrow-up-right" size={11} />
                  </a>
                )}
              </p>
            </div>

            <span className="project__year">{p.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
