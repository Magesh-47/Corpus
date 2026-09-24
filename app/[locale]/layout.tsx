import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, isLocale, localeCodes, locales } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";

export function generateStaticParams() {
  return localeCodes.map((locale) => ({ locale }));
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://anatomy-atelier.openai.site");

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const config = getLocale(locale);
  const { ui } = await getDictionary(locale);
  const image = { url: "/og.jpg", width: 1200, height: 675, alt: ui.meta.imageAlt };

  return {
    metadataBase: new URL(siteUrl),
    title: ui.meta.title,
    description: ui.meta.description,
    applicationName: "Corpus",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(locales.map((entry) => [entry.code, `/${entry.code}`])),
        "x-default": "/en",
      },
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/favicon.svg",
      apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    },
    openGraph: {
      type: "website",
      siteName: "Corpus",
      locale: config.intl,
      alternateLocale: locales.filter((entry) => entry.code !== locale).map((entry) => entry.intl),
      title: ui.meta.ogTitle,
      description: ui.meta.ogDescription,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: ui.meta.ogTitle,
      description: ui.meta.ogDescription,
      images: [image],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const config = getLocale(locale);

  return <div lang={config.code} dir={config.dir}>{children}</div>;
}
