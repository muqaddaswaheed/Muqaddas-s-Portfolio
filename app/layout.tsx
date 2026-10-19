import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import LoadingScreen from "@/components/ui/LoadingScreen";
import BackToTop from "@/components/ui/BackToTop";
import SiteBackground from "@/components/ui/SiteBackground";
import MotionProvider from "@/components/ui/MotionProvider";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

// Light is the default; only an explicit saved "dark" switches it (key: THEME_KEY).
const themeScript = `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Muqaddas Waheed",
    "Senior MERN Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Pakistan Developer",
  ],
  authors: [{ name: site.name, url: site.socials.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: site.email,
  telephone: site.phoneHref.replace("tel:", ""),
  address: { "@type": "PostalAddress", addressLocality: site.location },
  worksFor: { "@type": "Organization", name: "Deventia Tech" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "PMAS Arid Agriculture University Rawalpindi" },
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "Redux Toolkit",
    "PostgreSQL",
    "Stripe",
    "Docker",
  ],
  sameAs: [site.socials.github, site.socials.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the script below may add `dark` before React hydrates.
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Applies a saved dark theme before first paint, so there's no light flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <SiteBackground />
          <LoadingScreen />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
