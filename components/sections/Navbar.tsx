"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, FileDown } from "lucide-react";
import Logo from "@/components/ui/Logo";
import NavMenuLink from "@/components/ui/NavMenuLink";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import { nav, type NavItem } from "@/data/nav";
import { site } from "@/data/site";

/**
 * Classic full-width bar. Transparent over the page at the top; once scrolled
 * it becomes translucent white with a hairline and gets slightly shorter. A
 * teal underline slides to whichever link is hovered, then back to the
 * current page.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMenu(null);
    setOpen(false);
    setHovered(null);
  }, [pathname]);

  // Escape closes whichever menu is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (item: NavItem) =>
    item.items ? item.items.some((s) => s.href === pathname) : pathname === item.href;
  const activeLabel = nav.find(isActive)?.label ?? null;
  // The underline sits under the hovered link, else under the current page.
  const underlined = hovered ?? activeLabel;

  const underline = (
    <motion.span
      layoutId="nav-underline"
      className="absolute inset-x-0 -bottom-[3px] h-[2px] rounded-full bg-accent"
      transition={{ type: "spring", stiffness: 450, damping: 36 }}
    />
  );

  const linkClass = (item: NavItem) =>
    cn(
      "relative flex items-center gap-1 rounded-md py-1.5 text-sm font-medium transition-colors duration-200",
      isActive(item) || menu === item.label ? "text-ink" : "text-ink-muted hover:text-ink"
    );

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
      // Side padding lives here (not on the container) so the bar lines up with page sections.
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b px-5 transition-[background-color,border-color,box-shadow] duration-300 sm:px-8",
        scrolled
          ? "border-line bg-canvas/85 shadow-[0_1px_12px_-6px_rgba(16,24,40,0.08)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div
        className={cn(
          "container-max flex items-center justify-between gap-6 transition-[padding] duration-300",
          scrolled ? "py-2.5" : "py-4"
        )}
      >
        <Link
          href="/"
          aria-label="Muqaddas Waheed — home"
          className="group flex shrink-0 items-center rounded-lg px-0.5"
        >
          <Logo />
        </Link>

        {/* Desktop links */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8" onMouseLeave={() => setHovered(null)}>
            {nav.map((item) =>
              item.items ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    setHovered(item.label);
                    setMenu(item.label);
                  }}
                  onMouseLeave={() => setMenu(null)}
                >
                  <button
                    type="button"
                    onClick={() => setMenu(menu === item.label ? null : item.label)}
                    aria-expanded={menu === item.label}
                    aria-haspopup="menu"
                    className={linkClass(item)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 opacity-60 transition-transform duration-300",
                        menu === item.label && "rotate-180"
                      )}
                    />
                    {underlined === item.label && underline}
                  </button>

                  {/* Dropdown — the outer div centres it, the inner one animates */}
                  <div
                    className={cn(
                      "absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4",
                      menu !== item.label && "pointer-events-none"
                    )}
                  >
                    <AnimatePresence>
                      {menu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="overflow-hidden rounded-xl border border-line bg-paper p-1.5 shadow-pop"
                        >
                          {item.items.map((s) => (
                            <NavMenuLink key={s.href} link={s} active={pathname === s.href} />
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
              ) : (
                <li key={item.label} onMouseEnter={() => setHovered(item.label)}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item) ? "page" : undefined}
                    className={linkClass(item)}
                  >
                    {item.label}
                    {underlined === item.label && underline}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle className="sm:h-9 sm:w-9" />
          <a
            href={site.resume}
            download={site.resumeFileName}
            aria-label="Download CV"
            className="btn btn-secondary btn-sm hidden h-9 sm:inline-flex"
          >
            <FileDown className="h-3.5 w-3.5" /> CV
          </a>
          <Link href="/contact" className="btn btn-primary btn-sm group hidden h-9 sm:inline-flex">
            Let&apos;s talk
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg text-ink transition-colors duration-200 hover:bg-paper-hover md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — grouped */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-4 top-full mx-auto mt-2 max-h-[calc(100svh-6rem)] max-w-3xl overflow-y-auto rounded-xl border border-line bg-paper p-2 shadow-pop md:hidden"
          >
            {nav.map((item) =>
              item.items ? (
                <div key={item.label} className="mt-1">
                  <p className="label px-3 pb-1 pt-2">{item.label}</p>
                  {item.items.map((s) => {
                    const sActive = pathname === s.href;
                    return (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        aria-current={sActive ? "page" : undefined}
                        className={cn(
                          "flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors duration-200",
                          sActive
                            ? "bg-accent-light/40 text-accent-text"
                            : "text-ink hover:bg-paper-hover"
                        )}
                      >
                        <s.icon className={cn("h-4 w-4", sActive ? "text-accent" : "text-ink-subtle")} />
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
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "mt-1 flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors duration-200",
                    pathname === item.href
                      ? "bg-accent-light/40 text-accent-text"
                      : "text-ink hover:bg-paper-hover"
                  )}
                >
                  <item.icon
                    className={cn("h-4 w-4", pathname === item.href ? "text-accent" : "text-ink-subtle")}
                  />
                  {item.label}
                </Link>
              )
            )}
            <a
              href={site.resume}
              download={site.resumeFileName}
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 w-full"
            >
              <FileDown className="h-4 w-4" /> Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
