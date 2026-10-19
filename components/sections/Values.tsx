"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { values } from "@/data/content";

export default function Values() {
  return (
    <section id="values" className="section-pad section-alt relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="What I Bring"
          subtitle="The principles behind every product I ship."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i % 4} className="h-full">
              <div className="card card-hover group flex h-full flex-col p-6">
                <span className="icon-tile mb-5">
                  <v.icon className="h-[18px] w-[18px]" />
                </span>
                <h3 className="text-base font-semibold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
