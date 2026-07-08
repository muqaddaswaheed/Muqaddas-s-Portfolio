"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Home,
  User,
  Cpu,
  FolderGit2,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  FileDown,
} from "lucide-react";
import { site } from "@/data/site";

type Item = { label: string; icon: any; action: () => void; hint?: string };

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (path: string) => () => {
    setOpen(false);
    router.push(path);
  };

  const items: Item[] = [
    { label: "Home", icon: Home, action: go("/") },
    { label: "About", icon: User, action: go("/about") },
    { label: "Skills", icon: Cpu, action: go("/skills") },
    { label: "Projects", icon: FolderGit2, action: go("/projects") },
    { label: "Experience", icon: Briefcase, action: go("/experience") },
    { label: "Services", icon: FolderGit2, action: go("/services") },
    { label: "Contact", icon: Mail, action: go("/contact") },
    { label: "Download CV", icon: FileDown, hint: "PDF", action: () => window.open(site.resume, "_blank") },
    { label: "GitHub", icon: Github, hint: "External", action: () => window.open(site.socials.github, "_blank") },
    { label: "LinkedIn", icon: Linkedin, hint: "External", action: () => window.open(site.socials.linkedin, "_blank") },
  ];

  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50 transition-colors hover:border-emerald/30 hover:text-white md:flex"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Quick nav</span>
        <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px]">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[10001] flex items-start justify-center bg-black/70 p-4 pt-[15vh] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              className="glass-strong w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-4">
                <Search className="h-4 w-4 text-white/40" />
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search sections & links…"
                  className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-white/30"
                />
              </div>
              <div className="max-h-80 overflow-y-auto p-2">
                {filtered.length === 0 && (
                  <p className="px-3 py-6 text-center text-sm text-white/40">No results.</p>
                )}
                {filtered.map((i) => (
                  <button
                    key={i.label}
                    onClick={i.action}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-white/80 transition-colors hover:bg-emerald/10 hover:text-white"
                  >
                    <i.icon className="h-4 w-4 text-emerald" />
                    <span className="flex-1">{i.label}</span>
                    {i.hint && (
                      <span className="font-mono text-[10px] uppercase text-white/30">{i.hint}</span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
