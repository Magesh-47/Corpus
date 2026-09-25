import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Wordmark } from "../ui/Wordmark";
import type { SiteDictionary } from "../../i18n/site";
import { localeHref } from "../../lib/routes";

/**
 * The split screen around every auth page. On wide screens the plate fills the
 * inline-start half (left in English, right in Arabic — grid areas follow the
 * writing direction) and the form column holds the wordmark, the page and a
 * one-line footer. On narrow screens everything stacks, the plate reduced to
 * a slim band under the wordmark so it never pushes the form out of reach.
 */
export function AuthShell({
  locale,
  site,
  plate,
  children,
}: {
  locale: string;
  site: SiteDictionary;
  plate: ReactNode;
  children: ReactNode;
}) {
  const { navigation, auth } = site;
  return (
    <div className="auth-frame">
      <header className="auth-header">
        <Link href={localeHref(locale, "home")} className="auth-brand" aria-label={navigation.homeLabel}>
          <Wordmark />
        </Link>
        <Link href={localeHref(locale, "home")} className="auth-back">
          <ArrowLeft className="auth-back__icon" size={16} strokeWidth={1.75} aria-hidden />
          {auth.shell.back}
        </Link>
      </header>

      <main id="main" className="auth-main" tabIndex={-1}>
        {children}
      </main>

      {plate}

      <footer className="auth-footer">
        <p className="auth-footer__disclaimer">{auth.shell.disclaimer}</p>
        <Link className="auth-link" href={localeHref(locale, "help")}>
          {auth.shell.helpLink}
        </Link>
      </footer>
    </div>
  );
}
