import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

import { navigate } from "../hooks/useRoute";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** In-app path, e.g. "/essays/some-slug" or "/#essays". */
  to: string;
  children: ReactNode;
}

/**
 * An ordinary <a> that routes in-app on a plain left click. Modified clicks
 * (⌘, ctrl, shift, middle) fall through to the browser, so "open in new tab"
 * keeps working — the href is a real URL either way.
 */
export function Link({ to, children, onClick, ...rest }: LinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    navigate(to);
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
