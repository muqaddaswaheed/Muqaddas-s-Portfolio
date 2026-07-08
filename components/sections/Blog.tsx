"use client";

import { ArrowUpRight, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { posts } from "@/data/content";

export default function Blog() {
  return (
    <section className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Writing"
          title="Latest Articles"
          subtitle="Notes on building fast, scalable, real-world web applications."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i % 3}>
              <article className="glass card-hover group flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-emerald/20 bg-emerald/5 px-3 py-1 font-mono text-[11px] text-emerald">
                    {p.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/40">
                    <Clock className="h-3 w-3" /> {p.read}
                  </span>
                </div>
                <h3 className="mt-4 flex-1 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-emerald">
                  {p.title}
                </h3>
                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-white/40">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1 text-emerald">
                    Read <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
