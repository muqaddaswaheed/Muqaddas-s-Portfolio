"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          as="h1"
          eyebrow="Tech Stack"
          title="Skills & Technologies"
          subtitle="A full-stack toolkit grouped by domain, with real experience levels behind every tool."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi % 3} className="h-full">
              <div className="card card-hover group h-full p-6">
                <div className="mb-6 flex items-center gap-3 border-b border-line pb-5">
                  <span className="icon-tile">
                    <group.icon className="h-[18px] w-[18px]" />
                  </span>
                  <h2 className="text-lg font-semibold tracking-tight text-ink">{group.title}</h2>
                </div>

                <div className="space-y-4">
                  {group.skills.map((s) => (
                    <div key={s.name}>
                      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                        <span className="font-medium text-ink">{s.name}</span>
                        <span className="font-mono text-xs text-ink-subtle">{s.tag}</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-paper-hover">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                          className="h-full rounded-full bg-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
