"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveals `[data-reveal]` elements as they scroll into view. Mounted once per
 * layout and re-run on navigation. Elements already on screen are marked
 * revealed before hiding is switched on, so nothing visible ever flashes out;
 * without JavaScript, or with reduced motion, everything simply stays visible.
 */
export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      delete root.dataset.motion;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const element of document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)")) {
      if (element.getBoundingClientRect().top < window.innerHeight) element.classList.add("is-revealed");
      else observer.observe(element);
    }
    root.dataset.motion = "ready";

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
