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
            <Reveal key={t.name} delay={i % 2}>
              <figure className="glass card-hover h-full rounded-3xl p-8">
                <div className="mb-4 flex gap-1 text-emerald">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-emerald" />
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed text-white/75">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald/15 font-mono text-sm font-bold text-emerald">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-white/45">{t.role}</p>
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
