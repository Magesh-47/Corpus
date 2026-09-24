"use client";

import { usePathname } from "next/navigation";
import { locales } from "../../i18n/config";
import { swapLocale } from "../../i18n/paths";

/**
 * Every language, linking to this same page in that language. Plain anchors,
 * not client navigation: a new language swaps the root layout's lang, dir and
 * font faces, which should be a real document load.
 */
export function LanguageLinks({ current, className }: { current: string; className?: string }) {
  const pathname = usePathname();
  return (
    <ul className={className}>
      {locales.map((entry) => (
        <li key={entry.code}>
          <a
            href={swapLocale(pathname, entry.code)}
            lang={entry.code}
            hrefLang={entry.code}
            dir={entry.dir}
            aria-current={entry.code === current ? "true" : undefined}
          >
            {entry.nativeName}
          </a>
        </li>
      ))}
    </ul>
  );
}
