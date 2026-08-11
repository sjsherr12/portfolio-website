import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <p className="site-footer__copy">
          © {year} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
