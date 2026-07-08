"use client";

import { motion } from "framer-motion";
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
            <Reveal key={step.title} delay={i % 4}>
              <div className="glass card-hover group relative h-full rounded-2xl p-6">
                <span className="font-mono text-5xl font-bold text-white/5 transition-colors group-hover:text-emerald/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 inline-grid h-10 w-10 place-items-center rounded-xl bg-emerald/10 text-emerald">
                  <step.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
