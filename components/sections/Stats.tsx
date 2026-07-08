"use client";

import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <section className="relative px-5 py-16 sm:px-8">
      <div className="container-max">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-emerald/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-emerald/10 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i}>
                <div className="text-center">
                  <p className="font-mono text-4xl font-bold text-emerald-gradient md:text-5xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-xs text-white/50 md:text-sm">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
