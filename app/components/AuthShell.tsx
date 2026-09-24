import Link from "next/link";
import type { ReactNode } from "react";

export function AuthShell({
  title,
  subtitle,
  children,
  footerText,
  footerLink,
  footerHref,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footerText: string;
  footerLink: string;
  footerHref: string;
}) {
  return (
    <div className="auth-page-shell">
      <div className="auth-card">
        <Link href="/" className="auth-brand" aria-label="Corpus home">
          <strong>Corpus</strong>
          <sup>✦</sup>
        </Link>
        <div className="auth-copy">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        {children}
        <p className="auth-footer-message">
          {footerText}{" "}
          <Link href={footerHref}>{footerLink}</Link>
        </p>
      </div>
    </div>
  );
}
