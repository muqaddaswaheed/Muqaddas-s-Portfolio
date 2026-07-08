"use client";

import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-emerald">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/50">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
