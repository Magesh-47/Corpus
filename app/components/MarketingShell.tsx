import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export function MarketingPageFrame({
  title,
  intro,
  cta,
  children,
}: {
  title: string;
  intro: string;
  cta?: { label: string; href: string };
  children: ReactNode;
}) {
  return (
    <div className="marketing-shell">
      <header className="marketing-header">
        <Link href="/" className="marketing-brand" aria-label="Corpus home">
          <strong>Corpus</strong>
          <sup>✦</sup>
        </Link>
        <nav className="marketing-nav" aria-label="Public navigation">
          <Link href="/explore">Explore</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>
        <div className="marketing-actions">
          <Link href="/auth/signin">Sign in</Link>
          <Link href="/auth/signup" className="marketing-cta-button">Get started</Link>
        </div>
      </header>

      <main className="marketing-main">
        <section className="marketing-hero-panel">
          <div>
            <span className="marketing-kicker">Anatomy, reimagined</span>
            <h1>{title}</h1>
            <p>{intro}</p>
            {cta ? (
              <Link href={cta.href} className="marketing-main-cta">
                {cta.label}
                <ArrowRight size={16} aria-hidden />
              </Link>
            ) : null}
          </div>
          <div className="marketing-hero-art" aria-hidden>
            <Sparkles size={56} />
          </div>
        </section>

        {children}
      </main>

      <footer className="marketing-footer-shell">
        <div className="marketing-footer-grid">
          <div>
            <div className="marketing-footer-brand">Corpus <span>Anatomy Atelier</span></div>
            <ul className="marketing-footer-links">
              <li><Link href="/explore">Explore</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/help">Help</Link></li>
            </ul>
          </div>
          <div>
            <h3>Account</h3>
            <ul className="marketing-footer-links">
              <li><Link href="/auth/signin">Sign in</Link></li>
              <li><Link href="/auth/signup">Get started</Link></li>
            </ul>
          </div>
          <div>
            <h3>Languages</h3>
            <ul className="marketing-footer-links">
              <li>English</li>
              <li>Español</li>
              <li>हिन्दी</li>
              <li>中文</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
