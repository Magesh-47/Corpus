import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import type { SiteDictionary } from "../../i18n/site";
import { localeHref } from "../../lib/routes";

/**
 * The frame around every auth page: a skip link, the wordmark, a quiet way
 * back to the site, and a one-line footer. Deliberately lighter than the
 * marketing header and footer, so the form is the only task on the page.
 */
export function AuthShell({ locale, site, children }: { locale: string; site: SiteDictionary; children: ReactNode }) {
  const { navigation, common, auth } = site;
  return (
    <div className="site auth">
      <a href="#main" className="ui-skip">
        {navigation.skipToContent}
      </a>
      <header className="auth-header">
        <div className="auth-header__inner">
          <Link href={localeHref(locale, "home")} className="site-brand" aria-label={navigation.homeLabel}>
            {common.brand.name}
            <sup aria-hidden>✦</sup>
          </Link>
          <Link href={localeHref(locale, "home")} className="auth-back">
            <ArrowLeft className="auth-back__icon" size={16} strokeWidth={1.75} aria-hidden />
            {auth.shell.back}
          </Link>
        </div>
      </header>
      <main id="main" className="auth-main" tabIndex={-1}>
        {children}
      </main>
      <footer className="auth-footer">
        <div className="auth-footer__inner">
          <p className="auth-footer__disclaimer">{navigation.footer.disclaimer}</p>
          <p className="auth-footer__help">
            {auth.shell.helpPrompt}{" "}
            <Link className="auth-link" href={localeHref(locale, "help")}>
              {auth.shell.helpLink}
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
