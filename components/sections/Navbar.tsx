"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  User,
  Cpu,
  Briefcase,
  FolderGit2,
  Layers,
  Mail,
  type LucideIcon,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

type SubLink = { label: string; href: string; icon: LucideIcon; desc: string };
type NavItem =
  | { label: string; href: string; items?: never }
  | { label: string; items: SubLink[]; href?: never };

const nav: NavItem[] = [
  {
    label: "About",
    items: [
      { label: "About Me", href: "/about", icon: User, desc: "Who I am & my philosophy" },
      { label: "Skills", href: "/skills", icon: Cpu, desc: "My full tech stack" },
      { label: "Experience", href: "/experience", icon: Briefcase, desc: "Career & education" },
    ],
  },
  {
    label: "Work",
    items: [
      { label: "Projects", href: "/projects", icon: FolderGit2, desc: "Selected case studies" },
      { label: "Services", href: "/services", icon: Layers, desc: "What I can build for you" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMenu(null);
    setOpen(false);
  }, [pathname]);

  const groupActive = (item: NavItem) =>
    item.items ? item.items.some((s) => s.href === pathname) : pathname === item.href;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.4, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={cn(
          "w-full max-w-3xl rounded-full p-px transition-all duration-500",
          scrolled
            ? "bg-gradient-to-r from-white/10 via-emerald/40 to-white/10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)]"
            : "bg-gradient-to-r from-white/10 via-white/10 to-white/10"
        )}
      >
        <nav className="flex items-center justify-between rounded-full bg-ink-950/60 px-4 py-2.5 backdrop-blur-xl">
          <Link href="/" className="group flex items-center">
            <Logo />
          </Link>

          {/* Desktop nav — 3 grouped menus */}
          <div className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = groupActive(item);
              if (!item.items) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                      active ? "text-emerald" : "text-white/60 hover:text-white"
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {active && (
                      <span className="absolute inset-0 z-0 rounded-full bg-emerald/15 ring-1 ring-emerald/40" />
                    )}
                  </Link>
                );
              }
              const isOpen = menu === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setMenu(item.label)}
                  onMouseLeave={() => setMenu(null)}
                >
                  <button
                    onClick={() => setMenu(isOpen ? null : item.label)}
                    className={cn(
                      "relative flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                      active || isOpen ? "text-emerald" : "text-white/60 hover:text-white"
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "relative z-10 h-3.5 w-3.5 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                    {active && (
                      <span className="absolute inset-0 z-0 rounded-full bg-emerald/15 ring-1 ring-emerald/40" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4"
                      >
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 p-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
                          {item.items.map((s) => {
                            const sActive = pathname === s.href;
                            return (
                              <Link
                                key={s.href}
                                href={s.href}
                                className={cn(
                                  "flex items-start gap-3 rounded-xl p-3 transition-colors",
                                  sActive ? "bg-emerald/10" : "hover:bg-white/5"
                                )}
                              >
                                <span
                                  className={cn(
                                    "grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors",
                                    sActive
                                      ? "bg-emerald text-ink-950"
                                      : "bg-emerald/10 text-emerald"
                                  )}
                                >
                                  <s.icon className="h-4 w-4" />
                                </span>
                                <div>
                                  <p className={cn("text-sm font-medium", sActive ? "text-emerald" : "text-white")}>
                                    {s.label}
                                  </p>
                                  <p className="text-xs text-white/45">{s.desc}</p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/contact"
              className="group hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-soft to-emerald px-4 py-1.5 text-sm font-semibold text-ink-950 shadow-[0_0_20px_-6px_rgba(16,185,129,0.8)] transition-all duration-300 hover:shadow-[0_0_26px_-4px_rgba(16,185,129,0.9)] sm:inline-flex"
            >
              Let&apos;s talk
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <button
              className="md:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu — grouped */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 mx-4 w-[calc(100%-2rem)] max-w-3xl rounded-2xl border border-white/10 bg-ink-900/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-lg px-4 py-3 text-sm transition-colors",
                pathname === "/" ? "bg-emerald/10 text-emerald" : "text-white/70 hover:bg-white/5 hover:text-white"
              )}
            >
              Home
            </Link>
            {nav.map((item) =>
              item.items ? (
                <div key={item.label} className="mt-1">
                  <p className="px-4 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-widest text-white/30">
                    {item.label}
                  </p>
                  {item.items.map((s) => {
                    const sActive = pathname === s.href;
                    return (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-colors",
                          sActive ? "bg-emerald/10 text-emerald" : "text-white/70 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <s.icon className="h-4 w-4 text-emerald" />
                        {s.label}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "mt-1 flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors",
                    pathname === item.href
                      ? "bg-emerald/10 text-emerald"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Mail className="h-4 w-4 text-emerald" />
                  {item.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
