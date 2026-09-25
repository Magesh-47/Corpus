import { Container } from "../../ui/Container";
import { SectionHeader } from "../../ui/SectionHeader";
import type { SiteDictionary } from "../../../i18n/site";

/**
 * A short set of honest answers, all visible at once — four questions do not
 * need an accordion, and nothing should be hidden on a page about money.
 */
export function PricingFaq({ site }: { site: SiteDictionary }) {
  const { faq } = site.pricing;

  return (
    <section className="pricing-faq ui-section" aria-labelledby="pricing-faq-title">
      <Container className="pricing-faq__grid">
        <SectionHeader id="pricing-faq-title" eyebrow={faq.eyebrow} title={faq.title} className="pricing-faq__header" />
        <div className="pricing-faq__list">
          {Object.entries(faq.items).map(([id, item], index) => (
            <div
              key={id}
              id={`pricing-faq-${id}`}
              className="pricing-faq__item"
              data-reveal
              style={{ "--reveal-delay": `${(index % 2) * 100}ms` } as React.CSSProperties}
            >
              <h3 className="pricing-faq__question">{item.q}</h3>
              <p className="pricing-faq__answer ui-body">{item.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
