import {
  Code2,
  Server,
  Database,
  Layers,
  ShieldCheck,
  Cloud,
  Wrench,
  Rocket,
  Palette,
  LayoutDashboard,
  Zap,
  Smartphone,
  GitBranch,
  Search,
  PenTool,
  TestTube2,
  LifeBuoy,
  Braces,
  MessageSquare,
  Gauge,
  Puzzle,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

/* ---------------- Skills ---------------- */
export type Skill = { name: string; level: number; tag: string };
export type SkillGroup = { title: string; icon: LucideIcon; skills: Skill[] };

// Grouped exactly as the CV's Technical Skills section.
export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    icon: Braces,
    skills: [
      { name: "JavaScript", level: 95, tag: "Expert" },
      { name: "TypeScript", level: 90, tag: "Advanced" },
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React.js", level: 95, tag: "Expert" },
      { name: "Next.js", level: 95, tag: "Expert" },
      { name: "Tailwind CSS", level: 95, tag: "Expert" },
      { name: "Bootstrap", level: 85, tag: "Advanced" },
      { name: "Redux Toolkit (RTK)", level: 92, tag: "Expert" },
      { name: "Context API", level: 88, tag: "Advanced" },
      { name: "ShadCN", level: 88, tag: "Advanced" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90, tag: "Advanced" },
      { name: "Express.js", level: 90, tag: "Advanced" },
      { name: "RESTful APIs", level: 92, tag: "Expert" },
      { name: "JWT Authentication", level: 90, tag: "Advanced" },
      { name: "Multer", level: 85, tag: "Advanced" },
      { name: "Webhooks", level: 82, tag: "Proficient" },
      { name: "WebSockets", level: 80, tag: "Proficient" },
    ],
  },
  {
    title: "Databases & ORM",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 90, tag: "Advanced" },
      { name: "PostgreSQL", level: 84, tag: "Advanced" },
      { name: "Supabase", level: 82, tag: "Proficient" },
      { name: "Neon", level: 78, tag: "Proficient" },
      { name: "Prisma", level: 82, tag: "Proficient" },
      { name: "Firebase", level: 85, tag: "Advanced" },
    ],
  },
  {
    title: "Payments & Integrations",
    icon: CreditCard,
    skills: [
      { name: "Stripe", level: 84, tag: "Advanced" },
      { name: "PayFast", level: 80, tag: "Proficient" },
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: Rocket,
    skills: [
      { name: "Docker", level: 80, tag: "Proficient" },
      { name: "CI/CD", level: 82, tag: "Proficient" },
      { name: "Vercel", level: 92, tag: "Expert" },
      { name: "Render", level: 82, tag: "Proficient" },
      { name: "Railway", level: 80, tag: "Proficient" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 92, tag: "Expert" },
      { name: "GitHub", level: 92, tag: "Expert" },
      { name: "Postman", level: 88, tag: "Advanced" },
    ],
  },
];

/* ---------------- Experience ---------------- */
export type Job = {
  company: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
  tech: string[];
};

