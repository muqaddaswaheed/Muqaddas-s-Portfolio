"use client";

const tech = [
  "Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "MongoDB",
  "Firebase", "Supabase", "Redux Toolkit", "Tailwind CSS", "ShadCN UI",
  "JWT", "REST APIs", "WebSockets", "Webhooks", "Git", "Vercel",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.01] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {[...tech, ...tech].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-lg font-medium text-white/30"
          >
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-emerald/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
