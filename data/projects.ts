export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: "Production" | "Development" | "Live";
  featured?: boolean;
  image?: string;
  stack: string[];
  features: string[];
  challenges: string;
  solutions: string;
  architecture: string;
  live?: string;
  github?: string;
  caseStudy?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "sosbox-therapeutique",
    title: "SOS Box Thérapeutique",
    tagline: "Boxing therapy & coaching platform",
    description:
      "A boxing-therapy platform where clients book solo, duo, or trio sessions with automatic discount tiers, backed by a dedicated coach panel to manage bookings, availability, and pricing in real time.",
    status: "Production",
    featured: true,
    image: "/sosbox-therapeutique.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
    features: [
      "Solo / Duo / Trio session booking with dynamic discount logic",
      "Dedicated coach panel to manage bookings & schedules",
      "Availability calendar with real-time slot updates",
      "Automated pricing tiers and confirmation flows",
      "Fully responsive, accessible therapy-brand UI",
    ],
    challenges:
      "Modelling flexible group-session pricing while keeping the coach's booking workflow simple and conflict-free across concurrent reservations.",
    solutions:
      "Built a rule-based discount engine tied to session size and a coach dashboard with optimistic UI updates and server-side slot locking to prevent double-bookings.",
    architecture:
      "Next.js App Router frontend with typed REST endpoints, server actions for booking mutations, and a role-separated coach admin panel.",
    live: "https://sosboxetherapeutique.com",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    slug: "aurawear",
    title: "AuraWear",
    tagline: "Premium fashion e-commerce",
    description:
      "A production-grade e-commerce store for a premium fashion brand with fluid content architecture, dynamic catalog sorting, and seamless checkout flows with real-time inventory tracking.",
    status: "Production",
    featured: true,
    image: "/aurawear.svg",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Redux Toolkit"],
    features: [
      "Dynamic catalog with multi-criteria sorting & filtering",
      "Seamless multi-step checkout flow",
      "Real-time inventory tracking",
      "Redux Toolkit state modules with client-server sync",
      "Responsive layouts using Next.js layout structures",
    ],
    challenges:
      "Keeping cart, catalog, and inventory perfectly in sync across a fast, image-heavy storefront without janky re-renders.",
    solutions:
      "Normalized Redux stores with memoized selectors and server-synced inventory endpoints, plus optimized image loading for buttery browsing.",
    architecture:
      "Next.js layout-driven pages, Redux Toolkit slices, and REST sync endpoints for checkout and inventory.",
    gradient: "from-emerald-500/20 via-lime-500/10 to-transparent",
  },
  {
    slug: "aquaride",
    title: "AquaRide",
    tagline: "On-demand water delivery, ride-hailing style",
    description:
      "An on-demand water logistics application modeled after ride-sharing frameworks, with split Owner/Administrator roles, real-time fulfillment pipelines, and automated synchronization engines.",
    status: "Live",
    featured: true,
    image: "/aquaride.png",
    stack: ["Next.js", "TypeScript", "Firebase", "Redux Toolkit"],
    features: [
      "Ride-hailing style on-demand water delivery",
      "Split-role Owner & Administrator control flows",
      "Real-time fulfillment pipeline tracking",
      "Firebase-powered synchronization engine",
      "TypeScript state-observation logic",
    ],
    challenges:
      "Coordinating live order state across owners, admins, and fulfillment in a way that never showed stale data.",
    solutions:
      "Firebase real-time listeners feeding a typed Redux layer, with role-scoped views and automated sync jobs.",
    architecture:
      "Next.js + TypeScript frontend, Firebase real-time DB/auth, Redux Toolkit for observable client state.",
    live: "https://aquaridegh.com",
    gradient: "from-cyan-500/20 via-emerald-500/10 to-transparent",
  },
  {
    slug: "tadbeer-resource",
    title: "Tadbeer Resource Platform",
    tagline: "NGO community resource management",
    description:
      "A full-stack NGO platform with modular portals for scholarship applications, real-time grant processing, and scheduled consultations — with role-based access, JWT auth, and dynamic uploads.",
    status: "Production",
    image: "/tadbeer.png",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Multer"],
    features: [
      "Scholarship application & grant processing portals",
      "Scheduled user consultations",
      "Role-based entry gates",
      "Secure JWT authentication",
      "Dynamic file uploads via Multer",
    ],
    challenges:
      "Serving multiple user roles with distinct workflows and secure document handling in one coherent platform.",
    solutions:
      "Modular portal architecture with JWT-guarded, role-based routes and a Multer-backed upload pipeline with status tracking.",
    architecture:
      "MERN stack — React frontend, Express REST API, MongoDB, JWT middleware, Redux Toolkit stores.",
    live: "https://tadbeerresource.com",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
  },
  {
    slug: "side-quest",
    title: "Side Quest",
    tagline: "E-commerce hub with on-demand delivery",
    description:
      "A shopping-center hub where clients buy groceries and instantly match with local delivery drivers through an active on-demand fulfillment pipeline, with optimized routing and secure state paths.",
    status: "Development",
    image: "/side-quest.svg",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Redux Toolkit"],
    features: [
      "Product curation & procurement workflows",
      "On-demand driver matching",
      "Active fulfillment pipeline",
      "Optimized Next.js routing layers",
      "Secure Redux Toolkit state paths",
    ],
    challenges:
      "Matching buyers with available drivers in real time while keeping the shopping experience fast.",
    solutions:
      "A matching pipeline layered over optimized routing, with Redux-managed order and driver state.",
    architecture:
      "Next.js App Router, TypeScript, Redux Toolkit, modular routing layers.",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    slug: "digital-eve",
    title: "Digital Eve",
    tagline: "3D custom apparel commerce (FYP)",
    description:
      "A dynamic 3D e-commerce platform where users design, customize, and order top-wear apparel with real-time previews — built as my Final Year Project.",
    status: "Live",
    image: "/digital-eve.png",
    stack: ["Next.js", "Clerk.js", "Tailwind CSS", "Three.js", "Node.js"],
    features: [
      "Interactive 3D apparel customization",
      "Real-time design previews",
      "Clerk-powered authentication",
      "Three.js rendering pipeline",
      "Order & checkout flow",
    ],
    challenges:
      "Rendering performant, interactive 3D previews in the browser without hurting load times.",
    solutions:
      "Three.js scene optimizations, lazy-loaded assets, and Clerk-managed auth for a smooth custom-order flow.",
    architecture:
      "Next.js + Three.js frontend, Clerk auth, Node.js backend.",
    live: "https://digital-eve.vercel.app",
    gradient: "from-emerald-500/20 via-purple-500/10 to-transparent",
  },
  {
    slug: "jmk",
    title: "JMK — Islamic Teaching Institute",
    tagline: "Production platform for an education institute",
    description:
      "A production-grade web platform for an Islamic teaching institute with clean user pathways, responsive layouts, and dynamic resource handling for students and administrators.",
    status: "Production",
    image: "/jmk.svg",
    stack: ["Next.js", "Tailwind CSS", "Redux Toolkit"],
    features: [
      "Clean student & admin user pathways",
      "Dynamic resource handling",
      "Streamlined responsive layouts",
      "Optimized content access",
      "Production deployment",
    ],
    challenges:
      "Organizing large amounts of teaching content into intuitive, fast-loading pathways.",
    solutions:
      "Structured resource handling with Next.js and Redux Toolkit for clean, responsive content delivery.",
    architecture:
      "Next.js App Router, Tailwind CSS, Redux Toolkit.",
    gradient: "from-emerald-500/20 via-amber-500/10 to-transparent",
  },
];
