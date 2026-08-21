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

export const projects: Project[] = [
  {
    slug: "sosbox-therapeutique",
    title: "SOS Box Thérapeutique",
    tagline: "Boxing therapy & coaching platform",
    description:
      "A boxing-therapy platform where clients book solo, duo, or trio sessions with automatic discount tiers, backed by a dedicated coach panel to manage bookings, availability, and pricing in real time.",
    status: "Live",
    featured: true,
    image: "/sosbox-therapeutique.png",
    problem:
      "Therapy sessions are sold in three group sizes, each at a different rate, and a single coach's calendar has to stay conflict-free while several clients book against the same slots at once. Pricing worked out per enquiry doesn't scale, and a double-booking is only discovered when two clients arrive for the same hour.",
    solution:
      "A rule-based discount engine derives the price from session size at booking time, and a coach panel exposes availability as editable slots. Reservations take a server-side lock on the slot before confirming, so concurrent bookings resolve to one winner instead of a collision.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
    features: [
      "Solo / Duo / Trio session booking with dynamic discount logic",
      "Dedicated coach panel to manage bookings & schedules",
      "Availability calendar with real-time slot updates",
      "Automated pricing tiers and confirmation flows",
      "Fully responsive, accessible therapy-brand UI",
    ],
    challenges:
      "Two concurrent clients could reserve the same slot between the availability read and the write. Optimistic UI made the coach panel feel instant but meant the interface could show a booking the server had already rejected.",
    architecture:
      "Next.js App Router frontend with typed REST endpoints, server actions for booking mutations, and a role-separated coach admin panel.",
    role: "Sole developer — end to end",
    contribution: [
      "Designed the booking data model and the session/pricing rules it enforces.",
      "Built the discount engine that maps session size to rate, so pricing is never entered by hand.",
      "Built the coach panel: availability editing, booking management, and schedule overrides.",
      "Implemented server-side slot locking to make concurrent reservations safe.",
      "Shipped and deployed the production site on the studio's own domain.",
    ],
    results: [
      "Live in production at boxingtherapiepremium.ch, handling the studio's real bookings.",
      "Group pricing is applied automatically at booking time instead of being quoted per enquiry.",
      "Coaches change their own availability through the panel — no developer involvement for a schedule change.",
      "Slot locking removes the double-booking class of error rather than mitigating it.",
    ],
    live: "https://boxingtherapiepremium.ch",
    repoNote: "Private — client codebase",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
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
    problem:
      "Water delivery has to be dispatched the way rides are — an order matched to a driver and tracked while it moves. Owners and administrators need different views of that same order, and any view reading stale state leads to a wrong dispatch decision that costs a delivery run.",
    solution:
      "Firebase real-time listeners push order changes straight into a typed Redux layer, so every role renders from one live source of truth. Owner and administrator surfaces are scoped views over that shared state rather than separate copies of it, and sync jobs reconcile the pipeline automatically.",
    stack: ["Next.js", "TypeScript", "Firebase", "Redux Toolkit"],
    features: [
      "Ride-hailing style on-demand water delivery",
      "Split-role Owner & Administrator control flows",
      "Real-time fulfillment pipeline tracking",
      "Firebase-powered synchronization engine",
      "TypeScript state-observation logic",
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
    live: "https://aquaridegh.com",
    repoNote: "Private — client codebase",
    gradient: "from-cyan-500/20 via-emerald-500/10 to-transparent",
  },
  {
    slug: "tadbeer-resource",
    title: "Tadbeer Resource Platform",
    tagline: "NGO community resource management",
    description:
      "A full-stack NGO platform with modular portals for scholarship applications, real-time grant processing, and scheduled consultations — with role-based access, JWT auth, and dynamic uploads.",
    status: "Live",
    featured: true,
    image: "/tadbeer.png",
    problem:
      "Scholarships, grants, and consultations each have their own workflow, reviewers, and document requirements — but an applicant should only ever have one account. Applicants upload identity and financial documents, so a role boundary that leaks is a data-protection failure, not a UI bug.",
    solution:
      "Three modular portals over one identity: applicants see a single account, while JWT-guarded role gates decide which portal, route, and document each request may reach. Uploads run through a Multer pipeline with per-application status tracking so reviewers work from state, not inboxes.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Multer"],
    features: [
      "Scholarship application & grant processing portals",
      "Scheduled user consultations",
      "Role-based entry gates",
      "Secure JWT authentication",
      "Dynamic file uploads via Multer",
    ],
    challenges:
      "Three workflows with different reviewer chains had to share one auth model without the role checks turning into scattered per-route conditionals that drift out of sync.",
    architecture:
      "MERN stack — React frontend, Express REST API, MongoDB, JWT middleware, Redux Toolkit stores.",
    role: "Sole developer — end to end",
    contribution: [
      "Designed the MongoDB schema covering applicants, applications, grants, and consultations.",
      "Built the Express REST API and centralised JWT role middleware guarding every portal route.",
      "Built the Multer upload pipeline with per-application document status tracking.",
      "Built all three React portals and the reviewer-facing processing views.",
      "Implemented consultation scheduling on top of the shared identity model.",
    ],
    results: [
      "Live in production at tadbeerresource.com.",
      "Three separate workflows run on one platform and one applicant account instead of three parallel manual processes.",
      "Document access is enforced by centralised middleware, so a new route inherits the role boundary by default.",
      "Reviewers track application state in-platform rather than through email attachments.",
    ],
    live: "https://tadbeerresource.com",
    repoNote: "Private — client codebase",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
  },
  {
    slug: "digital-eve",
    title: "Digital Eve",
    tagline: "3D custom apparel commerce (FYP)",
    description:
      "A dynamic 3D e-commerce platform where users design, customize, and order top-wear apparel with real-time previews — built as my Final Year Project.",
    status: "Live",
    image: "/digital-eve.png",
    problem:
      "Nobody orders custom apparel they can't picture, and a flat mockup doesn't show how a design sits on a garment. The fix is an interactive 3D preview — which is also the single heaviest thing you can put on an e-commerce page, competing directly with the load time that keeps shoppers there.",
    solution:
      "A Three.js preview renders the customer's design on the garment in real time, with the scene optimised and its assets lazy-loaded so the 3D cost is paid only when the customiser is opened. Clerk handles auth so a design survives sign-in and carries into checkout.",
    stack: ["Next.js", "Clerk.js", "Tailwind CSS", "Three.js", "Node.js"],
    features: [
      "Interactive 3D apparel customization",
      "Real-time design previews",
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
  {
    slug: "aurawear",
    title: "AuraWear",
    tagline: "Premium fashion e-commerce",
    description:
      "A production-grade e-commerce store for a premium fashion brand with fluid content architecture, dynamic catalog sorting, and seamless checkout flows with real-time inventory tracking.",
    status: "Live",
    image: "/aurawear.png",
    problem:
      "A fashion storefront lives or dies on browsing speed, but it's image-heavy by definition. It also has to keep cart, catalog, and stock agreeing with each other — when the client's view of inventory drifts from the server's, the store oversells and someone gets an apology email instead of a garment.",
    solution:
      "Normalised Redux stores with memoised selectors keep catalog, cart, and inventory reading from one shape, so filtering and sorting don't trigger cascading re-renders. Inventory is re-checked against server endpoints at checkout rather than trusted from the client's cached copy.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Redux Toolkit"],
    features: [
      "Dynamic catalog with multi-criteria sorting & filtering",
      "Seamless multi-step checkout flow",
      "Real-time inventory tracking",
      "Redux Toolkit state modules with client-server sync",
      "Responsive layouts using Next.js layout structures",
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
      "Live in production at aurawear-fe.vercel.app with a working end-to-end checkout.",
      "Stock is confirmed server-side at checkout, so the store doesn't oversell from a stale client cache.",
      "Filtering and sorting run off memoised selectors instead of re-rendering the catalog tree.",
    ],
    live: "https://aurawear-fe.vercel.app/",
    repoNote: "Private — client codebase",
    gradient: "from-emerald-500/20 via-lime-500/10 to-transparent",
  },
  {
    slug: "side-quest",
    title: "Side Quest",
    tagline: "E-commerce hub with on-demand delivery",
    description:
      "A shopping-center hub where clients buy groceries and instantly match with local delivery drivers through an active on-demand fulfillment pipeline, with optimized routing and secure state paths.",
    status: "Development",
    image: "/side-quest.png",
    problem:
      "Groceries need a driver assigned at checkout, not scheduled afterwards — but driver availability changes by the minute. Matching has to happen against live supply without the shopper waiting on it, and a store admin needs to see the resulting pipeline as it moves.",
    solution:
      "An on-demand matching pipeline runs over optimised Next.js routing layers, with order and driver state held in Redux Toolkit slices on secured paths. Store administration is a separate surface onto the same pipeline, so operators watch fulfillment without touching the shopping flow.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Redux Toolkit"],
    features: [
      "Product curation & procurement workflows",
      "On-demand driver matching",
      "Active fulfillment pipeline",
      "Optimized Next.js routing layers",
      "Secure Redux Toolkit state paths",
    ],
    challenges:
      "Matching against a driver pool that changes while the shopper is still checking out, without making checkout wait for the match to resolve.",
    architecture:
      "Next.js App Router, TypeScript, Redux Toolkit, modular routing layers.",
    role: "Sole developer — end to end",
    contribution: [
      "Built the product curation and procurement workflows.",
      "Built the driver-matching pipeline and the order state machine behind it.",
      "Built the store-admin surface for monitoring active fulfillment.",
      "Structured the Redux Toolkit state paths and the routing layers they sit behind.",
    ],
    results: [
      "In active development — the storefront and store-admin surfaces are deployed and demo-able today.",
      "Driver matching runs off live availability rather than a scheduled assignment step.",
      "Store operators track the fulfillment pipeline on a surface separate from the shopping flow.",
    ],
    live: "https://sidequest-roan-one.vercel.app/storeAdmin",
    repoNote: "Private — in development",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
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
