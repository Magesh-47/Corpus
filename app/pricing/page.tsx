import Link from "next/link";
import { MarketingPageFrame } from "../components/MarketingShell";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Explore core anatomy and discover how the body is organized.",
    features: ["Core organ exploration", "Hotspot-based discovery", "Basic cross-sections"],
    badge: "Always available",
  },
  {
    name: "Corpus Plus",
    price: "Coming soon",
    description: "A deeper learning layer for more detailed anatomy study and future guided tools.",
    features: ["Expanded study paths", "Advanced comparisons", "Progressive practice loops"],
    badge: "Planned",
  },
  {
    name: "Education",
    price: "Coming soon",
    description: "Built to support classrooms, educators, and guided teaching experiences.",
    features: ["Classroom workflows", "Shared learning moments", "Instructor-friendly study tools"],
    badge: "Future release",
  },
];

export const metadata = {
  title: "Pricing",
  description: "Explore the public Corpus pricing philosophy. Current pricing is presentation-only while future learning tools are still in development.",
};

export default function PricingPage() {
  return (
    <MarketingPageFrame
      title="Anatomy access, without pretending a billing flow exists."
      intro="Stage 1 is a presentation page only. The current product is focused on the exploration experience, not on subscriptions or checkout."
      cta={{ label: "Get started", href: "/auth/signup" }}
    >
      <section className="pricing-grid">
        {plans.map((plan) => (
          <article key={plan.name} className="price-card">
            <span className="plan-badge">{plan.badge}</span>
            <h3>{plan.name}</h3>
            <div className="plan-price">{plan.price}</div>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <Link href="/auth/signup" className="pricing-button">Get started</Link>
          </article>
        ))}
      </section>

      <section className="story-band">
        <div>
          <span className="story-label">Pricing philosophy</span>
          <h2>Designed to grow with the learner.</h2>
        </div>
        <p>
          Corpus remains focused on the learning experience first. Future layers for guided AI, deeper progress, and educator tooling will be layered onto this foundation as they are built.
        </p>
      </section>
    </MarketingPageFrame>
  );
}
