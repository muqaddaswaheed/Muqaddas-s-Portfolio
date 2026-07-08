"use client";

import Image from "next/image";
import Link from "next/link";
import { Quote, CheckCircle2, Github, Linkedin, Mail, MapPin, FileDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { highlights, heroStats } from "@/data/content";
import { site } from "@/data/site";

const socials = [
  { icon: Github, href: site.socials.github, label: "GitHub" },
  { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: site.socials.email, label: "Email" },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering products people love to use"
          subtitle="A dedicated MERN & Next.js developer focused on scalable architecture, clean code, and premium user experiences."
        />

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Profile card — small avatar */}
          <Reveal>
            <div className="glass card-hover rounded-3xl p-6 text-center lg:sticky lg:top-28">
              <div className="mx-auto h-36 w-36 overflow-hidden rounded-2xl border border-white/10 emerald-glow">
                <Image
                  src="/portrait.svg"
                  alt="Muqaddas Waheed"
                  width={144}
                  height={144}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">Muqaddas Waheed</h3>
              <span className="mt-2 inline-block rounded-full border border-emerald/20 bg-emerald/5 px-3 py-1 text-xs text-emerald">
                Full Stack MERN Developer
              </span>

              <div className="mt-4 flex flex-col items-center gap-1.5 text-sm text-white/50">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-emerald" /> {site.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
                  </span>
                  Available for work
                </span>
              </div>

              <div className="mt-5 flex justify-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 transition-all hover:-translate-y-0.5 hover:border-emerald/40 hover:text-emerald"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              <Link
                href={site.resume}
                target="_blank"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-emerald-soft"
              >
                <FileDown className="h-4 w-4" /> Download CV
              </Link>
            </div>
          </Reveal>

          {/* Right column: intro + philosophy */}
          <div className="space-y-6">
            <Reveal>
              <div className="glass card-hover rounded-3xl p-8">
                <p className="text-lg leading-relaxed text-white/70">
                  I&apos;m <span className="text-emerald">Muqaddas Waheed</span>, a Full Stack MERN
                  developer from Pakistan. I build scalable, secure web applications with{" "}
                  <span className="text-white">React, Next.js, Node, Express and MongoDB</span> —
                  from RESTful APIs and JWT auth to real-time systems and production deployments.
                </p>
                <p className="mt-4 leading-relaxed text-white/55">
                  Currently a MERN Stack Developer at{" "}
                  <span className="text-white">Deventia Tech</span>, previously promoted to Junior
                  Developer at <span className="text-white">BXTrack Solutions</span> for driving
                  production pipelines. I care deeply about clean, maintainable code and interfaces
                  that feel effortless.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3 text-sm text-white/60">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="glass card-hover rounded-3xl bg-gradient-to-br from-emerald/10 to-transparent p-8">
                <Quote className="h-8 w-8 text-emerald" />
                <p className="mt-4 text-lg font-medium leading-relaxed text-white/80">
                  &ldquo;Great software is invisible — it just works, feels fast, and gets out of the
                  user&apos;s way.&rdquo;
                </p>
                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="text-sm font-semibold text-white">My philosophy</p>
                  <p className="mt-1 text-sm text-white/50">
                    Ship fast, stay maintainable, obsess over the details.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <Reveal key={s.label} delay={i}>
              <div className="glass card-hover rounded-2xl p-6 text-center">
                <p className="font-mono text-4xl font-bold text-emerald-gradient">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-white/50">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
