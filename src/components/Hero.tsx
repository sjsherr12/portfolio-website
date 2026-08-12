import { profile } from "../data/profile";
import { Icon } from "./Icons";
import { renderInline } from "./inline";
import { delay } from "./reveal";

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__text">
        <h1 className="hero__name" data-reveal>
          {profile.name}
          <span className="hero__dot" aria-hidden="true">
            .
          </span>
        </h1>

        <p className="hero__role" data-reveal style={delay(1)}>
          Studying <strong>{profile.focusA}</strong> &{" "}
          <strong>{profile.focusB}</strong> at {profile.institution}, Class of{" "}
          {profile.classYear}.
        </p>

        <p className="hero__bio" data-reveal style={delay(2)}>
          {renderInline(profile.bio)}
        </p>

        <div className="hero__actions" data-reveal style={delay(3)}>
          {profile.resumeUrl && (
            <a
              className="pill pill--primary"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="file" size={14} />
              Resume
            </a>
          )}
          {profile.socials.map((s) => (
            <a
              key={s.label}
              className="pill"
              href={s.href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name={s.icon} size={14} />
              {s.label}
            </a>
          ))}
          <a className="pill" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={14} />
            Email
          </a>
        </div>
      </div>

      <figure className="hero__portrait" data-reveal style={delay(2)}>
        <img
          src={profile.portrait}
          alt={profile.portraitAlt}
          width={640}
          height={640}
          fetchPriority="high"
        />
      </figure>
    </section>
  );
}
