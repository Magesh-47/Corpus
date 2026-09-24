"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Menu, X } from "lucide-react";
import type { SiteDictionary } from "../../i18n/site";
import { localeHref } from "../../lib/routes";
import { Wordmark } from "../ui/Wordmark";
import { LanguageLinks } from "./LanguageLinks";

const PRIMARY = ["explore", "howItWorks", "about", "pricing"] as const;

/**
 * The public navigation. Desktop shows the links inline; below 900px they move
 * into a native modal dialog, which supplies focus containment, Escape to
 * close and an inert page behind it. The bar is quiet over the top of a page
 * and gains its hairline and ground once the reader scrolls.
 */
export function SiteHeader({
  locale,
  nav,
}: {
  locale: string;
  nav: SiteDictionary["navigation"];
}) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Following a link inside the menu changes the route; the menu should not
  // still be covering the new page.
  useEffect(() => {
    menuRef.current?.close();
  }, [pathname]);

  const current = (route: (typeof PRIMARY)[number]) => {
    const target = localeHref(locale, route);
    return pathname === target || pathname.startsWith(`${target}/`) ? "page" : undefined;
  };
  const close = () => menuRef.current?.close();

  const brandMark = (
    <Link href={localeHref(locale, "home")} className="site-brand" aria-label={nav.homeLabel}>
      <Wordmark />
    </Link>
  );

  return (
    <header className="site-header" data-scrolled={scrolled ? "" : undefined}>
      <div className="ui-container site-header__inner">
        {brandMark}

        <nav className="site-nav" aria-label={nav.primaryLabel}>
          <ul>
            {PRIMARY.map((route) => (
              <li key={route}>
                <Link href={localeHref(locale, route)} aria-current={current(route)}>
                  {nav.links[route]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-actions">
          <Link href={localeHref(locale, "signIn")} className="site-actions__link">
            {nav.account.signIn}
          </Link>
          <Link href={localeHref(locale, "signUp")} className="ui-button ui-button--primary ui-button--sm">
            {nav.account.getStarted}
          </Link>
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="site-menu-button"
          aria-haspopup="dialog"
          onClick={() => menuRef.current?.showModal()}
        >
          <Menu size={18} strokeWidth={1.75} aria-hidden />
          {nav.menu.open}
        </button>
      </div>

      <dialog
        ref={menuRef}
        className="site-menu"
        aria-label={nav.menu.label}
        onClose={() => triggerRef.current?.focus()}
      >
        <div className="site-menu__inner">
          <div className="site-menu__top">
            {brandMark}
            <button type="button" className="site-menu-close" onClick={close}>
              <X size={18} strokeWidth={1.75} aria-hidden />
              {nav.menu.close}
            </button>
          </div>
          <nav aria-label={nav.primaryLabel}>
            <ul className="site-menu__links">
              {PRIMARY.map((route, index) => (
                <li key={route} style={{ "--i": index } as CSSProperties}>
                  <Link href={localeHref(locale, route)} aria-current={current(route)} onClick={close}>
                    {nav.links[route]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-menu__actions">
            <Link href={localeHref(locale, "signIn")} className="ui-button ui-button--secondary" onClick={close}>
              {nav.account.signIn}
            </Link>
            <Link href={localeHref(locale, "signUp")} className="ui-button ui-button--primary" onClick={close}>
              {nav.account.getStarted}
            </Link>
          </div>
          <nav className="site-menu__languages" aria-label={nav.menu.languages}>
            <p className="ui-label">{nav.menu.languages}</p>
            <LanguageLinks current={locale} />
          </nav>
        </div>
      </dialog>
    </header>
  );
}
