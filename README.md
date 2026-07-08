# Muqaddas Waheed — Portfolio

A premium, production-ready developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Dark-luxury theme · emerald accent · glassmorphism · scroll reveals · magnetic buttons · custom cursor · command palette (⌘K) · animated loading screen · dynamic OG image · full SEO.

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
| Name, role, socials, email, resume link | `data/site.ts` |
| Projects & case studies | `data/projects.ts` |
| Skills, experience, services, process, testimonials, blog | `data/content.ts` |
| Colors / theme | `tailwind.config.ts` + `app/globals.css` |

### Add your assets to `/public`
- **`portrait.svg`** — replace with your real photo (svg/png/jpg; update the `src` in `components/sections/Hero.tsx` if you change the extension).
- **`Muqaddas_Waheed_CV.pdf`** — drop your CV here so the "Download CV" button works.

The favicon (`app/icon.svg`) and social share image (`app/opengraph-image.tsx`) are generated automatically.

## Sections

Hero · Tech marquee · About · Skills · Projects (with case-study modals) · Experience & Education timeline · Services · Process · Values · Stats · Testimonials · GitHub activity · Blog · Contact form · Footer.

## Deploy

Push to GitHub and import on [Vercel](https://vercel.com) — zero config. Update `site.url` in `data/site.ts` to your final domain for correct SEO/sitemap.
