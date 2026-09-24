import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getLocale, isLocale, localeCodes } from "../i18n/config";
import { fontClassName } from "../i18n/fonts";
import { getSiteDictionary } from "../i18n/site";
import { siteUrl } from "../lib/seo";
import "../globals.css";

export function generateStaticParams() {
  return localeCodes.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { marketing } = await getSiteDictionary(locale);

  // Pages supply their own title, description, canonical and social cards via
  // `pageMetadata`; this is the frame every page inherits.
  return {
    metadataBase: new URL(siteUrl),
    title: { template: "%s — Corpus", default: marketing.meta.title },
    description: marketing.meta.description,
    applicationName: "Corpus",
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/favicon.svg",
      apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    },
  };
}

export const viewport: Viewport = { themeColor: "#f7f0e7" };

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const config = getLocale(locale);

  return (
    <html lang={config.code} dir={config.dir}>
      <body className={fontClassName(config.script)}>{children}</body>
    </html>
  );
}
