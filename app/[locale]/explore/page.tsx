import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnatomyApp } from "../../components/anatomy/AnatomyApp";
import { getDictionary } from "../../i18n/dictionaries";
import { getLocale, isLocale } from "../../i18n/config";
import { getSiteDictionary } from "../../i18n/site";
import { organStructures, type OrganId } from "../../lib/anatomy-data";
import { pageMetadata } from "../../lib/seo";
// Shared tokens and primitives (wordmark, buttons, labels). Scoped classes only.
import "../../styles/site.css";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { common } = await getSiteDictionary(locale);
  return pageMetadata({
    locale,
    route: "explore",
    title: common.explore.meta.title,
    description: common.explore.meta.description,
    imageAlt: common.ogImageAlt,
  });
}

/** `?organ=<id>` opens that specimen; anything unknown falls back to the heart. */
function initialOrgan(value: string | string[] | undefined): OrganId {
  const id = Array.isArray(value) ? value[0] : value;
  return organStructures.find((organ) => organ.id === id)?.id ?? "heart";
}

export default async function Explore({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const [dictionary, query] = await Promise.all([getDictionary(locale), searchParams]);
  return <AnatomyApp locale={getLocale(locale)} dictionary={dictionary} initialOrgan={initialOrgan(query.organ)} />;
}
