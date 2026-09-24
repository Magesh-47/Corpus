import type { Metadata, Viewport } from "next";
import { fontClassName } from "./i18n/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://anatomy-atelier.openai.site"),
  title: "Corpus — Learn Anatomy Like an Artist",
  description:
    "Explore human anatomy through detailed 3D models, visual learning, and interactive exploration with Corpus.",
};

export const viewport: Viewport = { themeColor: "#f7f0e7" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={fontClassName("latin")}>{children}</body>
    </html>
  );
}
