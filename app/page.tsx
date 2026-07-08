import Link from "next/link";
import { ArrowRight, FolderGit2, Mail } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Testimonials />

      {/* Explore CTA — the rest of the portfolio lives on dedicated pages */}
      <section className="section-pad">
        <div className="container-max">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
            <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-emerald/10 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-emerald/10 blur-3xl" />
            <h2 className="relative text-3xl font-bold text-gradient sm:text-4xl">
              Explore my work in depth
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-white/55">
              Dive into detailed case studies, my full skill set, experience timeline, and the
              services I offer — each on its own page.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-emerald-soft"
              >
                <FolderGit2 className="h-4 w-4" /> View Projects
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-emerald/40 hover:text-emerald"
              >
                About me <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-emerald/40 hover:text-emerald"
              >
                <Mail className="h-4 w-4" /> Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
