import { notFound } from "next/navigation";
import { LandingPage } from "../components/LandingPage";
import { getDictionary } from "../i18n/dictionaries";
import { getLocale, isLocale } from "../i18n/config";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  return <LandingPage locale={getLocale(locale)} dictionary={dictionary} />;
}
