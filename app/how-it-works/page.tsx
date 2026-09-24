import Link from "next/link";
import { MarketingPageFrame } from "../components/MarketingShell";

const steps = [
  { number: "01", title: "Explore", body: "Begin with the body as a spatial system. Rotate models, isolate structures, and notice how organs and regions sit in relation to one another." },
  { number: "02", title: "Understand", body: "Move from form to function. Connect what you see to its purpose, its system, and the broader story of the body." },
  { number: "03", title: "Interact", body: "Use hotspots, comparison views, and guided moments to investigate anatomy as a living arrangement rather than a static image." },
  { number: "04", title: "Practice", body: "Turn exploration into active recall. Test yourself, revisit details, and train recognition through interaction." },
  { number: "05", title: "Remember", body: "Repeat the cycle until understanding becomes durable. Learning is not one pass through a diagram — it is a habit of seeing and revisiting." },
];

export const metadata = {
  title: "How it works",
  description: "See how Corpus moves learners from exploration to understanding, practice, and memory.",
};

export default function HowItWorksPage() {
  return (
    <MarketingPageFrame
      title="See. Explore. Understand. Remember."
      intro="Learning anatomy is a process, not a single product area. Corpus keeps that process grounded in spatial exploration and active recall."
      cta={{ label: "Explore the body", href: "/explore" }}
    >
      <section className="timeline">
        {steps.map((step) => (
          <article key={step.number} className="timeline-item">
            <span>{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="story-band">
        <div>
          <span className="story-label">Why 3D matters</span>
          <h2>Diagrams flatten the body, but anatomy is spatial.</h2>
        </div>
        <p>
          The human body is organized in depth. The more learners can rotate, inspect, and compare structures, the more naturally they understand the relationship between form, function, and context.
        </p>
      </section>

      <section className="cta-panel">
        <h2>Why Corpus is different</h2>
        <p>It keeps the core learning experience inside the anatomy workspace so exploration, understanding, and practice feel unified rather than fragmented.</p>
        <Link href="/explore" className="marketing-main-cta">Start exploring</Link>
      </section>
    </MarketingPageFrame>
  );
}
