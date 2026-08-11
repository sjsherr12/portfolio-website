import { NAV_IDS, NAV_SECTIONS } from "../data/nav";
import { profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";
import { Icon } from "./Icons";

export function Header() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection(NAV_IDS);

  // The wordmark's href="#top" matches no id on purpose: the HTML spec then
  // falls back to "scroll to top of the document". (An id="top" on this
  // sticky header would break it — anchoring to a stuck element is a no-op.)
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a className="wordmark" href="#top" aria-label="Back to top">
          {profile.shortName}
          <span className="wordmark__dot" aria-hidden="true">
            .
          </span>
        </a>

        <nav className="site-nav" aria-label="Sections">
          {NAV_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
            >
              {s.label}
            </a>
          ))}
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
