"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  featuresHeading: "Why Corpus",
  feature1Title: "Medically detailed",
  feature1Body:
    "Every specimen is built from real anatomical structure, down to individually labelled hotspots using Terminologia Anatomica terms.",
  feature2Title: "Learn by doing",
  feature2Body:
    "Rotate, cross-section, and compare organs, then test yourself with labelling quizzes designed to build lasting recall.",
  feature3Title: "Speaks your language",
  feature3Body:
    "Fully translated into 12 languages, each rendered in its native script, reading direction, and typographic voice.",
  bandHeading: "See every structure in motion",
  bandBody: "Rotate, isolate, and cross-section each organ in real time, then test what you've learned with a guided quiz.",
  bandCta: "Open the viewer",
  footerHeading: "Ready to begin?",
};

export function LandingPage({ locale, dictionary }: { locale: LocaleConfig; dictionary: Dictionary }) {
  const t = dictionary.ui;
  const l = t.landing ?? FALLBACK_LANDING;
  const organs = buildOrgans(dictionary.organs);
  const exploreHref = `/${locale.code}/explore`;
  const rootRef = useRef<HTMLDivElement>(null);

  const heroOrgan = organs.find((organ) => organ.id === "heart") ?? organs[0];
  const chipA = organs.find((organ) => organ.id === "brain") ?? organs[1];
  const chipB = organs.find((organ) => organ.id === "lungs") ?? organs[2];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-reveal-hero]",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.09, ease: "power2.out" },
      );
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        gsap.fromTo(
          group.querySelectorAll("[data-reveal]"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: { trigger: group, start: "top 82%" },
          },
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="landing-shell" ref={rootRef}>
      <header className="landing-header">
        <div className="brand">
          <strong>
            Corpus<sup>✦</sup>
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
        <div className="landing-hero-copy">
          <span className="landing-kicker" data-reveal-hero>
            {l.kicker}
          </span>
          <h1 className="landing-title" data-reveal-hero>
            {t.brand.tagline}
          </h1>
          <p className="landing-lede" data-reveal-hero>
            {t.meta.description}
          </p>
          <div className="landing-cta-row" data-reveal-hero>
            <Link className="landing-cta-primary" href={exploreHref}>
              {l.ctaPrimary}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <span className="landing-stat">
              <Microscope size={15} aria-hidden />
              {format(l.statLine, { organs: String(organStructures.length), languages: String(locales.length) })}
            </span>
          </div>
        </div>

        <div className="landing-hero-visual" data-reveal-hero>
          <span className="landing-hero-glow landing-hero-glow-a" aria-hidden />
          <span className="landing-hero-glow landing-hero-glow-b" aria-hidden />
          <span className="landing-hero-plinth">
            <OrganArt organ={heroOrgan} asset="organ" alt="" size={220} />
          </span>
          <span
            className="landing-hero-chip landing-hero-chip-a"
            style={{ "--chip-accent": chipA.accent } as React.CSSProperties}
          >
            <OrganArt organ={chipA} asset="thumb" alt="" size={84} />
          </span>
          <span
            className="landing-hero-chip landing-hero-chip-b"
            style={{ "--chip-accent": chipB.accent } as React.CSSProperties}
          >
            <OrganArt organ={chipB} asset="thumb" alt="" size={84} />
          </span>
        </div>
      </section>

      <section className="landing-quote" data-reveal-group>
        <span className="landing-quote-mark" data-reveal aria-hidden>
          ✦
        </span>
        <p data-reveal>
          {t.library.quoteLine1} {t.library.quoteLine2}
        </p>
        <span data-reveal>{t.library.quoteSign}</span>
      </section>

      <section className="landing-section" data-reveal-group>
        <div className="landing-section-heading" data-reveal>
          <h2>{l.organsHeading}</h2>
          <p>{l.organsSub}</p>
        </div>
        <div className="landing-organ-grid">
          {organs.map((organ) => (
            <Link
              key={organ.id}
              href={exploreHref}
              className="landing-organ-card"
              data-reveal
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

      <section className="landing-section" data-reveal-group>
        <div className="landing-section-heading" data-reveal>
          <h2>{l.featuresHeading}</h2>
        </div>
        <div className="landing-feature-grid">
          <article className="landing-feature-card" data-reveal>
            <span className="landing-feature-icon">
              <Microscope size={20} aria-hidden />
            </span>
            <h3>{l.feature1Title}</h3>
            <p>{l.feature1Body}</p>
          </article>
          <article className="landing-feature-card" data-reveal>
            <span className="landing-feature-icon">
              <BookOpen size={20} aria-hidden />
            </span>
            <h3>{l.feature2Title}</h3>
            <p>{l.feature2Body}</p>
          </article>
          <article className="landing-feature-card" data-reveal>
            <span className="landing-feature-icon">
              <Globe size={20} aria-hidden />
            </span>
            <h3>{l.feature3Title}</h3>
            <p>{l.feature3Body}</p>
          </article>
        </div>
      </section>

      <section className="landing-cta-band" data-reveal-group>
        <div className="landing-cta-band-copy" data-reveal>
          <h2>{l.bandHeading}</h2>
          <p>{l.bandBody}</p>
        </div>
        <Link className="landing-cta-primary" href={exploreHref} data-reveal>
          {l.bandCta}
          <ArrowRight size={16} aria-hidden />
        </Link>
      </section>

      <section className="landing-footer-cta" data-reveal-group>
        <h2 data-reveal>{l.footerHeading}</h2>
        <Link className="landing-cta-primary" href={exploreHref} data-reveal>
          {l.ctaPrimary}
          <ArrowRight size={16} aria-hidden />
        </Link>
      </section>

      <footer className="landing-footer">
        <span>
          Corpus<sup>✦</sup>
        </span>
        <span>{t.brand.tagline}</span>
      </footer>
    </main>
  );
}
