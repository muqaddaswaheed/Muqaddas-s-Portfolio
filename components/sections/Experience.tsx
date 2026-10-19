"use client";

import { Award, Briefcase, FileDown, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experience, type Job } from "@/data/content";
import { site } from "@/data/site";

const kindIcon: Record<Job["kind"], typeof Briefcase> = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
};

function KindIcon({ kind }: { kind: Job["kind"] }) {
  const Icon = kindIcon[kind];
  return <Icon className="h-3.5 w-3.5 text-accent" />;
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          as="h1"
          eyebrow="Career"
          title="Experience & Education"
          subtitle="From Frontend Intern to Senior MERN Stack Developer — every role, degree, and certification on my CV."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Line */}
          {/* Line — a single left rail up to tablet, centred and alternating from lg */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent/50 via-line to-transparent lg:left-1/2" />

          <div className="space-y-8 lg:space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={Math.min(i, 2)}>
                <div
                  className={`relative flex flex-col gap-4 lg:flex-row lg:items-center ${
                    i % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-6 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-line bg-paper shadow-card lg:left-1/2">
                    <KindIcon kind={job.kind} />
                  </div>

                  <div className="lg:w-1/2" />
                  <div className="ml-10 sm:ml-12 lg:ml-0 lg:w-1/2 lg:px-8">
                    <div className="card p-6 transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-card-hover">
                      <span className="font-mono text-xs font-medium text-accent-text">
                        {job.duration}
                      </span>
                      <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                        {job.role}
                      </h2>
                      <p className="mt-0.5 text-sm text-ink-muted">
                        {job.company} · {job.location}
                      </p>
                      <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                        {job.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-body text-ink-muted">
                            <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-ink-subtle" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {job.tech.map((t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-14 flex justify-center">
            <a href={site.resume} download={site.resumeFileName} className="btn btn-primary">
              <FileDown className="h-4 w-4" /> Download full CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
