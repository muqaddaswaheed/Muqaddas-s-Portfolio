import Link from "next/link";
import { ArrowRight, FolderGit2, Mail } from "lucide-react";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Stats from "@/components/sections/Stats";
import CareerSnapshot from "@/components/sections/CareerSnapshot";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <CareerSnapshot />
      <Stats />

      {/* Explore CTA — the rest of the portfolio lives on dedicated pages */}
      <section className="section-pad">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-2xl border border-line bg-paper-alt px-6 py-14 text-center sm:px-10 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            />
            <h2 className="relative text-balance text-3xl font-bold tracking-[-0.025em] text-ink sm:text-4xl">
              Explore my work in depth
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-ink-muted">
              Dive into detailed case studies, my full skill set, experience timeline, and the
              services I offer — each on its own page.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href="/projects" className="btn btn-primary">
                <FolderGit2 className="h-4 w-4" /> View Projects
              </Link>
              <Link href="/about" className="btn btn-secondary group">
                About me{" "}
                <ArrowRight className="h-4 w-4 text-ink-muted transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                <Mail className="h-4 w-4 text-ink-muted" /> Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
