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
          eyebrow="Tech Stack"
          title="Skills & Technologies"
          subtitle="A full-stack toolkit grouped by domain, with real experience levels behind every tool."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi}>
              <div className="glass card-hover group h-full rounded-3xl p-6">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald/10 text-emerald transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <group.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>

                <div className="space-y-4">
                  {group.skills.map((s) => (
                    <div key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-white/80">{s.name}</span>
                        <span className="font-mono text-xs text-emerald">{s.tag}</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-soft to-emerald"
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
