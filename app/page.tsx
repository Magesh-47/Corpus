import type { Metadata } from "next";
import { SkeletonPreview } from "./_sites-preview/SkeletonPreview";

export const metadata: Metadata = {
  other: { "codex-preview": "development" },
};

export default function HomePage() {
  return <SkeletonPreview />;
}
