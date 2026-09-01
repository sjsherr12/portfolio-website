import { useLayoutEffect, useSyncExternalStore } from "react";

/**
 * The whole router. Two routes, real URLs (not hashes) so essays are
 * shareable and crawlable — Firebase already rewrites every path to
 * index.html, and Vite's dev server does the same.
 */
export type Route =
  | { name: "home" }
  | { name: "essay"; slug: string }
  | { name: "not-found" };

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("popstate", onChange);
  };
}

function getSnapshot() {
  return window.location.pathname;
}

export function parseRoute(pathname: string): Route {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return { name: "home" };

  const essay = /^\/essays\/([^/]+)$/.exec(path);
  if (essay) return { name: "essay", slug: decodeURIComponent(essay[1]) };

  return { name: "not-found" };
}

export function useRoute(): Route {
  return parseRoute(useSyncExternalStore(subscribe, getSnapshot));
}

/**
 * A scroll queued by `navigate`, applied by `useScrollAfterNavigation` once
 * React has committed the new page. Kept out of `navigate` itself because the
 * new page's DOM doesn't exist yet at that point.
 */
let pendingScroll: { hash: string; behavior: ScrollBehavior } | null = null;

/** Client-side navigation. */
export function navigate(to: string) {
  const url = new URL(to, window.location.href);
  const samePage = url.pathname === window.location.pathname;

  pendingScroll = {
    hash: url.hash,
    // Smooth within a page; instant when we've just swapped pages, so a
    // cross-page jump doesn't animate the whole document height. "instant"
    // rather than "auto" — "auto" defers to `html { scroll-behavior: smooth }`
    // and would animate anyway.
    behavior: samePage ? "smooth" : "instant",
  };

  window.history.pushState(null, "", url);
  listeners.forEach((notify) => notify());
}

/**
 * Applies the scroll queued by the last `navigate` — to the hash target if
 * there is one, otherwise to the top of the new page. Called from App as a
 * layout effect, which runs after the new page is in the DOM but before the
 * browser paints.
 */
export function useScrollAfterNavigation() {
  useLayoutEffect(() => {
    const scroll = pendingScroll;
    pendingScroll = null;
    if (!scroll) return;

    if (scroll.hash) {
      const target = document.getElementById(scroll.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: scroll.behavior });
        return;
      }
    }
    window.scrollTo(0, 0);
  });
}
