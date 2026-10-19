export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: "Production" | "Development" | "Live";
  featured?: boolean;
  image?: string;
  /** The situation the software had to solve — stated before any tech. */
  problem: string;
  /** How it was solved, in product terms. */
  solution: string;
  stack: string[];
  features: string[];
  challenges: string;
  architecture: string;
  /** What I personally built. Recruiters ask this first — keep it specific. */
  role: string;
  contribution: string[];
  /** Outcomes only. No invented metrics — see the note at the bottom of this file. */
  results: string[];
  live?: string;
  /** A real repository URL. Omit when there isn't one, and use repoNote instead. */
  github?: string;
  /** Shown in place of a GitHub link when the code isn't publicly available. */
  repoNote?: string;
  gradient: string;
};

// Same order, names, stacks and links as the Projects section of the CV.
export const projects: Project[] = [
  {
    slug: "aquaride",
    title: "AquaRide",
    tagline: "Water Delivery Application",
    description:
      "An on-demand water delivery platform with separate Owner and Administrator workflows and real-time fulfillment management — secure role-based flows, responsive interfaces, and Firebase-powered synchronization for efficient order and delivery operations.",
    status: "Live",
    featured: true,
    image: "/aquaride.png",
    problem:
      "Water delivery has to be dispatched the way rides are — an order matched to a driver and tracked while it moves. Owners and administrators need different views of that same order, and any view reading stale state leads to a wrong dispatch decision that costs a delivery run.",
    solution:
      "Firebase real-time listeners push order changes straight into a typed Redux layer, so every role renders from one live source of truth. Owner and administrator surfaces are scoped views over that shared state rather than separate copies of it, and sync jobs reconcile the pipeline automatically.",
    stack: ["Next.js", "TypeScript", "Firebase", "Redux Toolkit"],
    features: [
      "On-demand water ordering and delivery",
      "Separate Owner & Administrator workflows",
      "Real-time fulfillment management",
      "Secure role-based flows",
      "Firebase-powered order & delivery synchronization",
    ],
    challenges:
      "Keeping owner and admin views consistent without either polling the backend or letting listener updates thrash the UI. Order state moves through several stages, and each role can act on it mid-flight.",
    architecture:
      "Next.js + TypeScript frontend, Firebase real-time DB/auth, Redux Toolkit for observable client state.",
    role: "Sole developer — end to end",
    contribution: [
      "Modelled the order lifecycle and the state transitions each role is allowed to trigger.",
      "Wired Firebase real-time listeners into typed Redux slices as a single source of truth.",
      "Built both role surfaces — the owner console and the administrator control flow.",
      "Implemented the automated sync engine that reconciles the fulfillment pipeline.",
      "Typed the state-observation layer so invalid transitions fail at compile time.",
    ],
    results: [
      "Live in production at aquaridegh.com.",
      "Owner and admin views read the same live order state — stale-data dispatch errors are structurally prevented, not caught by refresh.",
      "Order status updates propagate without a manual refresh on either surface.",
    ],
    live: "https://aquaridegh.com/",
    repoNote: "Private — client codebase",
    gradient: "from-cyan-500/20 via-emerald-500/10 to-transparent",
  },
  {
    slug: "aurawear",
    title: "AuraWear",
    tagline: "Fashion e-commerce platform",
    description:
      "A production-grade fashion e-commerce platform with dynamic product catalogs, responsive layouts, and optimized checkout workflows — scalable state management and client-server synchronization for seamless shopping and real-time inventory handling.",
    status: "Live",
    image: "/aurawear.png",
    problem:
      "A fashion storefront lives or dies on browsing speed, but it's image-heavy by definition. It also has to keep cart, catalog, and stock agreeing with each other — when the client's view of inventory drifts from the server's, the store oversells and someone gets an apology email instead of a garment.",
    solution:
      "Normalised Redux stores with memoised selectors keep catalog, cart, and inventory reading from one shape, so filtering and sorting don't trigger cascading re-renders. Inventory is re-checked against server endpoints at checkout rather than trusted from the client's cached copy.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Redux Toolkit"],
    features: [
      "Dynamic product catalogs with sorting & filtering",
      "Optimized multi-step checkout workflow",
      "Real-time inventory handling",
      "Redux Toolkit state with client-server sync",
      "Responsive layouts built on Next.js layout structures",
    ],
    challenges:
      "Multi-criteria filtering over an image-heavy catalog re-rendered far more of the tree than it needed to, and cached stock counts could disagree with the server by the time a customer reached checkout.",
    architecture:
      "Next.js layout-driven pages, Redux Toolkit slices, and REST sync endpoints for checkout and inventory.",
    role: "Sole developer — end to end",
    contribution: [
      "Normalised the Redux store shape and wrote memoised selectors for catalog, cart, and inventory.",
      "Built the multi-criteria sorting and filtering layer over the catalog.",
      "Built the multi-step checkout flow with server-side inventory re-validation.",
      "Optimised image loading so browsing stays fast on a media-heavy storefront.",
      "Built responsive layouts on Next.js layout structures and deployed to production.",
    ],
    results: [
      "Live in production at aurawear-fe-smoky.vercel.app with a working end-to-end checkout.",
      "Stock is confirmed server-side at checkout, so the store doesn't oversell from a stale client cache.",
      "Filtering and sorting run off memoised selectors instead of re-rendering the catalog tree.",
    ],
    live: "https://aurawear-fe-smoky.vercel.app/",
    repoNote: "Private — client codebase",
    gradient: "from-emerald-500/20 via-lime-500/10 to-transparent",
  },
  {
    slug: "boxing-therapie-premium",
    title: "Boxing Therapie Premium",
    tagline: "Full-stack booking platform",
    description:
      "A full-stack booking platform with a customer-facing website and an administrative panel for managing training sessions and reservations — user booking workflows, slot management, and admin controls that streamline appointment scheduling.",
    status: "Live",
    image: "/sosbox-therapeutique.png",
    problem:
      "Training sessions are sold in different group sizes at different rates, and a single coach's calendar has to stay conflict-free while several clients book against the same slots at once. Pricing worked out per enquiry doesn't scale, and a double-booking is only discovered when two clients arrive for the same hour.",
    solution:
      "A customer-facing site handles the booking workflow end to end, while an admin panel exposes availability as editable slots. Pricing is derived from session size at booking time, and reservations take a server-side lock on the slot before confirming, so concurrent bookings resolve to one winner instead of a collision.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
    features: [
      "Customer-facing website with session booking workflow",
      "Administrative panel for sessions & reservations",
      "Slot management with real-time availability",
      "Automatic pricing by session size (solo / duo / trio)",
      "Fully responsive, accessible UI",
    ],
    challenges:
      "Two concurrent clients could reserve the same slot between the availability read and the write. Optimistic UI made the admin panel feel instant but meant the interface could show a booking the server had already rejected.",
    architecture:
      "Next.js App Router frontend with typed REST endpoints, server actions for booking mutations, and a role-separated admin panel.",
    role: "Sole developer — end to end",
    contribution: [
      "Designed the booking data model and the session/pricing rules it enforces.",
      "Built the customer booking workflow from slot selection to confirmation.",
      "Built the admin panel: availability editing, reservation management, and schedule overrides.",
      "Implemented server-side slot locking to make concurrent reservations safe.",
      "Shipped and deployed the production site on the studio's own domain.",
    ],
    results: [
      "Live in production at boxingtherapiepremium.ch, handling the studio's real bookings.",
      "Pricing is applied automatically at booking time instead of being quoted per enquiry.",
      "Staff change availability through the admin panel — no developer involvement for a schedule change.",
      "Slot locking removes the double-booking class of error rather than mitigating it.",
    ],
    live: "https://boxingtherapiepremium.ch/",
    repoNote: "Private — client codebase",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    slug: "tadbeer-resource",
    title: "Tadbeer Resource Platform",
    tagline: "NGO management platform",
    description:
      "A full-stack NGO management platform with dedicated Admin and User dashboards, scholarship and grant workflows, secure JWT authentication, protected routes, role-based access control, and dynamic file uploads — integrated over RESTful APIs with Redux Toolkit state.",
    status: "Live",
    featured: true,
    image: "/tadbeer.png",
    problem:
      "Scholarships and grants each have their own workflow, reviewers, and document requirements — but an applicant should only ever have one account. Applicants upload identity and financial documents, so a role boundary that leaks is a data-protection failure, not a UI bug.",
    solution:
      "Dedicated Admin and User dashboards over one identity: applicants see a single account, while JWT-guarded role gates and protected routes decide which dashboard, route, and document each request may reach. Uploads run through a Multer pipeline with per-application status tracking so reviewers work from state, not inboxes.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "JWT", "Multer"],
    features: [
      "Dedicated Admin & User dashboards",
      "Scholarship and grant workflows",
      "Secure JWT authentication & protected routes",
      "Role-based access control",
      "Dynamic file uploads via Multer",
    ],
    challenges:
      "Several workflows with different reviewer chains had to share one auth model without the role checks turning into scattered per-route conditionals that drift out of sync.",
    architecture:
      "MERN stack — React frontend, Express REST API, MongoDB, JWT middleware, Redux Toolkit stores.",
    role: "Sole developer — end to end",
    contribution: [
      "Designed the MongoDB schema covering applicants, applications, scholarships, and grants.",
      "Built the Express REST API and centralised JWT role middleware guarding every protected route.",
      "Built the Multer upload pipeline with per-application document status tracking.",
      "Built the Admin and User dashboards and the reviewer-facing processing views.",
      "Integrated the API with Redux Toolkit for reliable client-server state.",
    ],
    results: [
      "Live in production at tadbeerresource.com.",
      "Scholarship and grant workflows run on one platform and one applicant account instead of parallel manual processes.",
      "Document access is enforced by centralised middleware, so a new route inherits the role boundary by default.",
      "Reviewers track application state in-platform rather than through email attachments.",
    ],
    live: "https://tadbeerresource.com",
    repoNote: "Private — client codebase",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
  },
  {
    slug: "side-quest",
    title: "Side Quest",
    tagline: "E-commerce & local delivery platform",
    description:
      "An e-commerce and local delivery platform supporting product purchasing and on-demand driver matching — optimized routing structures, interactive user workflows, and centralized state management with Next.js and Redux Toolkit.",
    status: "Production",
    image: "/side-quest.png",
    problem:
      "Groceries need a driver assigned at checkout, not scheduled afterwards — but driver availability changes by the minute. Matching has to happen against live supply without the shopper waiting on it, and a store admin needs to see the resulting pipeline as it moves.",
    solution:
      "An on-demand matching pipeline runs over optimised Next.js routing layers, with order and driver state held in centralized Redux Toolkit slices. Store administration is a separate surface onto the same pipeline, so operators watch fulfillment without touching the shopping flow.",
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    features: [
      "Product purchasing & procurement workflows",
      "On-demand driver matching",
      "Active fulfillment pipeline",
      "Optimized Next.js routing structures",
      "Centralized Redux Toolkit state",
    ],
    challenges:
      "Matching against a driver pool that changes while the shopper is still checking out, without making checkout wait for the match to resolve.",
    architecture:
      "Next.js App Router, TypeScript, Redux Toolkit, modular routing layers.",
    role: "Sole developer — end to end",
    contribution: [
      "Built the product purchasing and procurement workflows.",
      "Built the driver-matching pipeline and the order state machine behind it.",
      "Built the store-admin surface for monitoring active fulfillment.",
      "Structured the Redux Toolkit state and the routing layers it sits behind.",
    ],
    results: [
      "In production — the storefront and store-admin surfaces are deployed and demo-able today.",
      "Driver matching runs off live availability rather than a scheduled assignment step.",
      "Store operators track the fulfillment pipeline on a surface separate from the shopping flow.",
    ],
    live: "https://sidequest-roan-one.vercel.app/storeAdmin",
    repoNote: "Private — client codebase",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    slug: "digital-eve",
    title: "Digital Eve",
    tagline: "3D fashion e-commerce (Final Year Project)",
    description:
      "A 3D fashion e-commerce platform with real-time apparel customization — users design, customize, and order top-wear with live 3D previews. Built as my Final Year Project.",
    status: "Live",
    image: "/digital-eve.png",
    problem:
      "Nobody orders custom apparel they can't picture, and a flat mockup doesn't show how a design sits on a garment. The fix is an interactive 3D preview — which is also the single heaviest thing you can put on an e-commerce page, competing directly with the load time that keeps shoppers there.",
    solution:
      "A Three.js preview renders the customer's design on the garment in real time, with the scene optimised and its assets lazy-loaded so the 3D cost is paid only when the customiser is opened. Clerk handles auth so a design survives sign-in and carries into checkout.",
    stack: ["Next.js", "Three.js", "Clerk.js", "Tailwind CSS", "Node.js"],
    features: [
      "Real-time 3D apparel customization",
      "Live design previews",
      "Clerk-powered authentication",
      "Three.js rendering pipeline",
      "Order & checkout flow",
    ],
    challenges:
      "Keeping the 3D scene interactive on mid-range hardware while stopping its assets from blocking first paint on pages that don't need the renderer at all.",
    architecture:
      "Next.js + Three.js frontend, Clerk auth, Node.js backend.",
    role: "Sole developer — Final Year Project",
    contribution: [
      "Built the Three.js rendering pipeline and the interactive customisation controls.",
      "Optimised the scene and lazy-loaded 3D assets to keep them off the critical path.",
      "Integrated Clerk auth so an in-progress design persists across sign-in.",
      "Built the order and checkout flow that turns a saved design into an order.",
    ],
    results: [
      "Shipped and deployed as my Final Year Project, live at digital-eve.vercel.app.",
      "Customers see their design on the garment before ordering, in real time.",
      "3D assets load on demand, so pages outside the customiser never pay the renderer's weight.",
    ],
    live: "https://digital-eve.vercel.app",
    repoNote: "Repository available on request",
    gradient: "from-emerald-500/20 via-purple-500/10 to-transparent",
  },
];

/** Smaller work listed under "Additional Projects" on the CV — no full case study. */
export type MiniProject = {
  title: string;
  tagline: string;
  description: string;
  /** Add the public URL here and the card becomes a link. */
  live?: string;
};

export const additionalProjects: MiniProject[] = [
  {
    title: "JMK",
    tagline: "Islamic Teaching Institute",
    description:
      "A production web platform for an Islamic teaching institute, with responsive layouts and structured content management.",
  },
];

/*
 * On `results`: every line above is verifiable from what actually shipped — no
 * invented percentages. The strongest additions you can make are real numbers
 * you can defend in an interview, e.g.:
 *   - bookings or orders processed per month
 *   - registered users / applications submitted
 *   - measured Lighthouse or Core Web Vitals figures before and after
 *   - hours of manual admin work removed per week (ask the client)
 * Add them as extra strings in the `results` array — one claim per line.
 *
 * On `repoNote`: replace it with a real `github` URL on any project whose code
 * you can show. A public repo beats a "private" note every time.
 */
