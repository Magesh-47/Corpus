import { ButtonLink } from "../../ui/Button";
import { Container } from "../../ui/Container";
import { StatusTag } from "../../ui/StatusTag";
import { format } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import type { SiteDictionary } from "../../../i18n/site";
import { learnMoreAnchor, planAnchor, planNumber, planOrder } from "./plans";

export type PricingCounts = { organCount: string; structureCount: string; languageCount: string };

/**
 * The three plans set side by side like columns in a ledger — hairline rules,
 * not glossy cards. Free lists what Explore does today; the two future plans
 * are drawn with a dashed rule, describe directions rather than promises, and
 * offer nothing to buy: their only link goes to more information on this page.
 */
export function PlanLedger({ locale, site, counts }: { locale: string; site: SiteDictionary; counts: PricingCounts }) {
  const { plans } = site.pricing;
  const { status } = site.common;

  return (
    <section id="pricing-plans" className="pricing-plans" aria-labelledby="pricing-plans-title">
      <Container>
        <header className="pricing-plans__head">
          <h2 id="pricing-plans-title" className="pricing-plans__title">
            {plans.title}
          </h2>
          <p className="pricing-plans__summary">{plans.summary}</p>
        </header>

        <div className="pricing-ledger">
          {planOrder.map((key, index) => {
            const plan = plans.items[key];
            const anchor = planAnchor(key);
            return (
              <article
                key={key}
                id={anchor}
                className={`pricing-plan ${key === "free" ? "pricing-plan--available" : "pricing-plan--planned"}`}
                aria-labelledby={`${anchor}-name`}
                data-reveal
                style={{ "--reveal-delay": `${index * 120}ms` } as React.CSSProperties}
              >
                <div className="pricing-plan__meta">
                  <span className="pricing-plan__number">{format(plans.numberLabel, { number: planNumber(index) })}</span>
                  <StatusTag tone={key === "free" ? "available" : "soon"}>
                    {key === "free" ? status.availableNow : status.comingSoon}
                  </StatusTag>
                </div>

                <h3 id={`${anchor}-name`} className="pricing-plan__name">
                  {plan.name}
                </h3>
                <p className="pricing-plan__tagline">{plan.tagline}</p>

                <p className="pricing-plan__price">
                  <span className="pricing-plan__price-value">{plan.price}</span>
                  <span className="pricing-plan__price-note">{plan.priceNote}</span>
                </p>

                <p className="pricing-plan__description ui-body">{plan.description}</p>

                <div className="pricing-plan__list-block">
                  <p className="pricing-plan__list-heading">{plan.listHeading}</p>
                  <ul className="pricing-plan__list">
                    {Object.entries(plan.list).map(([id, item]) => (
                      <li key={id}>{format(item, counts)}</li>
                    ))}
                  </ul>
                </div>

                <div className="pricing-plan__foot">
                  {key === "free" ? (
                    <ButtonLink href={localeHref(locale, "explore")} arrow>
                      {plan.cta}
                    </ButtonLink>
                  ) : (
                    <a
                      className="ui-button ui-button--text pricing-plan__more"
                      href={`#${learnMoreAnchor[key]}`}
                      aria-label={format(plans.learnMore, { plan: plan.name })}
                    >
                      {plan.cta}
                    </a>
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
