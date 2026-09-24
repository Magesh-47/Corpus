import { ButtonLink } from "../../ui/Button";
import { Container } from "../../ui/Container";
import { SectionHeader } from "../../ui/SectionHeader";
import { StatusTag } from "../../ui/StatusTag";
import { format } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import type { SiteDictionary } from "../../../i18n/site";
import { planAnchor, planNumber, planOrder } from "./plans";

/**
 * The three plans set side by side like columns in a ledger — hairline rules,
 * not glossy cards. Free lists what Explore does today; the two future plans
 * are drawn with a dashed rule and describe directions, never promises.
 */
export function PlanLedger({
  locale,
  site,
  organCount,
  languageCount,
}: {
  locale: string;
  site: SiteDictionary;
  organCount: number;
  languageCount: number;
}) {
  const { plans } = site.pricing;
  const { status, actions } = site.common;
  const counts = { organCount: String(organCount), languageCount: String(languageCount) };

  return (
    <section id="pricing-plans" className="pricing-plans ui-section" aria-labelledby="pricing-plans-title">
      <Container>
        <SectionHeader id="pricing-plans-title" eyebrow={plans.eyebrow} title={plans.title} lede={plans.lede} />

        <div className="pricing-ledger">
          {planOrder.map((key, index) => {
            const plan = plans.items[key];
            const available = key === "free";
            return (
              <article
                key={key}
                id={planAnchor(key)}
                className={`pricing-plan ${available ? "pricing-plan--available" : "pricing-plan--planned"}`}
                aria-labelledby={`${planAnchor(key)}-name`}
                data-reveal
                style={{ "--reveal-delay": `${index * 120}ms` } as React.CSSProperties}
              >
                <div className="pricing-plan__meta">
                  <span className="pricing-plan__number">{format(plans.numberLabel, { number: planNumber(index) })}</span>
                  <StatusTag tone={available ? "available" : "soon"}>
                    {available ? status.availableNow : status.comingSoon}
                  </StatusTag>
                </div>

                <h3 id={`${planAnchor(key)}-name`} className="pricing-plan__name">
                  {plan.name}
                </h3>
                <p className="pricing-plan__tagline">{plan.tagline}</p>

                <p className="pricing-plan__price">
                  <span className="pricing-plan__price-value">{plan.price}</span>
                  <span className="pricing-plan__price-note">{plan.priceNote}</span>
                </p>

                <p className="pricing-plan__description ui-body">{plan.description}</p>

                <p className="pricing-plan__list-heading">{plan.listHeading}</p>
                <ul className="pricing-plan__list">
                  {Object.entries(plan.list).map(([id, item]) => (
                    <li key={id}>{format(item, counts)}</li>
                  ))}
                </ul>

                <div className="pricing-plan__foot">
                  {available ? (
                    <ButtonLink href={localeHref(locale, "explore")} arrow>
                      {actions.exploreBody}
                    </ButtonLink>
                  ) : (
                    <p className="pricing-plan__unavailable">{plans.unavailable}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className="pricing-ledger__note ui-caption">{plans.plannedNote}</p>
      </Container>
    </section>
  );
}
