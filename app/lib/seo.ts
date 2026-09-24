import type { Metadata } from "next";
import { defaultLocale, getLocale, locales } from "../i18n/config";
import { routes, type RouteKey } from "./routes";

/** Resolved per host, so a preview deployment never advertises another origin. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://anatomy-atelier.openai.site");

const OG_IMAGE = { url: "/og.jpg", width: 1200, height: 675 };

/**
 * Title, description, canonical, hreflang alternates and social cards for one
 * page. Metadata merges shallowly, so a page that sets `openGraph` must carry
 * the image itself — this keeps every page complete rather than half-inheriting.
 */
export function pageMetadata({
  locale,
  route,
  title,
  description,
  imageAlt,
  absoluteTitle = false,
  index = true,
}: {
  locale: string;
  route: RouteKey;
  title: string;
  description: string;
  imageAlt: string;
  /** Use the title verbatim instead of appending " — Corpus". */
  absoluteTitle?: boolean;
  /** False for utility pages (auth) that should not appear in search results. */
  index?: boolean;
}): Metadata {
  const config = getLocale(locale);
  const path = routes[route];
  const url = `/${config.code}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} — Corpus`;
  const image = { ...OG_IMAGE, alt: imageAlt };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((entry) => [entry.code, `/${entry.code}${path}`])),
        "x-default": `/${defaultLocale}${path}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Corpus",
      url,
      locale: config.intl,
      alternateLocale: locales.filter((entry) => entry.code !== config.code).map((entry) => entry.intl),
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
    ...(index ? {} : { robots: { index: false, follow: true } }),
  };
}
