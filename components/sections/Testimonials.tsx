"use client";

import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Testimonials"
          title="What People Say"
          subtitle="Feedback from teammates, founders, and clients I've built with."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i % 2} className="h-full">
              <figure className="card card-hover flex h-full flex-col p-6 sm:p-8">
                <div className="mb-5 flex gap-1 text-accent" role="img" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent" aria-hidden />
                  ))}
                </div>
                <blockquote className="flex-1 text-lg leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper-alt font-mono text-sm font-semibold text-ink">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-ink-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
