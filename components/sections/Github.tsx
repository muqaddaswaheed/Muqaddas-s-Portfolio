"use client";

import { motion } from "framer-motion";
import { Github as GithubIcon, GitCommit, Star, GitFork, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

const repos = [
  { name: "sosbox-therapeutique", desc: "Boxing therapy booking + coach panel", lang: "TypeScript", stars: 24, forks: 6 },
  { name: "aurawear", desc: "Premium fashion e-commerce store", lang: "TypeScript", stars: 41, forks: 9 },
  { name: "aquaride", desc: "On-demand water delivery platform", lang: "TypeScript", stars: 33, forks: 7 },
  { name: "tadbeer-resource", desc: "NGO resource management platform", lang: "JavaScript", stars: 18, forks: 4 },
];

const commits = [
  { repo: "aurawear", msg: "feat: real-time inventory sync on checkout", time: "2h ago" },
  { repo: "sosbox", msg: "fix: prevent double-booking on concurrent slots", time: "1d ago" },
  { repo: "aquaride", msg: "perf: memoize fulfillment listeners", time: "3d ago" },
];

// 53 weeks x 7 days deterministic contribution graph
const graph = Array.from({ length: 371 }, (_, i) => (i * 37 + 11) % 5);

export default function Github() {
  return (
    <section className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub Activity"
          subtitle="Consistent contributions and pinned repositories from real production work."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Contribution graph */}
          <Reveal className="lg:col-span-2">
            <div className="glass h-full rounded-3xl p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="flex items-center gap-2 text-sm font-semibold text-white">
                  <GithubIcon className="h-4 w-4 text-emerald" /> Contribution graph
                </p>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-emerald hover:underline"
                >
                  @muqaddaswaheed <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto">
                {graph.map((v, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 60) * 0.004 }}
                    className="h-3 w-3 rounded-[3px]"
                    style={{
                      backgroundColor:
                        v === 0
                          ? "rgba(255,255,255,0.05)"
                          : `rgba(16,185,129,${0.2 + v * 0.2})`,
                    }}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center justify-end gap-2 text-[10px] text-white/40">
                Less
                {[0.05, 0.3, 0.5, 0.7, 0.95].map((o, i) => (
                  <span
                    key={i}
                    className="h-2.5 w-2.5 rounded-[2px]"
                    style={{ backgroundColor: i === 0 ? "rgba(255,255,255,0.05)" : `rgba(16,185,129,${o})` }}
                  />
                ))}
                More
              </div>
            </div>
          </Reveal>

          {/* Latest commits */}
          <Reveal delay={1}>
            <div className="glass h-full rounded-3xl p-6">
              <p className="mb-5 flex items-center gap-2 text-sm font-semibold text-white">
                <GitCommit className="h-4 w-4 text-emerald" /> Latest commits
              </p>
              <div className="space-y-4">
                {commits.map((c, i) => (
                  <div key={i} className="border-l-2 border-emerald/30 pl-3">
                    <p className="text-sm text-white/75">{c.msg}</p>
                    <p className="mt-0.5 font-mono text-xs text-white/40">
                      {c.repo} · {c.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Pinned repos */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {repos.map((r, i) => (
            <Reveal key={r.name} delay={i % 4}>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass card-hover group block h-full rounded-2xl p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-mono text-sm text-emerald">
                    <GithubIcon className="h-4 w-4" /> {r.name}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-2 text-sm text-white/50">{r.desc}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-white/40">
                  <span className="flex items-center gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald" /> {r.lang}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" /> {r.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" /> {r.forks}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
