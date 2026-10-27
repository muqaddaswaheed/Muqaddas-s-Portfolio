"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import NavMenuLink from "@/components/ui/NavMenuLink";
import { nav, type NavItem } from "@/data/nav";
import { site } from "@/data/site";
import { cn, linkTarget } from "@/lib/utils";

// The navbar's items minus Contact — the Contact column beside it covers that.
const footerNav = nav.filter((item) => item.href !== "/contact");

const socials = [
  { icon: Github, href: site.socials.github, label: "GitHub" },
  { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
];

const linkClass =
  "group inline-flex items-center gap-2.5 rounded text-sm text-ink-muted transition-colors duration-200 hover:text-accent-text";
const iconClass =
  "h-4 w-4 shrink-0 text-ink-subtle transition-colors duration-200 group-hover:text-accent-text";

/**
 * A footer column. The heading row is the same height as the logo and every
 * item is a 44px row, so rows line up across columns: the first with the
 * brand paragraph, the last with the availability badge.
 */
function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h2 className="label flex h-8 items-center">{title}</h2>
      <ul className="mt-2 *:flex *:min-h-11 *:items-center">{children}</ul>
    </>
  );
}

export default function Footer() {
  const [menu, setMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Close the open group on navigation
  useEffect(() => {
    setMenu(null);
  }, [pathname]);

  // Escape or a click outside the footer nav closes it.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(null);
    };
    const onPointer = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setMenu(null);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [menu]);

  const isActive = (item: NavItem) =>
    item.items ? item.items.some((s) => s.href === pathname) : pathname === item.href;

  const navLinkClass = (item: NavItem) =>
    cn(
      "inline-flex items-center gap-1 rounded text-sm transition-colors duration-200",
      isActive(item) || menu === item.label
        ? "text-ink"
        : "text-ink-muted hover:text-accent-text"
    );

  return (
    // Extra bottom padding keeps the bottom bar clear of the fixed back-to-top
    // button until the page is wide enough for the container to clear it.
    <footer className="relative border-t border-line bg-canvas px-5 pb-24 pt-16 sm:px-8 min-[1360px]:pb-10">
      <div className="container-max">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="flex flex-col items-start sm:col-span-2 lg:col-span-5">
            <Link
              href="/"
              aria-label="Muqaddas Waheed — home"
              className="group inline-flex h-8 items-center rounded-lg px-0.5"
            >
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-balance text-sm leading-relaxed text-ink-muted">
              {site.role} building scalable, secure web applications from {site.location}.
            </p>
            {/* Pinned to the bottom on desktop, level with the last link row */}
            {site.available && (
              <div className="mt-6 flex min-h-11 items-center lg:mt-auto">
                <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-[13px] font-medium text-ink-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Available for new projects
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          {/* Same items as the navbar; About and Work open their pages in a dropdown */}
          <nav
            ref={navRef}
            aria-label="Footer"
            className="lg:col-span-2 lg:col-start-7 xl:col-span-3 xl:col-start-7"
          >
            <Column title="Navigation">
              {footerNav.map((item) =>
                item.items ? (
                  <li key={item.label} className="relative">
                    <button
                      type="button"
                      onClick={() => setMenu(menu === item.label ? null : item.label)}
                      aria-expanded={menu === item.label}
                      className={navLinkClass(item)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 opacity-60 transition-transform duration-300",
                          menu === item.label && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Opens upward — there's no room below the footer */}
                    <AnimatePresence>
                      {menu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute bottom-full left-0 z-20 mb-1 w-72 overflow-hidden rounded-xl border border-line bg-paper p-1.5 shadow-pop"
                        >
                          {item.items.map((s) => (
                            <NavMenuLink key={s.href} link={s} active={pathname === s.href} />
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item) ? "page" : undefined}
                      className={navLinkClass(item)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </Column>
          </nav>

          {/* Contact — a column wider below xl so the email stays on one line */}
          <div className="lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-10">
            <Column title="Contact">
              <li>
                <a href={site.socials.email} className={linkClass}>
                  <Mail className={iconClass} />
                  <span className="min-w-0 break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className={linkClass}>
                  <Phone className={iconClass} />
                  {site.phone}
                </a>
              </li>
              <li className="gap-2.5 text-sm text-ink-muted">
                <MapPin className="h-4 w-4 shrink-0 text-ink-subtle" />
                {site.location}
              </li>
            </Column>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 md:flex-row">
          <p className="text-[13px] text-ink-subtle">
            © {new Date().getFullYear()} Muqaddas Waheed. All rights reserved.
          </p>
          <div className="order-first flex gap-2 md:order-none">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...linkTarget(s.href)}
                aria-label={s.label}
                title={s.label}
                className="btn-icon h-10 w-10"
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
            <a
              href={site.resume}
              download={site.resumeFileName}
              aria-label="Download CV"
              title="Download CV"
              className="btn-icon h-10 w-10"
            >
              <FileDown className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
