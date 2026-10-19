"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          as="h1"
          eyebrow="What I Do"
          title="Services"
          subtitle="End-to-end product engineering — from database schema to pixel-perfect, deployed UI."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i % 3} className="h-full">
              <div className="card card-hover group relative h-full p-6">
                <span className="icon-tile mb-5">
                  <s.icon className="h-[18px] w-[18px]" />
                </span>
                <h2 className="text-base font-semibold text-ink">{s.title}</h2>
                <p className="mt-1.5 text-body text-ink-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
