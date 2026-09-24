import Link from "next/link";
import type { SiteDictionary } from "../../i18n/site";
import { localeHref } from "../../lib/routes";
import { Wordmark } from "../ui/Wordmark";
import { LanguageLinks } from "./LanguageLinks";

const SITE = ["explore", "howItWorks", "about", "pricing", "help"] as const;

/**
 * Legal pages (privacy, terms) are left out until they exist — the footer only
 * links to real destinations.
 */
export function SiteFooter({ locale, site }: { locale: string; site: Pick<SiteDictionary, "navigation" | "common"> }) {
  const { navigation: nav, common } = site;
  return (
    <footer className="site-footer">
      <div className="ui-container site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__wordmark">
            <Wordmark size="lg" />
            <span className="ui-sr">
              {common.brand.name} — {common.brand.descriptor}
            </span>
          </p>
          <p className="site-footer__tagline">{common.brand.tagline}</p>
        </div>

        <nav className="site-footer__nav" aria-label={nav.footer.siteLabel}>
          <ul>
            {SITE.map((route) => (
              <li key={route}>
                <Link href={localeHref(locale, route)}>{nav.links[route]}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="site-footer__heading">{nav.footer.accountHeading}</h2>
          <ul>
            <li>
              <Link href={localeHref(locale, "signIn")}>{nav.account.signIn}</Link>
            </li>
            <li>
              <Link href={localeHref(locale, "signUp")}>{nav.account.getStarted}</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">{nav.footer.languagesHeading}</h2>
          <LanguageLinks current={locale} className="site-footer__languages" />
        </div>
      </div>

      <div className="ui-container">
        <div className="site-footer__base">
          <p>{nav.footer.disclaimer}</p>
          <p>
            <bdi>© {new Date().getFullYear()} Corpus</bdi>
          </p>
        </div>
      </div>
    </footer>
  );
}
