"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="What I Do"
          title="Services"
          subtitle="End-to-end product engineering — from database schema to pixel-perfect, deployed UI."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i % 3}>
              <div className="glass card-hover group relative h-full overflow-hidden rounded-2xl p-6">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald/5 blur-2xl transition-opacity duration-500 group-hover:bg-emerald/15" />
                <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-emerald/10 text-emerald transition-transform duration-500 group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
