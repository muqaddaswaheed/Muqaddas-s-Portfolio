"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";
import Aurora from "@/components/ui/Aurora";
import MagneticButton from "@/components/ui/MagneticButton";
import Counter from "@/components/ui/Counter";
import { site } from "@/data/site";
import { experience } from "@/data/content";
import { linkTarget } from "@/lib/utils";

const currentJob = experience[0];

const socials = [
  { icon: Github, href: site.socials.github, label: "GitHub" },
  { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: site.socials.email, label: "Email" },
];

// A real scheduler when site.booking is set, a pre-filled call request otherwise —
// so the button always does what its label promises.
const bookingFallback = `mailto:${site.email}?subject=${encodeURIComponent(
  "Booking a call"
)}&body=${encodeURIComponent(
  "Hi Muqaddas,\n\nI'd like to book a call about a project.\n\nWhat I'm building:\nTimeline:\nTimes that work for me:\n"
)}`;
const bookingHref = site.booking || bookingFallback;

// Headline lines; the second one carries the teal accent.
const headline = [
  { words: ["Full", "Stack"], className: "text-ink" },
  { words: ["MERN", "Developer"], className: "text-accent" },
];

// Entrance timing — starts as the short loading screen fades out.
const BASE = 0.45;
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const rise = (step: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: BASE + step * 0.08, duration: 0.55, ease },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:min-h-screen lg:pb-24"
    >
      <Aurora />
      <div className="container-max grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Left */}
        <div>
          <motion.div {...rise(0)} className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new projects
          </motion.div>

          <motion.p
            {...rise(1)}
            className="mt-7 font-mono text-[13px] font-medium uppercase tracking-[0.16em] text-accent-text"
          >
            {site.name}
          </motion.p>

          <h1 className="mt-3 text-[2.6rem] font-bold leading-[1.04] tracking-[-0.035em] min-[400px]:text-5xl sm:text-6xl lg:text-[4.25rem]">
            {headline.map((line, li) => (
              <span key={li} className="block">
                {line.words.map((w, wi) => (
                  <Fragment key={w}>
                    {/* A real space (not margin) so a wrapped word starts flush left. */}
                    {wi > 0 && " "}
                    <motion.span
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: BASE + 0.12 + (li * 2 + wi) * 0.07,
                        duration: 0.6,
                        ease,
                      }}
                      className={`inline-block pb-1 ${line.className}`}
                    >
                      {w}
                    </motion.span>
                  </Fragment>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            {...rise(5)}
            className="mt-6 max-w-xl text-pretty text-[1.0625rem] leading-relaxed text-ink-muted sm:text-lg"
          >
            {site.pitch}
          </motion.p>

          <motion.div {...rise(6)} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton href="/contact" variant="primary">
              Hire Me{" "}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </MagneticButton>
            <MagneticButton href={bookingHref} variant="outline">
              <CalendarDays className="h-4 w-4 text-ink-muted" /> Book a Call
            </MagneticButton>
            <MagneticButton href={site.resume} download={site.resumeFileName} variant="outline">
              <FileDown className="h-4 w-4 text-ink-muted" /> Download CV
            </MagneticButton>
          </motion.div>

          <motion.div
            {...rise(7)}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-ink-subtle" /> {site.location}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-line-strong sm:block" aria-hidden />
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-ink-subtle" /> {currentJob.role} @ {currentJob.company}
            </span>
          </motion.div>

          <motion.div {...rise(8)} className="mt-6 flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...linkTarget(s.href)}
                aria-label={s.label}
                className="btn-icon"
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — portrait + stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: BASE + 0.2, duration: 0.7, ease }}
          className="relative mx-auto hidden w-full max-w-[340px] lg:block"
        >
          <div className="relative aspect-square w-full">
            <div className="card relative h-full w-full p-2 shadow-pop">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-paper-alt">
                {/* One portrait per theme; CSS shows the matching one. */}
                <Image
                  src="/portrait-light.svg"
                  alt="Muqaddas Waheed"
                  fill
                  priority
                  sizes="340px"
                  className="object-cover dark:hidden"
                />
                <Image
                  src="/portrait.svg"
                  alt="Muqaddas Waheed"
                  fill
                  sizes="340px"
                  className="hidden object-cover dark:block"
                />
              </div>
            </div>

            <div className="card absolute -left-10 top-12 px-4 py-3 shadow-pop">
              <p className="text-2xl font-semibold tracking-tight text-ink">
                <Counter value={6} suffix="+" suffixClassName="text-accent" />
              </p>
              <p className="text-xs text-ink-muted">Production apps</p>
            </div>

            <div className="card absolute -right-8 bottom-14 px-4 py-3 shadow-pop">
              <p className="text-2xl font-semibold tracking-tight text-ink">
                <Counter value={30} suffix="+" suffixClassName="text-accent" />
              </p>
              <p className="text-xs text-ink-muted">Technologies</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — jumps to the tech stack just below */}
      <motion.a
        href="#stack"
        aria-label="Scroll to technologies"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: BASE + 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 rounded-md text-ink-subtle transition-colors duration-200 hover:text-accent-text lg:flex"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.18em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-line-strong pt-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-accent"
          />
        </span>
      </motion.a>
    </section>
  );
}
