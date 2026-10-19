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
            <Reveal key={p.title} delay={i % 3} className="h-full">
              <article className="card card-hover group flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="tag">{p.tag}</span>
                  <span className="flex items-center gap-1 text-xs text-ink-subtle">
                    <Clock className="h-3 w-3" /> {p.read}
                  </span>
                </div>
                <h3 className="mt-4 flex-1 text-lg font-semibold leading-snug tracking-tight text-ink transition-colors duration-200 group-hover:text-accent-text">
                  {p.title}
                </h3>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs text-ink-subtle">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1 font-medium text-accent-text">
                    Read{" "}
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
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
