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
  Target,
  UserRound,
  TrendingUp,
  Lock,
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

/** GitHub link when there's a real repo, an honest note when there isn't. */
function RepoAction({ p, size = "sm" }: { p: Project; size?: "sm" | "md" }) {
  const cls =
    size === "sm"
      ? "gap-1.5 rounded-full px-4 py-2 text-xs font-medium"
      : "gap-2 rounded-full px-5 py-2.5 text-sm font-medium";
  const icon = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  if (p.github) {
    return (
      <a
        href={p.github}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center border border-white/10 text-white/80 transition-colors hover:border-emerald/40 hover:text-emerald",
          cls
        )}
      >
        <Github className={icon} /> {size === "sm" ? "GitHub" : "View Code"}
      </a>
    );
  }

  return (
    <span
      title={p.repoNote}
      className={cn(
        "inline-flex cursor-default items-center border border-white/10 bg-white/[0.02] text-white/35",
        cls
      )}
    >
      <Lock className={icon} /> {p.repoNote ?? "Private repo"}
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

        {/* Problem → outcome, before any screenshot talk */}
        <div className="mt-4 space-y-2.5">
          <div className="flex items-start gap-2.5">
            <span className="mt-0.5 shrink-0 font-mono text-[10px] uppercase tracking-widest text-amber-400/70">
              Problem
            </span>
            <p className="line-clamp-3 text-sm leading-relaxed text-white/55">{p.problem}</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="mt-0.5 shrink-0 font-mono text-[10px] uppercase tracking-widest text-emerald/70">
              Result
            </span>
            <p className="line-clamp-2 text-sm leading-relaxed text-white/55">{p.results[0]}</p>
          </div>
        </div>

        <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-white/40">
          <UserRound className="h-3.5 w-3.5 text-emerald/70" /> {p.role}
        </p>

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
          <RepoAction p={p} />
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

/** A titled prose block inside the case study. */
function Block({
  icon: Icon,
  title,
  children,
  accent = "emerald",
}: {
  icon: typeof Cpu;
  title: string;
  children: React.ReactNode;
  accent?: "emerald" | "amber";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-4",
        accent === "amber"
          ? "border-amber-400/20 bg-amber-400/[0.04]"
          : "border-white/10 bg-white/[0.03]"
      )}
    >
      <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
        <Icon className={cn("h-4 w-4", accent === "amber" ? "text-amber-400" : "text-emerald")} />
        {title}
      </p>
      {children}
    </div>
  );
}

function Bullets({ items, accent = "emerald" }: { items: string[]; accent?: "emerald" | "amber" }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/60">
          <span
            className={cn(
              "mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full",
              accent === "amber" ? "bg-amber-400" : "bg-emerald"
            )}
          />
          {item}
        </li>
      ))}
    </ul>
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

  // Close on Escape — a modal this long is painful to dismiss by aiming at the backdrop.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

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
        role="dialog"
        aria-modal="true"
        aria-label={`${p.title} case study`}
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

        <div className="space-y-4 p-6 sm:p-8">
          <p className="leading-relaxed text-white/65">{p.description}</p>

          {/* 1 — Problem. Stated before anything else. */}
          <Block icon={Target} title="The Problem" accent="amber">
            <p className="text-sm leading-relaxed text-white/60">{p.problem}</p>
          </Block>

          {/* 2 — Solution */}
          <Block icon={Lightbulb} title="The Solution">
            <p className="text-sm leading-relaxed text-white/60">{p.solution}</p>
          </Block>

          {/* 3 — Tech */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="mb-2.5 flex items-center gap-2 text-sm font-semibold text-white">
              <Cpu className="h-4 w-4 text-emerald" /> Tech Stack
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
            <p className="mt-3 text-xs leading-relaxed text-white/40">{p.architecture}</p>
          </div>

          {/* 4 — Features */}
          <Block icon={Layers} title="Key Features">
            <div className="grid gap-2 sm:grid-cols-2">
              {p.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-white/60">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                  {f}
                </div>
              ))}
            </div>
          </Block>

          {/* 5 — Challenges */}
          <Block icon={Wrench} title="Hardest Part">
            <p className="text-sm leading-relaxed text-white/60">{p.challenges}</p>
          </Block>

          {/* 6 — What I personally built */}
          <Block icon={UserRound} title={`My Contribution — ${p.role}`}>
            <Bullets items={p.contribution} />
          </Block>

          {/* 7 — Results */}
          <div className="rounded-2xl border border-emerald/25 bg-emerald/[0.06] p-4">
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
              <TrendingUp className="h-4 w-4 text-emerald" /> Results
            </p>
            <Bullets items={p.results} />
          </div>

          {/* 8 — Live demo & code */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-emerald-soft"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
            <RepoAction p={p} size="md" />
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
          subtitle="Each one starts with the problem it had to solve and ends with what shipped — architecture, the hardest part, what I personally built, and the outcome. Open a case study, or go straight to the live site."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i % 2}>
              <ProjectCard p={p} onOpen={() => setActive(p)} />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/40">
          Client codebases stay private.{" "}
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald transition-colors hover:text-emerald-soft"
          >
            My public work is on GitHub →
          </a>
        </p>
      </div>

      <AnimatePresence>
        {active && <CaseStudyModal p={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
