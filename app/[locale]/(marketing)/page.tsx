import type { Metadata } from "next";
import { ButtonLink } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { getLocale } from "../../i18n/config";
import { getSiteDictionary } from "../../i18n/site";
import { localeHref } from "../../lib/routes";
import { pageMetadata } from "../../lib/seo";
import "../../styles/home.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = getLocale((await params).locale);
  const { marketing, common } = await getSiteDictionary(code);
  return pageMetadata({
    locale: code,
    route: "home",
    title: marketing.meta.title,
    description: marketing.meta.description,
    imageAlt: common.ogImageAlt,
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: Props) {
  const { code } = getLocale((await params).locale);
  const { common } = await getSiteDictionary(code);
  return (
    <Container className="ui-section">
      <SectionHeader level={1} title={common.brand.tagline} />
      <ButtonLink href={localeHref(code, "explore")} arrow>
        {common.actions.exploreBody}
      </ButtonLink>
    </Container>
  );
}
