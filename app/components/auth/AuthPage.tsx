import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { OrganArt, type OrganAsset } from "../anatomy/OrganArt";
import { StatusTag } from "../ui/StatusTag";
import { getDictionary } from "../../i18n/dictionaries";
import type { SiteDictionary } from "../../i18n/site";
import { organStructures, type OrganId } from "../../lib/anatomy-data";
import { localeHref, type RouteKey } from "../../lib/routes";

export type AuthPageKey = "signIn" | "signUp" | "forgotPassword";

/** Which illustration each page shows. Structure only — names come from the organ data. */
const PLATES: Record<AuthPageKey, { organ: OrganId; asset: OrganAsset }> = {
  signIn: { organ: "heart", asset: "organ" },
  signUp: { organ: "brain", asset: "microscopic" },
  forgotPassword: { organ: "lungs", asset: "organ" },
};

/** Where each page's closing line leads. */
const SWITCH: Record<AuthPageKey, RouteKey> = {
  signIn: "signUp",
  signUp: "signIn",
  forgotPassword: "signIn",
};

/**
 * One auth page: the honest "accounts are coming soon" notice, the heading and
 * form, and — on wide screens — an illustrated plate from the anatomy library.
 * On narrow screens the form comes first and the plate follows as a caption.
 */
export async function AuthPage({
  locale,
  page,
  site,
  children,
}: {
  locale: string;
  page: AuthPageKey;
  site: SiteDictionary;
  children: ReactNode;
}) {
  const { auth, common } = site;
  const copy = auth[page];
  const plate = PLATES[page];
  const structure = organStructures.find((organ) => organ.id === plate.organ)!;
  const { organs } = await getDictionary(locale);
  const plateCopy = auth.plates[page];

  return (
    <div className="auth-page">
      <div className="auth-column">
        <div className="auth-column__inner">
          <header className="auth-intro ui-rise">
            <p className="ui-eyebrow">{copy.eyebrow}</p>
            <h1 className="auth-title">{copy.title}</h1>
            <p className="auth-lede">{copy.lede}</p>
          </header>

          <aside className="auth-notice ui-rise" aria-labelledby="auth-notice-title" style={{ "--rise-delay": "90ms" } as React.CSSProperties}>
            <StatusTag tone="soon">{common.status.comingSoon}</StatusTag>
            <p className="auth-notice__text">
              <strong id="auth-notice-title">{auth.notice.title}</strong> {auth.notice.body}
            </p>
            <Link className="ui-button ui-button--text auth-notice__link" href={localeHref(locale, "explore")}>
              {auth.notice.action}
              <ArrowRight className="ui-arrow" size={16} strokeWidth={1.75} aria-hidden />
            </Link>
          </aside>

          <div className="auth-body ui-rise" style={{ "--rise-delay": "160ms" } as React.CSSProperties}>
            {children}
          </div>

          <p className="auth-switch">
            <span>{copy.switchPrompt}</span>{" "}
            <Link className="auth-link auth-link--strong" href={localeHref(locale, SWITCH[page])}>
              {copy.switchAction}
            </Link>
          </p>
        </div>
      </div>

      <figure className="auth-plate">
        <div className="auth-plate__rail">
          <span>{plateCopy.number}</span>
          <span aria-hidden className="auth-plate__rule" />
          <span>{common.brand.descriptor}</span>
        </div>
        <div className="auth-plate__art">
          <OrganArt organ={structure} asset={plate.asset} alt={plateCopy.alt} size={720} loading="eager" />
        </div>
        <figcaption className="auth-plate__caption">
          <span className="auth-plate__name">{organs[plate.organ].name}</span>
          <span className="auth-plate__latin ui-latin" lang="la">
            {structure.scientificName}
          </span>
          <span className="auth-plate__meta">
            <span>{plateCopy.view}</span>
            <span>{auth.plates.note}</span>
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
