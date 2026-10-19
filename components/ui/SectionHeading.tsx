"use client";

import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Use "h1" when this heading is the main title of its page. */
  as?: "h1" | "h2";
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <Reveal>
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <Heading className="mt-5 text-balance text-[2rem] font-bold leading-[1.15] tracking-[-0.025em] text-ink sm:text-4xl lg:text-[2.75rem]">
          {title}
        </Heading>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-ink-muted sm:text-[1.0625rem]">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
