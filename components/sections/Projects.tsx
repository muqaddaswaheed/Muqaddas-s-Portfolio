"use client";

import { useState } from "react";
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
  Maximize2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-2.5 py-1 text-[11px] font-medium text-emerald">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
      {status}
    </span>
  );
}

function ProjectCard({
  p,
  onOpen,
  onZoom,
}: {
  p: Project;
  onOpen: () => void;
  onZoom: () => void;
}) {
  return (
    <div
      className={cn(
        "glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:border-emerald/30",
        p.featured && "lg:col-span-2"
      )}
    >
      {/* Hero image — shows top of landing page, click to view full */}
      <button
        type="button"
        onClick={p.image ? onZoom : onOpen}
        aria-label={`View full landing page of ${p.title}`}
        className={cn(
          "group/img relative mb-6 block aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br text-left",
          p.gradient
        )}
      >
        {p.image ? (
          <img
            src={p.image}
            alt={`${p.title} — ${p.tagline}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover/img:scale-[1.03]"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-grid-faint [background-size:26px_26px] opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-4xl font-bold text-white/15 transition-transform duration-700 group-hover:scale-110">
                {p.title}
              </span>
            </div>
          </>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
        <div className="absolute right-4 top-4">
          <StatusBadge status={p.status} />
        </div>
        {p.image && (
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-ink-950/70 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover/img:opacity-100">
            <Maximize2 className="h-3.5 w-3.5 text-emerald" /> View full page
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-0.5 text-sm text-emerald/80">{p.tagline}</p>
          </div>
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
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
          )}
          <a
            href={p.github ?? "https://github.com/muqaddaswaheed"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:border-emerald/40 hover:text-emerald"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          <button
            onClick={onOpen}
            aria-label="Open details"
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
  const blocks = [
    { icon: Cpu, title: "Architecture", body: p.architecture },
    { icon: Lightbulb, title: "Challenges", body: p.challenges },
    { icon: Wrench, title: "Solutions", body: p.solutions },
  ];
  return (
    <motion.div
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        className="glass-strong relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {p.image && (
          <div className={cn("relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br", p.gradient)}>
            <img
              src={p.image}
              alt={`${p.title} — ${p.tagline}`}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        )}
        <StatusBadge status={p.status} />
        <h3 className="mt-3 text-2xl font-bold text-white">{p.title}</h3>
        <p className="text-emerald/80">{p.tagline}</p>
        <p className="mt-4 leading-relaxed text-white/60">{p.description}</p>

        <div className="mt-6">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
            <Layers className="h-4 w-4 text-emerald" /> Key Features
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

        <div className="mt-6 space-y-4">
          {blocks.map((b) => (
            <div key={b.title} className="glass rounded-2xl p-4">
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-white">
                <b.icon className="h-4 w-4 text-emerald" /> {b.title}
              </p>
              <p className="text-sm leading-relaxed text-white/55">{b.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-white/60"
            >
              {t}
            </span>
          ))}
        </div>

        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-ink-950 hover:bg-emerald-soft"
          >
            <ExternalLink className="h-4 w-4" /> Visit Live Site
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

function ImageLightbox({ p, onClose }: { p: Project; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[10002] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="flex shrink-0 items-center justify-between px-5 py-4">
        <div>
          <p className="font-semibold text-white">{p.title}</p>
          <p className="text-xs text-emerald/80">{p.tagline}</p>
        </div>
        <div className="flex items-center gap-2">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald px-4 py-2 text-xs font-semibold text-ink-950 hover:bg-emerald-soft"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Open live site
            </a>
          )}
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-8" onClick={(e) => e.stopPropagation()}>
        <motion.img
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          src={p.image}
          alt={`${p.title} full landing page`}
          className="mx-auto w-full max-w-5xl rounded-2xl border border-white/10 shadow-2xl"
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [zoom, setZoom] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects & Case Studies"
          subtitle="Production-grade applications across e-commerce, logistics, education, and real-time systems."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i % 2}>
              <ProjectCard p={p} onOpen={() => setActive(p)} onZoom={() => setZoom(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <CaseStudyModal p={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
      <AnimatePresence>
        {zoom && <ImageLightbox p={zoom} onClose={() => setZoom(null)} />}
      </AnimatePresence>
    </section>
  );
}
