import { locales } from "../../../i18n/config";
import { format } from "../../../i18n/types";
import { faqItemId, faqValues } from "./HelpFaq";
import type { SearchEntry } from "./HelpSearch";
import { GUIDES, languageNames, type HelpContext } from "./shared";

/** Every string inside a copy object, in order. */
function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (value && typeof value === "object") return Object.values(value).flatMap(strings);
  return [];
}

/**
 * The search index for the page, built on the server from the same copy the
 * page renders — so it is always in the reader's language and never finds
 * anything the page does not say.
 */
export function buildSearchIndex(ctx: HelpContext): SearchEntry[] {
  const { help, ui } = ctx;
  const values: Record<string, string> = {
    ...faqValues(ctx),
    ...ui.tools,
    explore: ctx.site.navigation.links.explore,
    quiz: ui.info.quiz,
    autoRotate: ui.viewer.autoRotate,
    count: ctx.num(ctx.organs.length),
  };
  const fill = (text: string) => format(text, values).replace(/\{\w+\}/g, "");

  const questions: SearchEntry[] = Object.entries(help.faq).map(([key, entry]) => {
    const answer = format(entry.a, faqValues(ctx));
    return { id: faqItemId(key), kind: "question", title: entry.q, excerpt: answer, text: answer };
  });

  // Names a learner might search for that the guides show but do not spell
  // out in their own copy: tool labels, organ names, languages.
  const nameOf = languageNames(ctx.locale.code);
  const extras: Partial<Record<(typeof GUIDES)[number]["key"], string[]>> = {
    viewer: Object.values(ui.tools),
    exploring: ctx.organs.flatMap((organ) => [organ.name, organ.scientificName, organ.system]),
    practice: [ui.quiz.find, ui.quiz.hint],
    languages: locales.flatMap((entry) => [entry.nativeName, nameOf(entry.code, entry.englishName)]),
  };

  const guides: SearchEntry[] = GUIDES.map(({ key, id }) => {
    const category = help.categories.items[key];
    const copy = help[key];
    return {
      id,
      kind: "guide",
      title: copy.title,
      excerpt: category.line,
      text: [category.label, category.line, ...strings(copy), ...(extras[key] ?? [])].map(fill).join(" "),
    };
  });

  return [...questions, ...guides];
}
