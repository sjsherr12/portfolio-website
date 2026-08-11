import { useCallback, useState } from "react";

type Theme = "light" | "dark";

const THEME_COLORS: Record<Theme, string> = {
  light: "#FBFAF8",
  dark: "#141210",
};

/**
 * The initial theme is applied to <html data-theme> by an inline script in
 * index.html before first paint (no flash). This hook just reads it, exposes
 * a toggle, and persists the choice.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );

  const toggle = useCallback(() => {
    const next: Theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLORS[next]);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing / storage disabled — the choice just won't persist.
    }
    setTheme(next);
  }, []);

  return { theme, toggle };
}
