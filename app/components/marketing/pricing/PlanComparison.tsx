import { Container } from "../../ui/Container";
import { SectionHeader } from "../../ui/SectionHeader";
import { format } from "../../../i18n/types";
import type { SiteDictionary } from "../../../i18n/site";
import type { PricingCounts } from "./PlanLedger";
import { COMPARE_ANCHOR, comparisonMatrix, planOrder, type FeatureKey } from "./plans";

/**
 * A real data table: caption, column and row headers. Every cell states its
 * status in words beside a small marker, so nothing relies on colour or a
 * glyph. On narrow screens each row restacks into a short block, one line per
 * plan; the explicit roles keep the table semantics when display changes.
 */
export function PlanComparison({ site, counts }: { site: SiteDictionary; counts: PricingCounts }) {
  const { comparison, plans } = site.pricing;
  const rows = Object.entries(comparison.rows) as [FeatureKey, (typeof comparison.rows)[FeatureKey]][];

  return (
    <section id={COMPARE_ANCHOR} className="pricing-compare ui-section" aria-labelledby="pricing-compare-title">
      <Container>
        <div className="pricing-compare__intro">
          <SectionHeader
            id="pricing-compare-title"
            eyebrow={comparison.eyebrow}
            title={comparison.title}
            lede={comparison.lede}
          />
        </div>

        <div className="pricing-table-wrap" data-reveal>
          <table className="pricing-table" role="table" aria-labelledby="pricing-compare-caption">
            <caption id="pricing-compare-caption" className="pricing-table__caption">
              {comparison.caption}
            </caption>
            <thead role="rowgroup">
              <tr role="row">
                <th scope="col" role="columnheader" className="pricing-table__corner">
                  {comparison.featureHeading}
                </th>
                {planOrder.map((key) => (
                  <th
                    key={key}
                    scope="col"
                    role="columnheader"
                    className={`pricing-table__plan pricing-table__plan--${key}`}
                  >
                    {plans.items[key].name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody role="rowgroup">
              {rows.map(([feature, row]) => (
                <tr key={feature} role="row">
                  <th scope="row" role="rowheader" className="pricing-table__feature">
                    {row.name}
                  </th>
                  {planOrder.map((key) => {
                    const status = comparisonMatrix[feature][key];
                    return (
                      <td
                        key={key}
                        role="cell"
                        className={`pricing-cell pricing-cell--${status} pricing-cell--plan-${key}`}
                      >
                        <span className="pricing-cell__plan">{plans.items[key].name}</span>
                        <span className="pricing-cell__status">{comparison.status[status]}</span>
                        <span className="pricing-cell__detail">{format(row[key], counts)}</span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
