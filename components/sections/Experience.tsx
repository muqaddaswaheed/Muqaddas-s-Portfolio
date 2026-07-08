"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Career"
          title="Experience & Education"
          subtitle="A track record of shipping, growing, and getting promoted."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-emerald/60 via-white/10 to-transparent md:left-1/2" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i}>
                <div
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-6 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-emerald/30 bg-ink-900 md:left-1/2">
                    <Briefcase className="h-3.5 w-3.5 text-emerald" />
                  </div>

                  <div className="md:w-1/2" />
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                    <div className="glass card-hover rounded-2xl p-6">
                      <span className="font-mono text-xs text-emerald">{job.duration}</span>
                      <h3 className="mt-1 text-lg font-semibold text-white">{job.role}</h3>
                      <p className="text-sm text-white/50">
                        {job.company} · {job.location}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {job.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-sm text-white/55">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald/70" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-white/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
