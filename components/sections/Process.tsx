"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/data/content";

export default function Process() {
  return (
    <section id="process" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="How I Work"
          title="My Development Process"
          subtitle="A proven, repeatable path from idea to a maintained production product."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i % 4} className="h-full">
              <div className="card card-hover group relative h-full p-6">
                <div className="flex items-start justify-between">
                  <span className="icon-tile">
                    <step.icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="font-mono text-3xl font-semibold leading-none tracking-tight text-line-strong transition-colors duration-300 group-hover:text-accent/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
