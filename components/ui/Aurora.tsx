"use client";

/** Animated aurora / gradient-glow background used behind the hero. */
export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] animate-float rounded-full bg-emerald/20 blur-[130px]" />
      <div
        className="absolute -right-20 top-20 h-[420px] w-[420px] animate-float rounded-full bg-teal-500/15 blur-[130px]"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[380px] w-[380px] animate-float rounded-full bg-emerald-glow/15 blur-[120px]"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute inset-0 opacity-[0.15] noise mix-blend-overlay" />
    </div>
  );
}
