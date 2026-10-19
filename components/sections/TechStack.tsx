"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { CreditCard, Webhook } from "lucide-react";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGithubactions,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { cn } from "@/lib/utils";

type Tech = { name: string; icon: ComponentType<{ className?: string }> };
type Group = { title: string; items: Tech[] };

// The CV's Technical Skills grouped into five categories, major tools only.
// Logos render monochrome and pick up the teal accent on hover.
const groups: Group[] = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux Toolkit", icon: SiRedux },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "WebSockets", icon: SiSocketdotio },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "CI/CD", icon: SiGithubactions },
      { name: "Vercel", icon: SiVercel },
      { name: "Git & GitHub", icon: SiGithub },
    ],
  },
  {
    title: "Payments",
    items: [
      { name: "Stripe", icon: SiStripe },
      { name: "PayFast", icon: CreditCard },
      { name: "Webhooks", icon: Webhook },
    ],
  },
];

const CYCLE_MS = 3200;

/**
 * Tech stack as one row of category tabs. It cycles on its own while on
 * screen (a thin bar in the active tab shows the time left); clicking a tab
 * takes over and stops the cycle.
 */
export default function TechStack() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  useEffect(() => {
    if (!auto || !inView) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % groups.length), CYCLE_MS);
    return () => clearTimeout(t);
  }, [active, auto, inView]);

  const choose = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  // Arrow keys move between tabs, as screen-reader users expect from a tablist.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + groups.length) % groups.length;
    choose(next);
    document.getElementById(`stack-tab-${next}`)?.focus();
  };

  return (
    <section
      ref={ref}
      id="stack"
      aria-label="Tech stack"
      className="relative border-t border-line px-5 py-14 sm:px-8 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-7"
      >
        <p className="label">Tech stack</p>

        {/* Tabs — p-0.5 leaves room for the focus ring inside the scroller */}
        <div className="max-w-full overflow-x-auto p-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            role="tablist"
            aria-label="Skill categories"
            onKeyDown={onKeyDown}
            className="flex w-max gap-1 rounded-full border border-line bg-paper-alt p-1"
          >
            {groups.map((g, i) => {
              const selected = i === active;
              return (
                <button
                  key={g.title}
                  id={`stack-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="stack-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => choose(i)}
                  className={cn(
                    "relative overflow-hidden rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 sm:px-5 sm:text-sm",
                    selected ? "text-ink" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {selected && (
                    <motion.span
                      layoutId="stack-tab"
                      className="absolute inset-0 rounded-full border border-line bg-paper shadow-[0_1px_3px_rgba(16,24,40,0.08)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {/* Time left until the next category, while auto-cycling */}
                  {selected && auto && inView && (
                    <motion.span
                      key={`progress-${active}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
                      className="absolute inset-x-4 bottom-1 h-[2px] origin-left rounded-full bg-accent/70"
                    />
                  )}
                  <span className="relative z-10">{g.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tools of the active category */}
        <div
          id="stack-panel"
          role="tabpanel"
          aria-labelledby={`stack-tab-${active}`}
          className="flex min-h-[112px] w-full items-start justify-center sm:min-h-[52px]"
        >
          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
                exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
              }}
              className="flex flex-wrap justify-center gap-2.5"
            >
              {groups[active].items.map((t) => (
                <motion.li
                  key={t.name}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="group flex items-center gap-2.5 rounded-lg border border-line bg-paper px-4 py-2.5 text-sm font-medium text-ink shadow-card transition-[border-color,box-shadow] duration-200 hover:border-accent/40 hover:shadow-card-hover"
                >
                  <t.icon className="h-[18px] w-[18px] text-ink-muted transition-colors duration-200 group-hover:text-accent" />
                  {t.name}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
