import { useEffect } from "react";

/**
 * Fades elements marked [data-reveal] in as they enter the viewport.
 * Runs from App, re-running whenever `key` changes (i.e. on navigation, when
 * a different set of elements is on the page). Respects
 * prefers-reduced-motion (elements are simply shown; the CSS also guards
 * this). Elements can stagger themselves with a --reveal-delay custom
 * property.
 */
export function useReveal(key?: unknown) {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const showAll = () => els.forEach((el) => el.classList.add("revealed"));

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      showAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          // Reveal this element AND anything before it in document order —
          // a fast scroll (End key, scrollbar drag) can jump past elements
          // between observer ticks, and they'd otherwise stay hidden forever.
          const idx = els.indexOf(entry.target as HTMLElement);
          for (let i = 0; i <= idx; i++) {
            if (!els[i].classList.contains("revealed")) {
              els[i].classList.add("revealed");
              io.unobserve(els[i]);
            }
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [key]);
}
