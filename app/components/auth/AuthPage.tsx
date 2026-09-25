import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { StatusTag } from "../ui/StatusTag";
import type { Note } from "../ui/Editorial";
import { getDictionary } from "../../i18n/dictionaries";
import { buildOrgans, indexOrgans } from "../../i18n/merge";
import type { SiteDictionary } from "../../i18n/site";
import type { OrganId } from "../../lib/anatomy-data";
import { localeHref, type RouteKey } from "../../lib/routes";
import { AuthPlate, type AuthPageKey } from "./AuthPlate";
import { AuthShell } from "./AuthShell";

export type { AuthPageKey };

/**
 * Which plate each page shows, which hotspot its leader line names, and where
 * that structure sits on the painting (physical %, never mirrored). Structure
 * only — every name comes from the organ data.
 */
const PLATES: Record<AuthPageKey, { organ: OrganId; hotspot: string; note: Omit<Note, "id" | "label"> }> = {
  signIn: { organ: "heart", hotspot: "aorta", note: { x: 50, y: 15, side: "right", length: 104 } },
  signUp: { organ: "brain", hotspot: "cerebellum", note: { x: 74, y: 63, side: "right", length: 56 } },
  forgotPassword: { organ: "lungs", hotspot: "trachea", note: { x: 51.5, y: 11, side: "right", length: 104 } },
};

/** Where each page's closing line leads. */
const SWITCH: Record<AuthPageKey, RouteKey> = {
  signIn: "signUp",
  signUp: "signIn",
  forgotPassword: "signIn",
};

/**
 * One auth page: heading, the honest "accounts are coming soon" notice, the
 * form and a way to the sibling page — set beside that page's anatomical plate.
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
  const organs = indexOrgans(buildOrgans((await getDictionary(locale)).organs));

  return (
    <AuthShell
      locale={locale}
      site={site}
      plate={<AuthPlate page={page} organ={organs[plate.organ]} hotspotId={plate.hotspot} note={plate.note} copy={auth.plates} />}
    >
      <div className="auth-content">
        <header className="auth-intro ui-rise">
          <p className="ui-eyebrow">{copy.eyebrow}</p>
          <h1 className="auth-title">{copy.title}</h1>
          <p className="auth-lede">{copy.lede}</p>
        </header>

        <aside
          className="auth-notice ui-rise"
          aria-labelledby="auth-notice-title"
          style={{ "--rise-delay": "90ms" } as React.CSSProperties}
        >
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
    </AuthShell>
  );
}
