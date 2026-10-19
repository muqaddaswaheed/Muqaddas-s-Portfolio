import type { Config } from "tailwindcss";

// Every colour resolves to a CSS variable defined in app/globals.css, so the
// palette lives in one place and opacity modifiers (e.g. `bg-accent/10`) work.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  // Dark theme = `dark` class on <html>, set by ThemeToggle (see app/layout.tsx).
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Text
        ink: {
          DEFAULT: token("ink"),
          muted: token("ink-muted"),
          subtle: token("ink-subtle"),
        },
        // Page background (differs from card surfaces in the dark theme)
        canvas: token("canvas"),
        // Surfaces
        paper: {
          DEFAULT: token("paper"),
          alt: token("paper-alt"),
          hover: token("paper-hover"),
        },
        // Borders
        line: {
          DEFAULT: token("line"),
          strong: token("line-strong"),
        },
        // Deep teal accent
        accent: {
          DEFAULT: token("accent"),
          hover: token("accent-hover"),
          light: token("accent-light"),
          // Teal for small text — the hover shade, which clears WCAG AA on white.
          text: token("accent-hover"),
          // Text/icons sitting on a solid accent fill (primary buttons).
          fg: token("accent-fg"),
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        // Card and timeline body copy — between `sm` and `base`.
        body: ["0.9375rem", { lineHeight: "1.7" }],
      },
      // Per-theme values live in app/globals.css.
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        pop: "var(--shadow-pop)",
      },
      keyframes: {
        // Ends on `none`, not translateY(0): a lingering transform would make
        // <main> the containing block for position:fixed children (the modal).
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgb(var(--line) / 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--line) / 0.7) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
