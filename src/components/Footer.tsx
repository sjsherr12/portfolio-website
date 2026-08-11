import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <p className="site-footer__copy">
          © {year} {profile.name} · {profile.location}
        </p>
        <p className="site-footer__stack">
          Designed &amp; built from scratch — React, TypeScript, hand-written
          CSS
        </p>
        <a className="site-footer__top" href="#top">
          Top ↑
        </a>
      </div>
    </footer>
  );
}
