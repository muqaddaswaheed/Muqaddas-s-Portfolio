"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart, FileDown } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { site } from "@/data/site";
import { linkTarget } from "@/lib/utils";

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
    <footer className="relative border-t border-line bg-canvas px-5 pb-10 pt-16 sm:px-8">
      <div className="container-max">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg transition-opacity duration-200 hover:opacity-80"
            >
              <Logo />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {site.role} building scalable, secure web applications from {site.location}.
            </p>
            <div className="mt-6 flex justify-center gap-2 md:justify-start">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...linkTarget(s.href)}
                  aria-label={s.label}
                  className="btn-icon h-10 w-10"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
              <a
                href={site.resume}
                download={site.resumeFileName}
                className="btn btn-secondary btn-sm text-ink-muted hover:text-ink"
              >
                <FileDown className="h-4 w-4" /> CV
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-3 text-center md:text-left">
            <p className="label col-span-2 mb-1">Navigation</p>
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded text-sm text-ink-muted transition-[color,transform] duration-200 hover:text-accent-text motion-safe:hover:translate-x-0.5"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-[13px] text-ink-subtle md:flex-row">
          <p>
            © {new Date().getFullYear()} Muqaddas Waheed. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 fill-accent text-accent" /> using Next.js &
            Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
