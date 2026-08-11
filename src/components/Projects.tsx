import { projects } from "../data/projects";
import { Icon } from "./Icons";
import { delay } from "./reveal";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="project-list">
        {projects.map((p, i) => (
          <li
            key={p.title}
            className="project"
            data-reveal
            style={delay(Math.min(i, 4))}
          >
            <div className="project__body">
              <h3 className="project__title">
                {p.href ? (
                  // The link's ::after stretches over the whole row, so
                  // clicking anywhere on the box opens it.
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
            </div>

            <span className="project__year">{p.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
