"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  FileText,
  X,
  Layers,
  Lightbulb,
  Wrench,
  Cpu,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const GITHUB = "https://github.com/muqaddaswaheed";

function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-2.5 py-1 text-[11px] font-medium text-emerald backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
      {status}
    </span>
  );
}

function ProjectCard({ p, onOpen }: { p: Project; onOpen: () => void }) {
  const media = (
    <>
      {p.image ? (
        <img
          src={p.image}
          alt={`${p.title} — ${p.tagline}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover/img:scale-[1.04]"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-grid-faint [background-size:26px_26px] opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-4xl font-bold text-white/15 transition-transform duration-700 group-hover/img:scale-110">
              {p.title}
            </span>
          </div>
        </>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
      <div className="absolute right-4 top-4">
        <StatusBadge status={p.status} />
      </div>
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-ink-950/70 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover/img:opacity-100">
        {p.live ? (
          <>
            <ExternalLink className="h-3.5 w-3.5 text-emerald" /> Visit live site
          </>
        ) : (
          <>
            <FileText className="h-3.5 w-3.5 text-emerald" /> View case study
          </>
        )}
      </span>
    </>
  );

  const mediaClasses = cn(
    "group/img relative mb-6 block aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br text-left",
    p.gradient
  );

  return (
    <div
      className={cn(
        "glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:border-emerald/30",
        p.featured && "lg:col-span-2"
      )}
    >
      {/* Image → live site (or case study if no live site) */}
      {p.live ? (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live site of ${p.title}`}
          className={mediaClasses}
        >
          {media}
        </a>
      ) : (
        <button
          type="button"
          onClick={onOpen}
          aria-label={`View case study of ${p.title}`}
          className={mediaClasses}
        >
          {media}
        </button>
      )}

      <div className="flex flex-1 flex-col">
        <div>
          <h3 className="text-xl font-semibold text-white">{p.title}</h3>
          <p className="mt-0.5 text-sm text-emerald/80">{p.tagline}</p>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-white/55">{p.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-white/60"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/5 pt-5">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald px-4 py-2 text-xs font-semibold text-ink-950 transition-colors hover:bg-emerald-soft"
          >
            <FileText className="h-3.5 w-3.5" /> Case Study
          </button>
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:border-emerald/40 hover:text-emerald"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live
            </a>
          )}
          <a
            href={p.github ?? GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:border-emerald/40 hover:text-emerald"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          <button
            onClick={onOpen}
            aria-label="Open case study"
            className="ml-auto grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 transition-all group-hover:border-emerald/40 group-hover:text-emerald"
          >
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function CaseStudyModal({ p, onClose }: { p: Project; onClose: () => void }) {
  // Lock background scroll while the modal is open.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const blocks = [
    { icon: Cpu, title: "Architecture", body: p.architecture },
    { icon: Lightbulb, title: "Challenges", body: p.challenges },
    { icon: Wrench, title: "Solutions", body: p.solutions },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[10001] flex items-end justify-center bg-ink-950/80 p-0 backdrop-blur-md sm:items-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 280, damping: 30 }}
        className="glass-strong relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 sm:rounded-3xl"
      >
        {/* Header image */}
        <div className={cn("relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br", p.gradient)}>
          {p.image && (
            <img
              src={p.image}
              alt={`${p.title} — ${p.tagline}`}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-ink-950/70 text-white/80 backdrop-blur-md transition-colors hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="absolute bottom-4 left-5 right-5">
            <StatusBadge status={p.status} />
            <h3 className="mt-2 text-2xl font-bold text-white">{p.title}</h3>
            <p className="text-sm text-emerald/90">{p.tagline}</p>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="leading-relaxed text-white/65">{p.description}</p>

          {/* Tech stack */}
          <div className="mt-6">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-white/40">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-emerald/20 bg-emerald/5 px-2.5 py-1 font-mono text-[11px] text-emerald"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Key features */}
          <div className="mt-6">
            <p className="mb-2.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/40">
              <Layers className="h-3.5 w-3.5 text-emerald" /> Key Features
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {p.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-white/60">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Case-study blocks */}
          <div className="mt-6 space-y-3">
            {blocks.map((b) => (
              <div key={b.title} className="glass rounded-2xl p-4">
                <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-white">
                  <b.icon className="h-4 w-4 text-emerald" /> {b.title}
                </p>
                <p className="text-sm leading-relaxed text-white/55">{b.body}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-emerald-soft"
              >
                <ExternalLink className="h-4 w-4" /> Visit Live Site
              </a>
            )}
            <a
              href={p.github ?? GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:border-emerald/40 hover:text-emerald"
            >
              <Github className="h-4 w-4" /> View Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects & Case Studies"
          subtitle="Production-grade applications across e-commerce, logistics, education, and real-time systems. Click a project to open its live site, or read the case study."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i % 2}>
              <ProjectCard p={p} onOpen={() => setActive(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <CaseStudyModal p={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
