import { education } from "../data/education";
import { delay } from "./reveal";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" index="04" title="Education">
      <ul className="entry-list">
        {education.map((ed, i) => (
          <li
            key={ed.school}
            className="entry"
            data-reveal
            style={delay(Math.min(i, 4))}
          >
            <span className="entry__period">{ed.period}</span>
            <div className="entry__body">
              <h3 className="entry__title">{ed.school}</h3>
              <p className="entry__desc entry__desc--credential">
                {ed.credential}
              </p>
              {ed.notes?.map((note) => (
                <p key={note} className="entry__desc">
                  {note}
                </p>
              ))}
              {ed.coursework && ed.coursework.length > 0 && (
                <p className="entry__coursework">
                  {ed.coursework.join(" · ")}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
