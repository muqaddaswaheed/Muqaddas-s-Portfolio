"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown, ArrowRight, MapPin, Sparkles } from "lucide-react";
import Aurora from "@/components/ui/Aurora";
import Typewriter from "@/components/ui/Typewriter";
import MagneticButton from "@/components/ui/MagneticButton";
import Counter from "@/components/ui/Counter";
import { site } from "@/data/site";

const socials = [
  { icon: Github, href: site.socials.github, label: "GitHub" },
  { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: site.socials.email, label: "Email" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <Aurora />
      <div className="container-max grid items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/5 px-4 py-1.5 text-xs text-emerald"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">Muqaddas</span>
            <br />
            <span className="text-gradient">Waheed</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75, duration: 0.6 }}
            className="mt-4 flex min-h-[2rem] items-center text-xl font-medium sm:text-2xl"
          >
            <Typewriter words={site.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.85, duration: 0.6 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/55"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.95, duration: 0.6 }}
            className="mt-6 flex items-center gap-4 text-sm text-white/40"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-emerald" /> {site.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-emerald" /> MERN · Next.js
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.05, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href={site.resume} external download variant="primary">
              <FileDown className="h-4 w-4" /> Download CV
            </MagneticButton>
            <MagneticButton href="/projects" variant="outline">
              View Projects <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="mt-8 flex items-center gap-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all hover:-translate-y-1 hover:border-emerald/40 hover:text-emerald"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — portrait + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <div className="relative aspect-[4/5] w-full">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald/30 via-transparent to-transparent blur-2xl" />
            <div className="glass-strong relative h-full w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/portrait.svg"
                alt="Muqaddas Waheed"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-strong absolute -left-6 top-10 rounded-2xl px-4 py-3"
            >
              <p className="font-mono text-2xl font-bold text-emerald">
                <Counter value={6} suffix="+" />
              </p>
              <p className="text-xs text-white/50">Production apps</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-strong absolute -right-4 bottom-16 rounded-2xl px-4 py-3"
            >
              <p className="font-mono text-2xl font-bold text-emerald">
                <Counter value={20} suffix="+" />
              </p>
              <p className="text-xs text-white/50">Technologies</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="/about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 pt-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-emerald"
          />
        </span>
      </motion.a>
    </section>
  );
}
