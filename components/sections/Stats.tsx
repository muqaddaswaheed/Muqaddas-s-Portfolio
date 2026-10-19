"use client";

import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { stats } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Stats() {
  return (
    <section className="relative px-5 pt-20 sm:px-8 md:pt-28">
      <div className="container-max">
        {/* gap-px over a line-coloured background draws hairline dividers at every breakpoint */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-card md:grid-cols-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              // An odd last stat spans both mobile columns so it sits centred.
              className={cn(
                "bg-paper px-4 py-8 text-center md:py-10",
                stats.length % 2 && i === stats.length - 1 && "col-span-2 md:col-span-1"
              )}
            >
              {/* Reveal the content, not the cell, so the divider grid never shows through */}
              <Reveal delay={i}>
                <p className="text-4xl font-semibold tracking-[-0.03em] text-ink md:text-[2.75rem] md:leading-none">
                  <Counter value={s.value} suffix={s.suffix} suffixClassName="text-accent" />
                </p>
                <p className="mt-3 text-sm text-ink-muted">{s.label}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
