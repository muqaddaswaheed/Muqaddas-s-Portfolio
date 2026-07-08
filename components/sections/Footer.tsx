"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { site } from "@/data/site";

const nav = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: Github, href: site.socials.github, label: "GitHub" },
  { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: site.socials.email, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-5 py-14 sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/40 to-transparent" />
      <div className="container-max">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald font-mono text-sm font-bold text-ink-950">
                M
              </span>
              <span className="text-lg font-semibold">
                Muqaddas<span className="text-emerald">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/45">
              Full Stack MERN Developer building scalable, modern web applications from Pakistan.
            </p>
            <div className="mt-5 flex justify-center gap-3 md:justify-start">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition-all hover:-translate-y-1 hover:border-emerald/40 hover:text-emerald"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-center md:text-left">
            <div className="col-span-2 mb-1 font-mono text-xs uppercase tracking-widest text-white/30">
              Navigation
            </div>
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-white/55 transition-colors hover:text-emerald"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-sm text-white/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} Muqaddas Waheed. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 fill-emerald text-emerald" /> using Next.js &
            Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
