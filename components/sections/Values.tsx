"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { values } from "@/data/content";

export default function Values() {
  return (
    <section id="values" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="What I Bring"
          subtitle="The principles behind every product I ship."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i % 4}>
              <div className="glass card-hover group flex h-full flex-col items-center rounded-2xl p-6 text-center">
                <span className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-emerald/10 text-emerald transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-white">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