export const experience: Job[] = [
  {
    company: "Deventia Tech",
    role: "MERN Stack Developer",
    duration: "Apr 2026 — Present",
    location: "Full-time",
    points: [
      "Developing scalable web applications and high-performance user interfaces.",
      "Implementing modern frontend state and robust backend services.",
      "Optimizing application speeds and streamlining team git workflows.",
      "Collaborating on product features in an agile engineering cycle.",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Redux Toolkit"],
  },
  {
    company: "BXTrack Solutions",
    role: "MERN Stack Developer & Intern → Junior Developer",
    duration: "Nov 2025 — Mar 2026",
    location: "Promoted to Junior Developer",
    points: [
      "Built responsive React applications from scratch with scalable component structures.",
      "Implemented modern UI/UX with Tailwind CSS and Bootstrap.",
      "Developed full-stack apps with secure auth and well-structured REST APIs.",
      "Promoted to Junior Developer to drive production pipelines and cross-platform state integrations.",
    ],
    tech: ["React.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
  },
  {
    company: "NFTP Web Development",
    role: "Certification",
    duration: "Aug 2023 — Oct 2023",
    location: "Certification",
    points: [
      "Completed a comprehensive web development certification.",
      "Covered core frontend and backend technologies.",
      "Built responsive interfaces with modern JavaScript frameworks.",
    ],
    tech: ["JavaScript", "HTML", "CSS", "React.js"],
  },
  {
    company: "PMAS Arid Agriculture University",
    role: "BS in Computer Science — GPA 3.9/4.0",
    duration: "Sep 2020 — May 2024",
    location: "Rawalpindi",
    points: [
      "Bachelor of Science in Computer Science.",
      "Graduated with a 3.9/4.0 GPA.",
      "Final Year Project: Digital Eve — a 3D custom-apparel commerce platform.",
    ],
    tech: ["Algorithms", "Databases", "Software Engineering"],
  },
];

/* ---------------- Services ---------------- */
export type Service = { title: string; desc: string; icon: LucideIcon };

export const services: Service[] = [
  { title: "Full Stack Development", desc: "End-to-end MERN & Next.js applications, from schema to deployment.", icon: Layers },
  { title: "Frontend Development", desc: "Pixel-perfect, animated, accessible interfaces in React & Next.js.", icon: Code2 },
  { title: "Backend & REST APIs", desc: "Secure, well-structured Node/Express APIs with clean contracts.", icon: Server },
  { title: "Dashboard & Admin Panels", desc: "Data-dense, role-based admin panels and control dashboards.", icon: LayoutDashboard },
  { title: "Authentication", desc: "JWT, Clerk & Firebase auth with role-based access control.", icon: ShieldCheck },
  { title: "Database Design", desc: "MongoDB, Firebase & Supabase schemas built to scale.", icon: Database },
  { title: "Real-time Systems", desc: "WebSockets, webhooks & live sync for fulfillment pipelines.", icon: Zap },
  { title: "API Integration", desc: "Third-party & payment integrations wired cleanly and reliably.", icon: Puzzle },
  { title: "Performance Optimization", desc: "Core Web Vitals, lazy loading, code splitting & caching.", icon: Gauge },
  { title: "Responsive Design", desc: "Flawless layouts from mobile to ultra-wide displays.", icon: Smartphone },
  { title: "Deployment", desc: "CI-friendly production deploys on Vercel with best practices.", icon: Rocket },
  { title: "Firebase Integration", desc: "Real-time DB, auth and cloud sync for live applications.", icon: Cloud },
];

/* ---------------- Process ---------------- */
export type Step = { title: string; desc: string; icon: LucideIcon };

export const processSteps: Step[] = [
  { title: "Discovery", desc: "Understand goals, users, and constraints before a line of code.", icon: Search },
  { title: "Planning", desc: "Architecture, data models, and a clear delivery roadmap.", icon: GitBranch },
  { title: "UI Design", desc: "Design a clean, modern, on-brand interface system.", icon: PenTool },
  { title: "Development", desc: "Build scalable, typed, well-tested features iteratively.", icon: Code2 },
  { title: "Testing", desc: "Validate flows, edge cases, and cross-device behavior.", icon: TestTube2 },
  { title: "Deployment", desc: "Ship to production with optimized, monitored builds.", icon: Rocket },
  { title: "Maintenance", desc: "Iterate, monitor, and improve based on real usage.", icon: LifeBuoy },
];

/* ---------------- Values ---------------- */
export const values: Service[] = [
  { title: "Clean Code", desc: "Readable, maintainable code that teams love to work in.", icon: Code2 },
  { title: "Scalable Architecture", desc: "Systems designed to grow without rewrites.", icon: Layers },
  { title: "Fast Delivery", desc: "Deadline-oriented shipping without cutting corners.", icon: Rocket },
  { title: "Responsive Design", desc: "Great experiences on every screen size.", icon: Smartphone },
  { title: "Modern UI", desc: "Premium, animated, delightful interfaces.", icon: Palette },
  { title: "Performance", desc: "Fast load times and smooth interactions everywhere.", icon: Gauge },
  { title: "Problem Solving", desc: "Analytical thinking applied to real product challenges.", icon: Wrench },
  { title: "Communication", desc: "Clear, collaborative, team-first engineering.", icon: MessageSquare },
];

/* ---------------- Stats ---------------- */
export const stats = [
  { label: "Projects Built", value: 12, suffix: "+" },
  { label: "Technologies", value: 30, suffix: "+" },
  { label: "Production Deployments", value: 6, suffix: "" },
  { label: "Happy Clients", value: 8, suffix: "+" },
  { label: "Learning Hours", value: 3000, suffix: "+" },
];

export const heroStats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Built", value: 12, suffix: "+" },
  { label: "Technologies", value: 30, suffix: "+" },
  { label: "Production Apps", value: 6, suffix: "" },
];

/* ---------------- Testimonials ---------------- */
export const testimonials = [
  {
    name: "Sarah Malik",
    role: "Product Lead, Deventia Tech",
    quote:
      "Muqaddas ships fast without sacrificing quality. His Next.js work raised the bar for our whole frontend team.",
    initials: "SM",
  },
  {
    name: "Ahmed Raza",
    role: "Founder, AuraWear",
    quote:
      "Our storefront went from idea to production-grade in record time. The attention to detail on UX and performance was outstanding.",
    initials: "AR",
  },
  {
    name: "Coach Julien",
    role: "Owner, SOS Box Thérapeutique",
    quote:
      "The booking system and coach panel completely streamlined how we manage sessions. Clients love how smooth it feels.",
    initials: "CJ",
  },
  {
    name: "Hina Tariq",
    role: "PM, BXTrack Solutions",
    quote:
      "Reliable, communicative, and genuinely great at architecture. He was promoted for a reason — he delivers.",
    initials: "HT",
  },
];

/* ---------------- Blog ---------------- */
export const posts = [
  { title: "Building Real-time Booking Systems with Next.js", tag: "Next.js", read: "8 min", date: "Jun 2026" },
  { title: "Type-safe REST APIs with Node, Express & TypeScript", tag: "Node.js", read: "10 min", date: "May 2026" },
  { title: "Optimizing Core Web Vitals in Production React Apps", tag: "Performance", read: "7 min", date: "Apr 2026" },
  { title: "Firebase vs Supabase: Choosing Your Real-time Backend", tag: "Firebase", read: "9 min", date: "Mar 2026" },
  { title: "Scalable State with Redux Toolkit in Large Apps", tag: "React", read: "6 min", date: "Feb 2026" },
  { title: "How I Use AI to Ship Features Faster", tag: "AI", read: "5 min", date: "Jan 2026" },
];

export const highlights = [
  "Promoted to Junior Developer at BXTrack within months for driving production pipelines.",
  "Shipped 6+ applications to production across e-commerce, logistics, and education.",
  "Built real-time booking, fulfillment, and 3D commerce systems end-to-end.",
  "Graduated with a 3.9/4.0 GPA in Computer Science.",
];
