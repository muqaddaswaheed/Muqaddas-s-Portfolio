# Muqaddas Waheed — Portfolio

A premium, production-ready developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Light monochrome theme · deep-teal accent · token-based design system · scroll reveals · magnetic buttons · custom cursor · command palette (⌘K) · animated loading screen · dynamic OG image · full SEO.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Personalize

| What | Where |
|------|-------|
| Name, role, socials, email, phone, resume link | `data/site.ts` |
| Projects & case studies (incl. "Additional projects") | `data/projects.ts` |
| Skills, experience, services, process, testimonials, blog | `data/content.ts` |
| Colors / theme | `tailwind.config.ts` + `app/globals.css` |

### Add your assets to `/public`
- **`portrait.svg`** — replace with your real photo (svg/png/jpg; update the `src` in `components/sections/Hero.tsx` if you change the extension).
- **`MuqaddasWaheed.pdf`** — the CV behind every "Download CV" button (it downloads as `Muqaddas_Waheed_CV.pdf`). The CV is the source of truth: when it changes, update `data/site.ts`, `data/content.ts` and `data/projects.ts` to match. If you rename the file, update `resume` in `data/site.ts`.

The favicon (`app/icon.svg`) and social share image (`app/opengraph-image.tsx`) are generated automatically.

## Sections

Hero · Tech marquee · At-a-glance (CV snapshot) · Stats · About · Skills · Projects (with case-study modals) · Experience & Education timeline · Services · Process · Values · Contact form · Footer.

`Testimonials`, `Github` and `Blog` components still exist but aren't rendered — add them back to a page once they hold real quotes, real repo data, and real article links.

## Deploy

Push to GitHub and import on [Vercel](https://vercel.com) — zero config. Update `site.url` in `data/site.ts` to your final domain for correct SEO/sitemap.
