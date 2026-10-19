import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  // A <section>, not <main>: app/template.tsx already wraps every page in <main>.
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <p className="font-mono text-[7rem] font-bold leading-none tracking-tighter text-ink sm:text-[11rem]">
        4<span className="text-accent">0</span>4
      </p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Page not found</h1>
      <p className="mt-3 max-w-md leading-relaxed text-ink-muted">
        The page you&apos;re looking for drifted off into the void. Let&apos;s get you back home.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          <Home className="h-4 w-4" /> Back home
        </Link>
        <Link href="/projects" className="btn btn-secondary">
          <ArrowLeft className="h-4 w-4 text-ink-muted" /> View projects
        </Link>
      </div>
    </section>
  );
}
