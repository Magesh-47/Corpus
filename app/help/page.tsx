import Link from "next/link";
import { MarketingPageFrame } from "../components/MarketingShell";

const faqs = [
  { question: "What is Corpus?", answer: "Corpus is an interactive anatomy learning experience built around spatial exploration, visual understanding, and future-guided study." },
  { question: "How do I explore an organ?", answer: "Open the Explore experience, choose an organ from the library, and rotate the model to inspect hotspots and related structures." },
  { question: "Can I rotate the 3D models?", answer: "Yes. The existing viewer supports drag-to-rotate and scroll-to-zoom interaction with the current anatomy model." },
  { question: "Which languages are supported?", answer: "Corpus is designed from the start to support multilingual access, including English, Spanish, Hindi, Chinese, Arabic, Portuguese, French, German, Japanese, Russian, Indonesian, and Korean." },
  { question: "Is Corpus free?", answer: "The current product shell presents a free entry point and future paid paths conceptually, but no billing or subscription flow is active in Stage 1." },
  { question: "Can I use Corpus on mobile?", answer: "The product shell is responsive and designed to keep key anatomy interactions usable across mobile, tablet, and desktop sizes." },
  { question: "Is Corpus medical advice?", answer: "No. Corpus provides educational anatomy content and should not be treated as medical advice or diagnosis." },
  { question: "How accurate are the anatomy models?", answer: "The experience is grounded in a structured anatomy model and educational presentation, but it is not a substitute for formal medical training or clinical expertise." },
];

export const metadata = {
  title: "Help",
  description: "Find answers about exploring anatomy, language support, account flows, and educational boundaries in Corpus.",
};

export default function HelpPage() {
  return (
    <MarketingPageFrame
      title="Help for curious explorers."
      intro="Find the basics, understand how to move through the 3D atlas, and keep the anatomy experience clear and not overpromised."
      cta={{ label: "Explore the body", href: "/explore" }}
    >
      <section className="help-grid">
        <div className="help-card">
          <h3>Getting started</h3>
          <ul>
            <li>Open the Explore experience.</li>
            <li>Choose an organ from the library.</li>
            <li>Rotate, zoom, and inspect hotspots.</li>
          </ul>
        </div>
        <div className="help-card">
          <h3>Using the 3D viewer</h3>
          <ul>
            <li>Drag to rotate the specimen.</li>
            <li>Use scroll to zoom.</li>
            <li>Click anatomical hotspots to read more.</li>
          </ul>
        </div>
        <div className="help-card">
          <h3>Languages & accounts</h3>
          <ul>
            <li>Switch languages in the viewer or web shell.</li>
            <li>Use the account pages for sign-in and sign-up UI.</li>
            <li>Current auth is UI-first and backend-ready.</li>
          </ul>
        </div>
      </section>

      <section className="faq-section">
        {faqs.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>

      <section className="cta-panel narrow">
        <h2>Need a more direct answer?</h2>
        <p>Use the sign-in and sign-up flows for account-related UX. Keep the product grounded in education, not diagnosis or treatment claims.</p>
        <Link href="/auth/signin" className="marketing-main-cta">Open account</Link>
      </section>
    </MarketingPageFrame>
  );
}
