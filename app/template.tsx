/**
 * App Router template — remounts on every navigation, so the CSS
 * entrance animation replays on each page change (page transition),
 * without a framer-motion boundary that breaks static prerendering.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <main className="animate-fade-up">{children}</main>;
}
