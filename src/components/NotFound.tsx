import { Icon } from "./Icons";
import { Link } from "./Link";

export function NotFound() {
  return (
    <section className="notfound" data-reveal>
      <p className="notfound__code">404</p>
      <h1 className="notfound__title">This page doesn't exist.</h1>
      <p className="notfound__lede">
        The link may be out of date, or the page may have moved.
      </p>
      <Link className="pill pill--primary notfound__action" to="/">
        <Icon name="arrow-left" size={14} />
        Back home
      </Link>
    </section>
  );
}
