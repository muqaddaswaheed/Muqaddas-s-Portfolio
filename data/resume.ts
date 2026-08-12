/** Structured résumé data — transcribed directly from Muqaddas_Waheed_CV.pdf */

export const resume = {
  name: "Muqaddas Waheed",
  role: "Full Stack MERN Developer",
  phone: "+92 322 2450019",
  location: "Rawalpindi, Pakistan",
  email: "muqaddaswaheed0@gmail.com",
  github: "github.com/muqaddaswaheed",
  linkedin: "linkedin.com/in/muqaddas-waheed",

  summary:
    "Dedicated MERN Stack Developer with hands-on experience building scalable and secure web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Skilled in developing RESTful APIs, implementing JWT-based authentication, and managing application state with Redux Toolkit. Experienced in delivering responsive, user-focused solutions while maintaining clean, maintainable code and optimized performance. A quick learner with strong problem-solving abilities and the ability to collaborate effectively within development teams.",

  experience: [
    {
      role: "MERN Stack Developer",
      company: "Deventia Tech",
      period: "Apr 2026 — Present",
      points: [
        "Developing scalable web applications and high-performance user interfaces.",
        "Implementing modern frontend state and robust backend services while optimizing application speeds.",
        "Streamlining team git workflows and collaborating on product features in an agile engineering cycle.",
      ],
    },
    {
      role: "MERN Stack Developer & Intern → Junior Developer",
      company: "BXTrack Solutions",
      period: "Nov 2025 — Mar 2026",
      points: [
        "Initiated and developed responsive React-based applications from scratch with scalable component structures.",
        "Implemented modern UI/UX practices using Tailwind CSS and Bootstrap.",
        "Built and maintained full-stack apps with secure authentication and well-structured RESTful APIs.",
        "Promoted to Junior Developer to drive production pipelines and complex cross-platform state integrations.",
      ],
    },
  ],

  education: [
    {
      school: "PMAS Arid Agriculture University, Rawalpindi",
      degree: "BS in Computer Science",
      period: "Sep 2020 — May 2024",
      detail: "GPA: 3.9 / 4.0",
    },
  ],

  certifications: [
    {
      name: "NFTP Web Development Course",
      issuer: "Certification",
      period: "Aug 2023 — Oct 2023",
    },
  ],

  skills: [
    { category: "Programming Languages", items: ["JavaScript", "TypeScript"] },
    {
      category: "Frontend",
      items: ["Next.js", "React.js", "Tailwind CSS", "Redux Toolkit", "Context API", "ShadCN", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Multer", "Webhooks", "WebSockets"],
    },
    { category: "Database", items: ["MongoDB", "Firebase", "Supabase"] },
    { category: "Tools", items: ["Git", "GitHub", "Postman", "Vercel"] },
  ],

  softSkills: [
    "Problem-Solving & Analytical Thinking",
    "Clean Code & Attention to Detail",
    "Communication & Team Collaboration",
    "Time Management & Deadline-Oriented",
    "Adaptability & Continuous Learning",
    "Leadership Ethics & Management",
  ],

  // Compact project highlights for the résumé (drawn from full case studies).
  projects: [
    { name: "SOS Box Thérapeutique", tech: "Next.js · TypeScript · Node.js", note: "Boxing-therapy booking with solo/duo/trio tiers & coach panel." },
    { name: "AquaRide", tech: "Next.js · TypeScript · Firebase", note: "On-demand water delivery with real-time fulfilment & split roles." },
    { name: "Tadbeer Resource Platform", tech: "MERN · JWT · Multer", note: "NGO platform: scholarships, grants & role-based portals." },
    { name: "Digital Eve (FYP)", tech: "Next.js · Three.js · Clerk", note: "3D custom-apparel commerce with real-time previews." },
  ],
};
