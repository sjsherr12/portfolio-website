import type { CSSProperties } from "react";

/** Stagger helper for [data-reveal] elements: delay(2) → 140ms. */
export function delay(step: number): CSSProperties {
  return { "--reveal-delay": `${step * 70}ms` } as CSSProperties;
}
