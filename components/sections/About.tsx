"use client";

import { motion } from "framer-motion";
import { Quote, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { highlights, heroStats } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering products people love to use"
          subtitle="A dedicated MERN & Next.js developer focused on scalable architecture, clean code, and premium user experiences."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Intro card */}
          <Reveal className="lg:col-span-2">
            <div className="glass card-hover h-full rounded-3xl p-8">
              <p className="text-lg leading-relaxed text-white/70">
                I&apos;m <span className="text-emerald">Muqaddas Waheed</span>, a Full Stack MERN
                developer from Pakistan. I build scalable, secure web applications with{" "}
                <span className="text-white">React, Next.js, Node, Express and MongoDB</span> —
                from RESTful APIs and JWT auth to real-time systems and production deployments.
              </p>
              <p className="mt-4 leading-relaxed text-white/55">
                Currently a MERN Stack Developer at <span className="text-white">Deventia Tech</span>,
                previously promoted to Junior Developer at{" "}
                <span className="text-white">BXTrack Solutions</span> for driving production
                pipelines. I care deeply about clean, maintainable code and interfaces that feel
                effortless.
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

          {/* Philosophy card */}
          <Reveal delay={1}>
            <div className="glass card-hover flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-emerald/10 to-transparent p-8">
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
