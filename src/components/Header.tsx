import { NAV_IDS, NAV_SECTIONS } from "../data/nav";
import { profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import { useRoute } from "../hooks/useRoute";
import { useTheme } from "../hooks/useTheme";
import { Icon } from "./Icons";
import { Link } from "./Link";

export function Header() {
  const { theme, toggle } = useTheme();
  const route = useRoute();
  const onHome = route.name === "home";

  // On the home page the nav tracks scroll position; on an essay page there
  // are no sections to track, so "Essays" is simply the current one.
  const active = useActiveSection(NAV_IDS);
  const current = route.name === "essay" ? "essays" : active;

  // "#top" matches no element id on purpose — browsers then scroll to the
  // document top. Anchoring to the sticky header itself is a no-op when stuck.
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        {onHome ? (
          <a className="wordmark" href="#top" aria-label="Back to top">
            {profile.shortName}
            <span className="wordmark__dot" aria-hidden="true">
              .
            </span>
          </a>
        ) : (
          <Link className="wordmark" to="/" aria-label="Back home">
            {profile.shortName}
            <span className="wordmark__dot" aria-hidden="true">
              .
            </span>
          </Link>
        )}

        <nav className="site-nav" aria-label="Sections">
          {NAV_SECTIONS.map((s) =>
            // On home these stay plain anchors, so the browser handles the
            // smooth scroll and hash exactly as before. Elsewhere they route
            // home first, then scroll to the section.
            onHome ? (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={current === s.id ? "true" : undefined}
              >
                {s.label}
              </a>
            ) : (
              <Link
                key={s.id}
                to={`/#${s.id}`}
                aria-current={current === s.id ? "true" : undefined}
              >
                {s.label}
              </Link>
            ),
          )}
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={toggle}
          aria-label={
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
          }
        >
          <Icon name={theme === "dark" ? "sun" : "moon"} size={15} />
        </button>
      </div>
    </header>
  );
}
