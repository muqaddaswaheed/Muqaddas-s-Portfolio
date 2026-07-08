"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  download?: boolean;
  external?: boolean;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  download,
  external,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: (e.clientX - (r.left + r.width / 2)) * 0.3, y: (e.clientY - (r.top + r.height / 2)) * 0.3 });
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";
  const styles = {
    primary:
      "bg-emerald text-ink-950 hover:bg-emerald-soft shadow-[0_0_30px_-8px_rgba(16,185,129,0.7)]",
    outline: "border border-white/15 text-white hover:border-emerald/50 hover:text-emerald",
    ghost: "text-white/70 hover:text-white",
  }[variant];

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.4 }}
      className={cn(base, styles, className)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {inner}
      </Link>
    );
  }
  return (
    <button onClick={onClick} type="button">
      {inner}
    </button>
  );
}
