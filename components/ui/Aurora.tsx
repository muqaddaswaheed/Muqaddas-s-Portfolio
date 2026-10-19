/** Soft, static teal glow behind the hero portrait, layered over SiteBackground. */
export default function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -right-40 top-1/2 hidden h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/calc(var(--glow)*1.3)),transparent)] lg:block" />
    </div>
  );
}
