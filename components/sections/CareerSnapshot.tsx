"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, ExternalLink, FileDown, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/data/content";
import { projects, type Project } from "@/data/projects";
import { site } from "@/data/site";

const jobs = experience.filter((j) => j.kind === "work");
const liveProjects = projects
  .filter((p): p is Project & { live: string } => Boolean(p.live))
  .slice(0, 4);

const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");

/** The short version of the CV, for the homepage. */
export default function CareerSnapshot() {
  return (
    <section className="section-pad section-alt relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="At a glance"
          title="Experience & shipped work"
          subtitle="The short version of my CV — where I've worked and what's live in production."
        />

        {/* grid-cols-1 (minmax(0,1fr)) stops the truncated URLs from widening the column on phones */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="card flex h-full flex-col p-6 md:p-8">
              <p className="mb-7 flex items-center gap-3 text-base font-semibold text-ink">
                <span className="icon-tile h-9 w-9">
                  <Briefcase className="h-4 w-4" />
                </span>
                Experience
              </p>
              {/* Not flex-1: the rail should end at the last role, not stretch with the card */}
              <ol className="relative space-y-6 border-l border-line pl-6">
                {jobs.map((j, i) => (
                  <li key={j.company} className="relative">
                    {/* Timeline marker — teal for the current role */}
                    <span
                      aria-hidden
                      className={
                        i === 0
                          ? "absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent-light"
                          : "absolute -left-[28px] top-1.5 h-2 w-2 rounded-full border border-line-strong bg-paper"
                      }
                    />
                    <p className="font-mono text-xs text-ink-subtle">{j.duration}</p>
                    <p className="mt-1 font-semibold text-ink">{j.role}</p>
                    <p className="text-sm text-ink-muted">{j.company}</p>
                  </li>
                ))}
              </ol>
              <Link href="/experience" className="link-accent group mt-auto self-start pt-8 text-sm">
                Full timeline{" "}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={1} className="h-full">
            <div className="card flex h-full flex-col p-6 md:p-8">
              <p className="mb-7 flex items-center gap-3 text-base font-semibold text-ink">
                <span className="icon-tile h-9 w-9">
                  <Rocket className="h-4 w-4" />
                </span>
                Live in production
              </p>
              <ul className="flex-1 space-y-2.5">
                {liveProjects.map((p) => (
                  <li key={p.slug}>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-paper px-4 py-3.5 transition-[border-color,background-color] duration-200 hover:border-accent/40 hover:bg-paper-alt"
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-ink">{p.title}</p>
                        <p className="truncate text-sm text-ink-muted">
                          {p.tagline} ·{" "}
                          <span className="font-mono text-xs text-accent-text">{host(p.live)}</span>
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-ink-subtle transition-[color,transform] duration-200 group-hover:text-accent motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
              <Link href="/projects" className="link-accent group mt-8 self-start text-sm">
                All projects & case studies{" "}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <a href={site.resume} download={site.resumeFileName} className="btn btn-secondary">
              <FileDown className="h-4 w-4 text-ink-muted" /> Download full CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
