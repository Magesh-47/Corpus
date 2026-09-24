import Link from "next/link";
import { MarketingPageFrame } from "../components/MarketingShell";

const pillars = [
  { title: "Why Corpus exists", body: "Corpus was built for the gap between flat diagrams and real anatomical understanding. It treats anatomy as a spatial, visual, and active form of knowledge." },
  { title: "The problem with flat anatomy", body: "Traditional study tools flatten a complex, three-dimensional system into labels and silhouettes. Corpus keeps structure in motion so learners can see relationships." },
  { title: "Anatomy as visual knowledge", body: "The body is not only text to be memorized. It is an arrangement of form, function, and context that becomes clearer when seen in space." },
  { title: "Scientific accuracy", body: "The experience is grounded in medically structured anatomical data and presentation without pretending to replace clinical judgment or diagnosis." },
  { title: "3D exploration", body: "Explore organ systems in context, compare structures, and trace how form supports function through interaction." },
  { title: "Active learning", body: "Learning becomes something you do: inspect, compare, question, and revisit detail until understanding becomes durable." },
];

export const metadata = {
  title: "About Corpus",
  description: "Learn why Corpus was built to make anatomy more visual, active, and accessible.",
};

export default function AboutPage() {
  return (
    <MarketingPageFrame
      title="Science, visualization, education, and art."
      intro="Corpus sits at the intersection of anatomical rigor and visual study, helping learners understand the body as a living structure rather than a static diagram."
      cta={{ label: "Explore the body", href: "/explore" }}
    >
      <section className="info-grid">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="info-card">
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
          </article>
        ))}
      </section>

      <section className="story-band">
        <div>
          <span className="story-label">The Anatomy Atelier philosophy</span>
          <h2>Learn to see the body with intention.</h2>
        </div>
        <p>
          Corpus is designed for learners who want more than memorization. It supports curiosity, observation, and recall through 3D structure, contextual relationships, and future-guided learning experiences.
        </p>
      </section>

      <section className="cta-panel">
        <h2>Future vision</h2>
        <p>AI, progress, and personalized guidance will later sit as an overlay on this same exploration-first foundation — not as a separate product layer.</p>
        <Link href="/explore" className="marketing-main-cta">Start exploring</Link>
      </section>
    </MarketingPageFrame>
  );
}
