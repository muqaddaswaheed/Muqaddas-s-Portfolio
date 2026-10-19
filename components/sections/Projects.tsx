"use client";

import { useEffect, useRef, useState } from "react";
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
import { projects, additionalProjects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const GITHUB = "https://github.com/muqaddaswaheed";

function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper/95 px-2.5 py-1 text-[11px] font-medium text-ink shadow-card backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {status === "Production" ? "In Production" : status}
    </span>
  );
}

/** GitHub link when there's a real repo, an honest note when there isn't. */
function RepoAction({ p, size = "sm" }: { p: Project; size?: "sm" | "md" }) {
  const sizeCls = size === "sm" ? "btn-sm" : "";
  const icon = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  if (p.github) {
    return (
      <a
        href={p.github}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("btn btn-secondary", sizeCls)}
      >
        <Github className={cn(icon, "text-ink-muted")} /> {size === "sm" ? "GitHub" : "View Code"}
      </a>
    );
  }

  // Not a control — a dashed outline and muted text say so at a glance.
  return (
    <span
      title={p.repoNote}
      className={cn(
        "inline-flex cursor-default items-center gap-1.5 rounded-lg border border-dashed border-line-strong font-medium text-ink-subtle",
        size === "sm" ? "h-10 px-3.5 text-[13px]" : "h-11 px-4 text-sm"
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
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-grid-faint [background-size:26px_26px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-4xl font-bold text-ink/10">{p.title}</span>
          </div>
        </>
      )}
      <div className="absolute right-3 top-3">
        <StatusBadge status={p.status} />
      </div>
      <span className="absolute bottom-3 left-3 inline-flex translate-y-1 items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-ink opacity-0 shadow-pop transition-all duration-300 group-hover/img:translate-y-0 group-hover/img:opacity-100 group-focus-visible/img:translate-y-0 group-focus-visible/img:opacity-100">
        {p.live ? (
          <>
            <ExternalLink className="h-3.5 w-3.5 text-accent" /> Visit live site
          </>
        ) : (
          <>
            <FileText className="h-3.5 w-3.5 text-accent" /> View case study
          </>
        )}
      </span>
    </>
  );

  const mediaClasses = cn(
    "group/img relative mb-6 block aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-xl border border-line bg-paper-alt text-left",
    // Featured cards sit image-left / details-right on desktop.
    p.featured && "lg:mb-0 lg:aspect-auto lg:h-full lg:min-h-[340px]"
  );

  return (
    <div
      className={cn(
        "card card-hover group flex h-full flex-col overflow-hidden p-4 sm:p-5",
        p.featured && "lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-stretch lg:gap-8 lg:p-6"
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

      <div className="flex flex-1 flex-col px-1 sm:px-2 lg:px-0">
        <div className={cn(p.featured && "lg:pt-2")}>
          <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-[1.375rem]">
            {p.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent-text">{p.tagline}</p>
        </div>

        {/* Problem → outcome, before any screenshot talk */}
        <dl className="mt-5 grid grid-cols-[4.25rem_1fr] gap-x-3 gap-y-3">
          <dt className="label pt-[3px]">Problem</dt>
          <dd className="line-clamp-3 text-sm leading-relaxed text-ink-muted">{p.problem}</dd>
          <dt className="label pt-[3px] text-accent-text">Result</dt>
          <dd className="line-clamp-2 text-sm leading-relaxed text-ink-muted">{p.results[0]}</dd>
        </dl>

        {/* Meta: role, plus the repo note when there's no public code to link */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] text-ink-muted">
          <span className="inline-flex items-center gap-1.5">
            <UserRound className="h-3.5 w-3.5 text-ink-subtle" /> {p.role}
          </span>
          {!p.github && (
            <span className="inline-flex items-center gap-1.5" title={p.repoNote}>
              <Lock className="h-3.5 w-3.5 text-ink-subtle" /> {p.repoNote ?? "Private repo"}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        {/* mt-auto keeps the actions on the card's bottom edge when cards share a row */}
        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-2 border-t border-line pt-5">
            <button onClick={onOpen} className="btn btn-primary btn-sm">
              <FileText className="h-3.5 w-3.5" /> Case Study
            </button>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <ExternalLink className="h-3.5 w-3.5 text-ink-muted" /> Live Demo
              </a>
            )}
            {p.github && <RepoAction p={p} />}
            <button
              onClick={onOpen}
              aria-label="Open case study"
              className="ml-auto grid h-10 w-10 place-items-center rounded-lg border border-line text-ink-muted transition-colors duration-200 hover:bg-paper-hover group-hover:border-accent/40 group-hover:text-accent"
            >
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
            </button>
          </div>
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
  tone = "default",
}: {
  icon: typeof Cpu;
  title: string;
  children: React.ReactNode;
  tone?: "default" | "highlight";
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-4 sm:p-5",
        tone === "highlight" ? "border-accent/25 bg-accent-light/30" : "border-line bg-paper-alt"
      )}
    >
      <p className="mb-2.5 flex items-center gap-2 text-sm font-semibold text-ink">
        <Icon className="h-4 w-4 text-accent" />
        {title}
      </p>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function CaseStudyModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock background scroll while the modal is open.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Move focus into the dialog, and hand it back to whatever opened it.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus({ preventScroll: true });
    return () => opener?.focus?.({ preventScroll: true });
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
      className="fixed inset-0 z-[10001] flex items-end justify-center bg-neutral-900/40 p-0 backdrop-blur-sm dark:bg-black/70 sm:items-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${p.title} case study`}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 32 }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-line bg-paper shadow-pop sm:rounded-2xl"
      >
        {/* Header image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-line bg-paper-alt">
          {p.image && (
            <img
              src={p.image}
              alt={`${p.title} — ${p.tagline}`}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          )}
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border border-line bg-paper/95 text-ink shadow-pop backdrop-blur-sm transition-colors duration-200 hover:bg-paper-hover"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4 p-5 sm:p-8">
          {/* Title block */}
          <div className="pb-2">
            <StatusBadge status={p.status} />
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-[1.75rem]">
              {p.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent-text">{p.tagline}</p>
          </div>

          <p className="text-body text-ink-muted">{p.description}</p>

          {/* 1 — Problem. Stated before anything else. */}
          <Block icon={Target} title="The Problem">
            <p className="text-sm leading-relaxed text-ink-muted">{p.problem}</p>
          </Block>

          {/* 2 — Solution */}
          <Block icon={Lightbulb} title="The Solution">
            <p className="text-sm leading-relaxed text-ink-muted">{p.solution}</p>
          </Block>

          {/* 3 — Tech */}
          <Block icon={Cpu} title="Tech Stack">
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="tag border-accent/20 bg-accent-light/40 text-accent-text"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink-subtle">{p.architecture}</p>
          </Block>

          {/* 4 — Features */}
          <Block icon={Layers} title="Key Features">
            <div className="grid gap-2 sm:grid-cols-2">
              {p.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </div>
              ))}
            </div>
          </Block>

          {/* 5 — Challenges */}
          <Block icon={Wrench} title="Hardest Part">
            <p className="text-sm leading-relaxed text-ink-muted">{p.challenges}</p>
          </Block>

          {/* 6 — What I personally built */}
          <Block icon={UserRound} title={`My Contribution — ${p.role}`}>
            <Bullets items={p.contribution} />
          </Block>

          {/* 7 — Results */}
          <Block icon={TrendingUp} title="Results" tone="highlight">
            <Bullets items={p.results} />
          </Block>

          {/* 8 — Live demo & code */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
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
          as="h1"
          eyebrow="Selected Work"
          title="Projects & Case Studies"
          subtitle="Each one starts with the problem it had to solve and ends with what shipped — architecture, the hardest part, what I personally built, and the outcome. Open a case study, or go straight to the live site."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i % 2} className={p.featured ? "lg:col-span-2" : undefined}>
              <ProjectCard p={p} onOpen={() => setActive(p)} />
            </Reveal>
          ))}
        </div>

        {additionalProjects.length > 0 && (
          <Reveal>
            <div className="mt-14">
              <p className="label mb-4">Additional projects</p>
              <div className={cn("grid gap-4", additionalProjects.length > 1 && "lg:grid-cols-2")}>
                {additionalProjects.map((m) => {
                  const body = (
                    <>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-base font-semibold text-ink">
                          {m.title}
                          <span className="font-normal text-accent-text"> — {m.tagline}</span>
                        </p>
                        {m.live && <ExternalLink className="h-4 w-4 shrink-0 text-accent" />}
                      </div>
                      <p className="mt-1.5 text-body text-ink-muted">{m.description}</p>
                    </>
                  );
                  return m.live ? (
                    <a
                      key={m.title}
                      href={m.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card card-hover block p-5"
                    >
                      {body}
                    </a>
                  ) : (
                    <div key={m.title} className="card p-5">
                      {body}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        )}

        <p className="mt-12 text-center text-sm text-ink-muted">
          Client codebases stay private.{" "}
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="link-accent">
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
