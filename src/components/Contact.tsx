import { profile } from "../data/profile";
import { Icon } from "./Icons";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact" data-reveal>
        <p className="contact__lede">
          My inbox is always open — whether it&rsquo;s about an internship, a
          project, a half-formed startup idea, or just to say hello.
        </p>
        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact__socials">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              className="icon-button"
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
            >
              <Icon name={s.icon} size={16} />
            </a>
          ))}
          <a
            className="icon-button"
            href={`mailto:${profile.email}`}
            aria-label="Email"
          >
            <Icon name="mail" size={16} />
          </a>
        </div>
      </div>
    </Section>
  );
}
