"use client";

import { ChevronDown, Globe } from "lucide-react";
import { locales, type LocaleConfig } from "../../i18n/config";
import { swapLocale } from "../../i18n/paths";
import type { UiDictionary } from "../../i18n/types";

/**
 * Switches language by swapping the leading path segment, so the current
 * document is preserved rather than bouncing through the root redirect.
 *
 * The native <select> is stretched transparently over the whole pill rather
 * than sitting inline. A <label> only *focuses* a select when clicked — it does
 * not open it — so anything outside the select's own box (the globe, the
 * chevron, the padding) would otherwise be a dead zone. Overlaying it means a
 * click anywhere on the control opens the picker, while the visible row
 * underneath stays fully styleable.
 */
export function LanguageSwitcher({ locale, t }: { locale: LocaleConfig; t: UiDictionary }) {
  return (
    <div className="language-switcher" title={t.language.label}>
      <Globe size={16} aria-hidden />
      <span className="language-current">{locale.nativeName}</span>
      <ChevronDown size={14} aria-hidden />
      <select
        aria-label={t.language.choose}
        value={locale.code}
        onChange={(event) => {
          const { pathname, search, hash } = window.location;
          window.location.assign(`${swapLocale(pathname, event.target.value)}${search}${hash}`);
        }}
      >
        {locales.map((entry) => (
          <option key={entry.code} value={entry.code} lang={entry.code}>
            {entry.nativeName}
          </option>
        ))}
      </select>
    </div>
  );
}
