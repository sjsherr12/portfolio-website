import { essayYear, essays } from "../data/essays";
import { Icon } from "./Icons";
import { Link } from "./Link";
import { delay } from "./reveal";
import { Section } from "./Section";

export function Essays() {
  if (essays.length === 0) return null;

  return (
    <Section id="essays" title="Essays">
      <ul className="project-list">
        {essays.map((e, i) => (
          <li
            key={e.slug}
            className="project"
            data-reveal
            style={delay(Math.min(i, 4))}
          >
            <div className="project__body">
              <h3 className="project__title">
                {/* Same stretched-link treatment as a project row */}
                <Link className="project__link" to={`/essays/${e.slug}`}>
                  {e.title}
                  <Icon
                    name="arrow-right"
                    size={14}
                    className="project__arrow project__arrow--right"
                  />
                </Link>
              </h3>
              {e.blurb && <p className="project__desc">{e.blurb}</p>}
              <p className="project__tags">{e.readingTime} min read</p>
            </div>

            <span className="project__year">{essayYear(e.date)}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
