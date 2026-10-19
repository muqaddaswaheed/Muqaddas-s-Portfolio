// Source of truth: public/MuqaddasWaheed.pdf (the CV). Keep this file in sync with it.
export const site = {
  name: "Muqaddas Waheed",
  role: "Senior MERN Stack Developer",
  location: "Rawalpindi, Pakistan",
  email: "muqaddaswaheed0@gmail.com",
  phone: "03222450019",
  phoneHref: "tel:+923222450019",
  url: "https://muqaddaswaheed.dev",
  // The one line the homepage leads with — keep it concrete, not aspirational.
  pitch:
    "Building scalable web applications, REST APIs, Admin Panels and Payment Integrations.",
  tagline:
    "Senior MERN Stack Developer building scalable, secure web applications with React.js, Next.js, Node.js, Express.js and MongoDB.",
  available: true,
  resume: "/MuqaddasWaheed.pdf",
  // Filename the browser saves the CV as.
  resumeFileName: "Muqaddas_Waheed_CV.pdf",
  // Paste a Cal.com / Calendly link here to make "Book a Call" open a real
  // scheduler. Until then it falls back to the contact page.
  booking: "",
  socials: {
    github: "https://github.com/muqaddaswaheed",
    linkedin: "https://www.linkedin.com/in/muqaddas-waheed",
    email: "mailto:muqaddaswaheed0@gmail.com",
  },
  roles: [
    "Senior MERN Stack Developer",
    "Next.js Architect",
    "React & TypeScript Engineer",
    "Backend & API Specialist",
    "Real-time Systems Builder",
  ],
};

export type Site = typeof site;
