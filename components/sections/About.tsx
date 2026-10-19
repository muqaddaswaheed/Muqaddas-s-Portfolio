"use client";

import Image from "next/image";
import { Quote, CheckCircle2, Github, Linkedin, Mail, MapPin, FileDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { highlights, heroStats } from "@/data/content";
import { site } from "@/data/site";
import { linkTarget } from "@/lib/utils";

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
          as="h1"
          eyebrow="About Me"
          title="Engineering products people love to use"
          subtitle="A dedicated MERN & Next.js developer focused on scalable architecture, clean code, and premium user experiences."
        />

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Profile card — small avatar */}
          <Reveal>
            <div className="card p-6 text-center lg:sticky lg:top-28">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-2xl border border-line bg-paper-alt">
                {/* One portrait per theme; CSS shows the matching one. */}
                <Image
                  src="/portrait-light.svg"
                  alt="Muqaddas Waheed"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover dark:hidden"
                />
                <Image
                  src="/portrait.svg"
                  alt="Muqaddas Waheed"
                  width={128}
                  height={128}
                  className="hidden h-full w-full object-cover dark:block"
                />
              </div>
              <h2 className="mt-5 text-xl font-bold tracking-tight text-ink">Muqaddas Waheed</h2>
              <span className="mt-2 inline-block rounded-full border border-accent/20 bg-accent-light/50 px-3 py-1 text-xs font-medium text-accent-text">
                {site.role}
              </span>

              <div className="mt-5 flex flex-col items-center gap-2 text-sm text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-ink-subtle" /> {site.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Available for work
                </span>
              </div>

              <div className="mt-6 flex justify-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    {...linkTarget(s.href)}
                    aria-label={s.label}
                    className="btn-icon h-10 w-10"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              <a
                href={site.resume}
                download={site.resumeFileName}
                className="btn btn-primary mt-6 w-full"
              >
                <FileDown className="h-4 w-4" /> Download CV
              </a>
            </div>
          </Reveal>

          {/* Right column: intro + philosophy */}
          <div className="space-y-6">
            <Reveal>
              <div className="card p-6 sm:p-8">
                <p className="text-[1.0625rem] leading-relaxed text-ink-muted sm:text-lg">
                  I&apos;m <span className="font-semibold text-ink">Muqaddas Waheed</span>, a MERN
                  Stack Developer from Rawalpindi, Pakistan. I build scalable, secure, and responsive
                  web applications with{" "}
                  <span className="font-medium text-ink">
                    React.js, Next.js, Node.js, Express.js and MongoDB
                  </span>{" "}
                  — RESTful APIs, JWT authentication, role-based access control, and state
                  management with Redux Toolkit.
                </p>
                <p className="mt-4 leading-relaxed text-ink-muted">
                  Currently a Senior MERN Stack Developer at{" "}
                  <span className="font-medium text-ink">Deventia Tech</span>. Before that I built
                  backend services and REST APIs as a Node.js Developer at{" "}
                  <span className="font-medium text-ink">BXTrack Solutions</span>, and started at{" "}
                  <span className="font-medium text-ink">HHTechHub</span> as a Frontend Intern,
                  promoted to Frontend Developer. I focus on clean architecture, optimized
                  performance, and seamless client-server integration.
                </p>

                <div className="mt-8 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3 text-body text-ink-muted">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="card relative overflow-hidden bg-paper-alt p-6 sm:p-8">
                <span aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-accent" />
                <Quote className="h-7 w-7 text-accent" />
                <p className="mt-4 text-lg font-medium leading-relaxed text-ink sm:text-xl">
                  &ldquo;Great software is invisible — it just works, feels fast, and gets out of the
                  user&apos;s way.&rdquo;
                </p>
                <div className="mt-6 border-t border-line pt-6">
                  <p className="text-sm font-semibold text-ink">My philosophy</p>
                  <p className="mt-1 text-sm text-ink-muted">
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
              <div className="card card-hover p-6 text-center">
                <p className="text-4xl font-semibold tracking-[-0.03em] text-ink">
                  <Counter value={s.value} suffix={s.suffix} suffixClassName="text-accent" />
                </p>
                <p className="mt-2 text-sm text-ink-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
