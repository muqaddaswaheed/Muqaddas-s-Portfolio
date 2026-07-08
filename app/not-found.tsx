import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/10 blur-[130px]" />
        <div className="absolute inset-0 bg-grid-faint [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <p className="font-mono text-[8rem] font-bold leading-none text-emerald-gradient sm:text-[12rem]">
        404
      </p>
      <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Page not found</h1>
      <p className="mt-3 max-w-md text-white/50">
        The page you&apos;re looking for drifted off into the void. Let&apos;s get you back home.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-emerald-soft"
        >
          <Home className="h-4 w-4" /> Back home
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-emerald/40 hover:text-emerald"
        >
          <ArrowLeft className="h-4 w-4" /> View projects
        </Link>
      </div>
    </main>
  );
}
