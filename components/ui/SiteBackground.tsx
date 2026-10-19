/**
 * Quiet, static backdrop at the top of every page: a hairline grid that fades
 * out radially, plus a very faint teal wash. It scrolls away with the page
 * (absolute, not fixed) and sits beneath all content.
 */
export default function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-faint [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_65%_at_50%_0%,black_20%,transparent_100%)]" />
      <div className="absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/var(--glow)),transparent)]" />
    </div>
  );
}
