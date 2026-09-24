import { defaultLocale } from "../config";
import type { site as englishSite } from "./en";

/**
 * Copy for the public site, auth, and app shell — separate from `ui` (the
 * anatomy viewer) and `organs` (anatomical prose). Every locale is typed
 * against the English shape, so a missing key fails the build.
 */
export type SiteDictionary = typeof englishSite;

/** Explicit map so each locale stays in its own chunk and remains statically analysable. */
const loaders: Record<string, () => Promise<SiteDictionary>> = {
  en: () => import("./en").then((m) => m.site),
};

export async function getSiteDictionary(locale: string): Promise<SiteDictionary> {
  return (loaders[locale] ?? loaders[defaultLocale])();
}
