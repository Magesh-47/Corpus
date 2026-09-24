import type { Metadata } from "next";
import { AboutClosing } from "../../../components/marketing/about/AboutClosing";
import { AboutOpening } from "../../../components/marketing/about/AboutOpening";
import { AccuracyLedger } from "../../../components/marketing/about/AccuracyLedger";
import { Chapter } from "../../../components/marketing/about/Chapter";
import { Collection } from "../../../components/marketing/about/Collection";
import { FutureLayers } from "../../../components/marketing/about/FutureLayers";
import { Intersection } from "../../../components/marketing/about/Intersection";
import { LanguageNames } from "../../../components/marketing/about/LanguageNames";
import { LearningLoop } from "../../../components/marketing/about/LearningLoop";
import { PullQuote } from "../../../components/marketing/about/PullQuote";
import { ScalePlate } from "../../../components/marketing/about/ScalePlate";
import { Tenets } from "../../../components/marketing/about/Tenets";
import { getLocale, locales } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/dictionaries";
import { buildOrgans, indexOrgans } from "../../../i18n/merge";
import { getSiteDictionary } from "../../../i18n/site";
import { format } from "../../../i18n/types";
import { pageMetadata } from "../../../lib/seo";
import "../../../styles/about.css";

type Props = { params: Promise<{ locale: string }> };

/** Structures excerpted in the accuracy chapter's index: [organ id, hotspot id]. */
const INDEX_EXCERPT = [
  ["heart", "left-ventricle"],
  ["brain", "frontal"],
  ["lungs", "bronchus"],
  ["kidneys", "cortex"],
  ["eyeball", "optic"],
  ["pancreas", "head"],
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = getLocale((await params).locale);
  const { about, common } = await getSiteDictionary(code);
  return pageMetadata({
    locale: code,
    route: "about",
    title: about.meta.title,
    description: about.meta.description,
    imageAlt: common.ogImageAlt,
  });
}

export default async function AboutPage({ params }: Props) {
  const { code } = getLocale((await params).locale);
  const [{ about, common }, dictionary] = await Promise.all([getSiteDictionary(code), getDictionary(code)]);
  const organList = buildOrgans(dictionary.organs);
  const organs = indexOrgans(organList);
  const { chapters } = about;

  // The heart's name as Explore shows it in every shipped language.
  const heartNames = await Promise.all(
    locales.map(async (entry) => ({
      code: entry.code,
      dir: entry.dir,
      nativeName: entry.nativeName,
      name: (await getDictionary(entry.code)).organs.heart.name,
    })),
  );

  const indexEntries = INDEX_EXCERPT.flatMap(([organId, hotspotId]) => {
    const organ = organs[organId];
    const hotspot = organ.hotspots.find((entry) => entry.id === hotspotId);
    return hotspot ? [{ organ, hotspot }] : [];
  });

  const order = ["why", "flat", "visual", "accuracy", "exploration", "active", "multilingual", "atelier", "future"] as const;
  const contents = order.map((id) => ({ id, label: chapters[id].label }));
  const chapterProps = (id: (typeof order)[number]) => ({
    id,
    number: order.indexOf(id) + 1,
    chapterLabel: about.chapterLabel,
    label: chapters[id].label,
    title: chapters[id].title,
    body: chapters[id].body,
  });

  return (
    <article className="about">
      <AboutOpening copy={about} organ={organs.heart} chapters={contents} />
      <Intersection copy={about.intersection} />

      <Chapter {...chapterProps("why")} />
      <Chapter {...chapterProps("flat")}>
        <PullQuote text={chapters.flat.quote} />
      </Chapter>
      <Chapter {...chapterProps("visual")} tone="deep">
        <ScalePlate copy={chapters.visual.scales} organ={organs.lungs} />
      </Chapter>
      <Chapter {...chapterProps("accuracy")}>
        <AccuracyLedger copy={chapters.accuracy} entries={indexEntries} />
      </Chapter>
      <Chapter {...chapterProps("exploration")}>
        <Collection copy={chapters.exploration.collection} organs={organList} locale={code} />
      </Chapter>
      <Chapter {...chapterProps("active")} tone="deep">
        <LearningLoop copy={chapters.active.loop} />
      </Chapter>
      <Chapter
        {...chapterProps("multilingual")}
        body={{
          ...chapters.multilingual.body,
          first: format(chapters.multilingual.body.first, { count: String(locales.length) }),
        }}
      >
        <LanguageNames copy={chapters.multilingual.names} names={heartNames} latin={organs.heart.scientificName} />
      </Chapter>
      <Chapter {...chapterProps("atelier")}>
        <PullQuote text={common.brand.tagline} />
        <Tenets copy={chapters.atelier.tenets} />
      </Chapter>
      <Chapter {...chapterProps("future")}>
        <FutureLayers copy={chapters.future.layers} status={common.status.comingSoon} />
      </Chapter>

      <AboutClosing copy={about.closing} locale={code} organ={organs.heart} exploreLabel={common.actions.exploreBody} />
    </article>
  );
}
