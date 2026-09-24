/** Remounts on every navigation, so each page arrives with a quiet fade (stilled under reduced motion). */
export default function MarketingTemplate({ children }: { children: React.ReactNode }) {
  return <div className="site-page">{children}</div>;
}
