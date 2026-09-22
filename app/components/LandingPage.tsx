import Link from "next/link";
import { ArrowRight, BookOpen, Globe, Microscope } from "lucide-react";
import { OrganArt, LanguageSwitcher } from "./AnatomyApp";
import { organStructures } from "../lib/anatomy-data";
import { locales, type LocaleConfig } from "../i18n/config";
import { buildOrgans } from "../i18n/merge";
import { format, type Dictionary } from "../i18n/types";

/** English copy used until a locale's dictionary fills in `ui.landing`. */
const FALLBACK_LANDING = {
  kicker: "Interactive 3D anatomy",
  ctaPrimary: "Start exploring",
  statLine: "{organs} specimens · {languages} languages",
  organsHeading: "Nine specimens, one atelier",
  organsSub: "Medically detailed 3D organs, each with guided lessons, quizzes, and cross-sections.",
  featuresHeading: "Why Anatomy Atelier",
  feature1Title: "Medically detailed",
  feature1Body:
    "Every specimen is built from real anatomical structure, down to individually labelled hotspots using Terminologia Anatomica terms.",
  feature2Title: "Learn by doing",
  feature2Body:
    "Rotate, cross-section, and compare organs, then test yourself with labelling quizzes designed to build lasting recall.",
  feature3Title: "Speaks your language",
  feature3Body:
    "Fully translated into 12 languages, each rendered in its native script, reading direction, and typographic voice.",
  footerHeading: "Ready to begin?",
};

export function LandingPage({ locale, dictionary }: { locale: LocaleConfig; dictionary: Dictionary }) {
  const t = dictionary.ui;
  const l = t.landing ?? FALLBACK_LANDING;
  const organs = buildOrgans(dictionary.organs);
  const exploreHref = `/${locale.code}/explore`;

  return (
    <main className="landing-shell">
      <header className="landing-header">
        <div className="brand">
          <strong>
            Anatomy Atelier<sup>✦</sup>
          </strong>
          <em>{t.brand.tagline}</em>
        </div>
        <div className="landing-header-actions">
          <LanguageSwitcher locale={locale} t={t} />
          <Link className="landing-explore-link" href={exploreHref}>
            {t.nav.explore}
            <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
      </header>

      <section className="landing-hero">
        <span className="landing-kicker">{l.kicker}</span>
        <h1 className="landing-title">{t.brand.tagline}</h1>
        <p className="landing-lede">{t.meta.description}</p>
        <div className="landing-cta-row">
          <Link className="landing-cta-primary" href={exploreHref}>
            {l.ctaPrimary}
            <ArrowRight size={16} aria-hidden />
          </Link>
          <span className="landing-stat">
            <Microscope size={15} aria-hidden />
            {format(l.statLine, { organs: String(organStructures.length), languages: String(locales.length) })}
          </span>
        </div>
      </section>

      <section className="landing-section">
        <div className="landing-section-heading">
          <h2>{l.organsHeading}</h2>
          <p>{l.organsSub}</p>
        </div>
        <div className="landing-organ-grid">
          {organs.map((organ) => (
            <Link
              key={organ.id}
              href={exploreHref}
              className="landing-organ-card"
              style={{ "--item-accent": organ.accent } as React.CSSProperties}
            >
              <span className="organ-glyph">
                <OrganArt organ={organ} asset="thumb" alt="" size={68} />
              </span>
              <b>{organ.name}</b>
              <span>{organ.poetic}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="landing-section">
        <div className="landing-section-heading">
          <h2>{l.featuresHeading}</h2>
        </div>
        <div className="landing-feature-grid">
          <article className="landing-feature-card">
            <span className="landing-feature-icon">
              <Microscope size={20} aria-hidden />
            </span>
            <h3>{l.feature1Title}</h3>
            <p>{l.feature1Body}</p>
          </article>
          <article className="landing-feature-card">
            <span className="landing-feature-icon">
              <BookOpen size={20} aria-hidden />
            </span>
            <h3>{l.feature2Title}</h3>
            <p>{l.feature2Body}</p>
          </article>
          <article className="landing-feature-card">
            <span className="landing-feature-icon">
              <Globe size={20} aria-hidden />
            </span>
            <h3>{l.feature3Title}</h3>
            <p>{l.feature3Body}</p>
          </article>
        </div>
      </section>

      <section className="landing-footer-cta">
        <h2>{l.footerHeading}</h2>
        <Link className="landing-cta-primary" href={exploreHref}>
          {l.ctaPrimary}
          <ArrowRight size={16} aria-hidden />
        </Link>
      </section>

      <footer className="landing-footer">
        <span>
          Anatomy Atelier<sup>✦</sup>
        </span>
        <span>{t.brand.tagline}</span>
      </footer>
    </main>
  );
}
