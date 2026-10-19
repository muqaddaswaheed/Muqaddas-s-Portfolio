"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/** localStorage key; also read by the no-flash script in app/layout.tsx. */
export const THEME_KEY = "theme";

const BROWSER_BAR = { light: "#FFFFFF", dark: "#050506" };

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", dark ? BROWSER_BAR.dark : BROWSER_BAR.light);
}

/**
 * Light (default) ⇄ dark theme switch. Both icons are rendered and swapped with
 * `dark:` CSS, so server and client markup always match — no hydration flash.
 */
export default function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false);

  // Pick up whatever the no-flash script already applied.
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
    applyTheme(isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    applyTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch {
      // Private mode / blocked storage: the switch still works for this visit.
    }
  };

  const label = dark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn("btn-icon group", className)}
    >
      <Moon className="h-[18px] w-[18px] transition-transform duration-300 motion-safe:group-hover:-rotate-12 dark:hidden" />
      <Sun className="hidden h-[18px] w-[18px] transition-transform duration-300 motion-safe:group-hover:rotate-45 dark:block" />
    </button>
  );
}
