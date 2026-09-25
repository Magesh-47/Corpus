"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Search, UserRound, X } from "lucide-react";
import { OrganArt, type OrganAsset } from "./OrganArt";
import { OrganViewer } from "./OrganViewer";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { Wordmark } from "../ui/Wordmark";
import type { OrganId } from "../../lib/anatomy-data";
import { localeHref } from "../../lib/routes";
import type { LocaleConfig } from "../../i18n/config";
import { buildOrgans, indexOrgans, type Hotspot, type Organ } from "../../i18n/merge";
import { format, type Dictionary, type UiDictionary } from "../../i18n/types";

type Modal = "tissue" | "animation" | "clinical" | "system";

/**
 * Measurements like "250–350 g" begin with a digit, which Unicode treats as
 * neutral — inside an RTL paragraph the range gets visually reversed. Digits
 * are not "strong" characters, so `unicode-bidi: plaintext` cannot rescue it;
 * the run has to be isolated as LTR explicitly.
 */
function Measure({ children }: { children: string }) {
  return <bdi dir={/^[\d(]/.test(children.trim()) ? "ltr" : "auto"}>{children}</bdi>;
}

/** Plate numbers, set like an atlas index: 01, 02 … */
const plateNumber = (value: number) => String(value).padStart(2, "0");

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function AnatomyApp({
  locale,
  dictionary,
  initialOrgan = "heart",
}: {
  locale: LocaleConfig;
  dictionary: Dictionary;
  initialOrgan?: OrganId;
}) {
  const t = dictionary.ui;
  const organs = useMemo(() => buildOrgans(dictionary.organs), [dictionary.organs]);
  const organById = useMemo(() => indexOrgans(organs), [organs]);

  const [organId, setOrganId] = useState<OrganId>(initialOrgan);
  const [autoRotate, setAutoRotate] = useState(true);
  const [compare, setCompare] = useState(false);
  const [modal, setModal] = useState<Modal | null>(null);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [quizActive, setQuizActive] = useState(false);
  const [selected, setSelected] = useState<Hotspot | null>(null);
  const prefetched = useRef(new Set<OrganId>());
  const searchInput = useRef<HTMLInputElement>(null);
  const activeItem = useRef<HTMLButtonElement>(null);
  const organ = organById[organId];
  const reference = organById[organId === "heart" ? "brain" : "heart"];
  const filteredOrgans = useMemo(
    () =>
      organs.filter((item) =>
        `${item.name} ${item.system}`.toLocaleLowerCase(locale.code).includes(query.trim().toLocaleLowerCase(locale.code)),
      ),
    [organs, query, locale.code],
  );

  // A deep-linked organ may sit off-screen in the compact mobile selector.
  useEffect(() => {
    if (initialOrgan !== "heart") activeItem.current?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [initialOrgan]);

  useEffect(() => {
    if (searchOpen) searchInput.current?.focus();
  }, [searchOpen]);

  const selectOrgan = (id: OrganId) => {
    if (organById[id].illustrated) {
      ["organ", "microscopic", "compare", "location"].forEach((asset) => {
        const image = new Image();
        image.src = `/anatomy/${id}/${asset}.webp`;
      });
    }
    setOrganId(id);
    setCompare(false);
    setQuizActive(false);
    setSelected(null);
    // Keeps the address shareable and lets the language switcher (which
    // carries the query string) reopen the same specimen.
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("organ", id);
      window.history.replaceState(window.history.state, "", url);
    } catch {
      // An address that cannot be rewritten is not worth failing a selection over.
    }
  };

  // Warms the model in the HTTP cache while the pointer is still travelling,
  // so the switch usually renders without a visible loading pass.
  const prefetchOrgan = (id: OrganId) => {
    if (id === organId || prefetched.current.has(id)) return;
    prefetched.current.add(id);
    void fetch(organById[id].model, { priority: "low" } as RequestInit).catch(() => {});
  };

  const startQuiz = () => {
    setModal(null);
    setCompare(false);
    setQuizActive(true);
    // On a phone the quiz is started below the model; bring the model back.
    const viewer = document.getElementById("viewer");
    if (!viewer) return;
    const box = viewer.getBoundingClientRect();
    if (box.top < 0 || box.bottom > window.innerHeight) {
      viewer.scrollIntoView({ block: "start", behavior: prefersReducedMotion() ? "auto" : "smooth" });
    }
  };

  const plates: {
    key: string;
    label: string;
    title: string;
    asset?: OrganAsset;
    round?: boolean;
    body?: ReactNode;
    action?: { label: string; onClick: () => void };
  }[] = [
    {
      key: "microscopic", label: t.cards.microscopic, title: organ.tissue, asset: "microscopic", round: true,
      action: { label: t.cards.exploreTissue, onClick: () => setModal("tissue") },
    },
    {
      key: "compare", label: t.cards.compareOrgans, title: organ.comparison, asset: "compare",
      action: { label: t.cards.openComparison, onClick: () => setCompare(true) },
    },
    {
      key: "function", label: t.cards.functionAnimation, title: organ.function, asset: "organ",
      action: { label: t.cards.playAnimation, onClick: () => setModal("animation") },
    },
    {
      key: "clinical", label: t.cards.clinicalNotes, title: t.cards.commonConditions,
      body: (
        <ul className="plate-conditions">
          {organ.conditions.slice(0, 5).map((condition) => <li key={condition}>{condition}</li>)}
        </ul>
      ),
      action: { label: t.cards.seeAll, onClick: () => setModal("clinical") },
    },
    {
      key: "system", label: t.cards.whereItWorks, title: organ.system, asset: "location",
      action: { label: t.cards.seeSystem, onClick: () => setModal("system") },
    },
    {
      key: "curiosity", label: t.cards.curiosity, title: "",
      body: (
        <blockquote className="plate-quote">
          <p>{t.library.quoteLine1}<br />{t.library.quoteLine2}</p>
          <footer>{t.library.quoteSign}</footer>
        </blockquote>
      ),
    },
  ];
  const plateIndex = (key: string) => plates.findIndex((plate) => plate.key === key) + 1;

  return (
    <div className="app-shell">
      <a className="ui-skip" href="#main">{t.nav.skip}</a>

      <header className="app-topbar">
        <a className="app-brand" href={localeHref(locale.code, "home")} aria-label={t.brand.home}>
          <Wordmark />
        </a>
        <nav className="app-nav" aria-label={t.nav.label}>
          <a href={localeHref(locale.code, "explore")} aria-current="page">{t.nav.explore}</a>
        </nav>
        <div className={`app-search ${searchOpen ? "is-open" : ""}`} role="search" id="organ-search">
          <Search size={16} aria-hidden />
          <label className="ui-sr" htmlFor="organ-search-input">{t.search.label}</label>
          <input
            id="organ-search-input"
            ref={searchInput}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape" && !query) setSearchOpen(false);
            }}
            placeholder={t.search.placeholder}
            autoComplete="off"
          />
        </div>
        <button
          type="button"
          className="app-search-toggle"
          aria-expanded={searchOpen}
          aria-controls="organ-search"
          onClick={() => setSearchOpen((open) => !open)}
        >
          {searchOpen ? <X size={18} aria-hidden /> : <Search size={18} aria-hidden />}
          <span className="ui-sr">{t.search.toggle}</span>
        </button>
        <LanguageSwitcher locale={locale} t={t} />
        <a className="app-account" href={localeHref(locale.code, "signIn")}>
          <UserRound size={17} strokeWidth={1.5} aria-hidden />
          <span>{t.nav.account}</span>
        </a>
      </header>

      <main id="main" className="app-main" tabIndex={-1}>
        <div className="workspace">
          <section className="organ-library" aria-labelledby="library-title">
            <div className="panel-heading">
              <p id="library-title" className="ui-label">{t.library.title}</p>
              <span className="panel-count" aria-hidden>{plateNumber(filteredOrgans.length)}</span>
            </div>
            <ul className="organ-list">
              {filteredOrgans.map((item) => {
                const current = organId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      ref={current ? activeItem : undefined}
                      className="organ-item"
                      aria-current={current ? "true" : undefined}
                      onClick={() => selectOrgan(item.id)}
                      onPointerEnter={() => prefetchOrgan(item.id)}
                      onFocus={() => prefetchOrgan(item.id)}
                    >
                      <span className="organ-item__n" aria-hidden>{plateNumber(organs.indexOf(item) + 1)}</span>
                      <span className="organ-glyph">
                        <OrganArt organ={item} asset="thumb" alt="" size={48} />
                      </span>
                      <span className="organ-item__text"><b>{item.name}</b><small>{item.system}</small></span>
                    </button>
                  </li>
                );
              })}
            </ul>
            {filteredOrgans.length === 0 && <p className="organ-empty" role="status">{t.library.empty}</p>}
            {query && (
              <button type="button" className="view-all" onClick={() => setQuery("")}>
                {t.library.showAll}
              </button>
            )}
          </section>

          <OrganViewer
            organ={organ}
            t={t}
            autoRotate={autoRotate}
            onAutoRotate={setAutoRotate}
            compare={compare}
            onCompare={() => setCompare(!compare)}
            quizActive={quizActive}
            onQuizExit={() => setQuizActive(false)}
            onSelectionChange={setSelected}
          />

          <section className="info-panel" aria-labelledby="organ-title">
            <div className="info-scroll">
            <div className="info-body" key={organId}>
              <div className="info-primary">
                <header className="info-head">
                  <div>
                    <p className="ui-label info-system">{organ.system}</p>
                    <h1 id="organ-title">{organ.name}</h1>
                    <p className="info-latin" lang="la">{organ.scientificName}</p>
                  </div>
                  <span className="specimen-stamp">
                    <OrganArt organ={organ} asset="organ" alt="" size={88} />
                  </span>
                </header>
                <p className="info-poetic">{organ.poetic}</p>

                <div
                  className={`selected-structure ${selected ? "has-selection" : ""}`}
                  style={selected ? ({ "--hotspot-color": selected.color } as React.CSSProperties) : undefined}
                  aria-live="polite"
                >
                  <p className="ui-label">{t.viewer.selected}</p>
                  {selected ? (
                    <>
                      <p className="selected-name">{selected.label}</p>
                      {selected.ta !== selected.label && <p className="selected-latin" lang="la">{selected.ta}</p>}
                      {selected.detail && <p className="selected-detail">{selected.detail}</p>}
                    </>
                  ) : (
                    <p className="selected-hint">{t.viewer.selectHint}</p>
                  )}
                </div>

                <p className="description">{organ.description}</p>
              </div>

              <div className="info-secondary">
                <h2 className="info-heading">{t.info.keyFacts}</h2>
                <dl className="key-facts">
                  <div><dt>{t.info.size}</dt><dd><Measure>{organ.size}</Measure></dd></div>
                  <div><dt>{t.info.weight}</dt><dd><Measure>{organ.weight}</Measure></dd></div>
                  <div><dt>{t.info.daily}</dt><dd><Measure>{organ.dailyFact}</Measure></dd></div>
                  <div><dt>{t.info.location}</dt><dd><Measure>{organ.location}</Measure></dd></div>
                  <div><dt>{t.info.bloodSupply}</dt><dd><Measure>{organ.bloodSupply}</Measure></dd></div>
                  <div><dt>{t.info.function}</dt><dd><Measure>{organ.function}</Measure></dd></div>
                </dl>

                <div className="info-notes">
                  <div className="info-note">
                    <p className="ui-label">{t.info.medical}</p>
                    <p>{organ.medical}</p>
                  </div>
                  <div className="info-note">
                    <p className="ui-label">{t.info.didYouKnow}</p>
                    <p>{organ.funFact}</p>
                  </div>
                </div>

              </div>
            </div>
            </div>

            {/* Kept outside the scrolling column so it is always in view on desktop. */}
            <section className="test-yourself" aria-labelledby="test-title">
              <h2 id="test-title" className="info-heading">{t.info.quiz}</h2>
              <p>{t.info.quizIntro}</p>
              <button type="button" className="ui-button ui-button--primary test-start" onClick={startQuiz}>
                {t.quiz.start}
                <ArrowRight size={16} className="ui-arrow" aria-hidden />
              </button>
            </section>
          </section>
        </div>

        <section className="plates" aria-labelledby="plates-title">
          <header className="plates-head">
            <h2 id="plates-title">{t.cards.title}</h2>
            <p className="ui-label">{organ.name}</p>
          </header>
          <ol className="plates-list">
            {plates.map((plate, index) => (
              <li key={plate.key} className={`plate plate--${plate.key}`}>
                <p className="plate-label">
                  <span className="plate-n">{plateNumber(index + 1)}</span>
                  <span>{plate.label}</span>
                </p>
                {plate.title && <h3 className="plate-title">{plate.title}</h3>}
                {plate.asset && (
                  <div className={`plate-art ${plate.round ? "is-round" : ""}`}>
                    <OrganArt organ={organ} asset={plate.asset} alt="" />
                  </div>
                )}
                {plate.body}
                {plate.action && (
                  <button type="button" className="plate-action" onClick={plate.action.onClick}>
                    {plate.action.label}
                    <ArrowRight size={14} className="ui-arrow" aria-hidden />
                  </button>
                )}
              </li>
            ))}
          </ol>
        </section>
      </main>

      {compare && (
        <section className="compare-strip" aria-label={t.compare.title}>
          <div className="compare-organ"><OrganArt organ={organ} asset="thumb" alt="" /><span>{t.compare.comparing}</span><strong>{organ.name}</strong><small>{organ.system}</small></div>
          <b>{t.compare.vs}</b>
          <div className="compare-organ"><OrganArt organ={reference} asset="thumb" alt="" /><span>{t.compare.reference}</span><strong>{reference.name}</strong><small>{reference.system}</small></div>
          <dl><div><dt>{t.compare.primaryRole}</dt><dd><Measure>{organ.function}</Measure></dd></div><div><dt>{t.compare.scale}</dt><dd><Measure>{organ.size}</Measure></dd></div></dl>
          <button type="button" onClick={() => setCompare(false)} aria-label={t.compare.close}><X size={18} aria-hidden /></button>
        </section>
      )}

      {modal && (
        <LearningModal
          key={modal}
          type={modal}
          organ={organ}
          t={t}
          plate={plateIndex(modal === "animation" ? "function" : modal === "tissue" ? "microscopic" : modal)}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}

/**
 * A native modal <dialog>: focus containment, Escape and an inert page come
 * from the platform. Focus returns to whatever opened it.
 */
function LearningModal({
  type,
  organ,
  t,
  plate,
  onClose,
}: {
  type: Modal;
  organ: Organ;
  t: UiDictionary;
  plate: number;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
      opener?.focus();
    };
  }, []);

  const vars = { organ: organ.name, location: organ.location };
  const heading = {
    tissue: { label: t.cards.microscopic, title: format(t.modal.insideTitle, vars) },
    animation: { label: t.cards.functionAnimation, title: format(t.modal.motionTitle, vars) },
    clinical: { label: t.cards.clinicalNotes, title: format(t.modal.clinicalTitle, vars) },
    system: { label: t.cards.whereItWorks, title: format(t.modal.bodyTitle, vars) },
  }[type];

  return (
    <dialog
      ref={ref}
      className={`learning-modal ${type === "system" ? "wide" : ""}`}
      aria-labelledby="modal-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      // A press on the backdrop lands on the <dialog> itself; the content
      // fills the box, so any other target is inside it.
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="learning-modal__inner">
        <button type="button" className="modal-close" onClick={onClose} aria-label={t.modal.close}><X size={18} aria-hidden /></button>
        <p className="plate-label">
          <span className="plate-n">{plateNumber(plate)}</span>
          <span>{heading.label}</span>
        </p>
        <h2 id="modal-title">{heading.title}</h2>

        {type === "tissue" && (
          <>
            <p className="modal-intro">{t.modal.tissueIntro}</p>
            <figure className="modal-figure is-round">
              <OrganArt organ={organ} asset="microscopic" alt="" />
            </figure>
            <dl className="modal-facts">
              <div><dt>{t.modal.tissue}</dt><dd>{organ.tissue}</dd></div>
            </dl>
          </>
        )}

        {type === "animation" && (
          <>
            <p className="modal-intro">{t.modal.motionIntro}</p>
            <figure className="modal-demo moving">
              <OrganArt organ={organ} asset="organ" alt="" />
            </figure>
            <dl className="modal-facts">
              <div><dt>{t.modal.primaryRole}</dt><dd><Measure>{organ.function}</Measure></dd></div>
              <div><dt>{t.info.daily}</dt><dd><Measure>{organ.dailyFact}</Measure></dd></div>
            </dl>
          </>
        )}

        {type === "clinical" && (
          <>
            <p className="modal-intro">{organ.medical}</p>
            <h3 className="modal-subhead">{t.cards.commonConditions}</h3>
            <ul className="modal-conditions">
              {organ.conditions.map((condition) => <li key={condition}>{condition}</li>)}
            </ul>
            <p className="modal-disclaimer">{t.modal.disclaimer}</p>
          </>
        )}

        {type === "system" && (
          <>
            <p className="modal-intro">{format(t.modal.systemIntro, vars)}</p>
            {/* Shown whole rather than cropped — the point of this view is the
                figure and its vessels. */}
            <figure className="modal-figure">
              <OrganArt organ={organ} asset="location" alt="" />
            </figure>
            <dl className="modal-facts">
              <div><dt>{t.modal.system}</dt><dd>{organ.system}</dd></div>
              <div><dt>{t.modal.primaryRole}</dt><dd><Measure>{organ.function}</Measure></dd></div>
              <div><dt>{t.modal.bloodSupply}</dt><dd><Measure>{organ.bloodSupply}</Measure></dd></div>
            </dl>
          </>
        )}

        <button type="button" className="ui-button ui-button--secondary modal-continue" onClick={onClose}>
          {t.modal.continueExploring}
          <ArrowRight size={16} className="ui-arrow" aria-hidden />
        </button>
      </div>
    </dialog>
  );
}
