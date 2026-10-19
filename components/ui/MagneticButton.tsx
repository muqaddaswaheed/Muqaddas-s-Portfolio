"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn, linkTarget } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  /** true, or the filename the browser should save the file as. */
  download?: boolean | string;
};

// How far the button leans toward the pointer: a fraction of the offset,
// capped so the pull stays a subtle nudge rather than a jump.
const PULL = 0.15;
const MAX_PULL = 6;
const clamp = (v: number) => Math.max(-MAX_PULL, Math.min(MAX_PULL, v));

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  download,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      x: clamp((e.clientX - (r.left + r.width / 2)) * PULL),
      y: clamp((e.clientY - (r.top + r.height / 2)) * PULL),
    });
  };

  const styles = {
    primary: "btn-primary",
    outline: "btn-secondary",
    ghost: "btn-ghost",
  }[variant];

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.4 }}
      // Framer owns `transform` here, so CSS only transitions colour/shadow.
      className={cn(
        "btn btn-lg transition-[background-color,border-color,color,box-shadow] duration-200",
        styles,
        className
      )}
    >
      {children}
    </motion.div>
  );

  // The outer element carries the focus ring; the inner one carries the look.
  const wrapper = "group inline-flex rounded-lg";

  if (!href) {
    return (
      <button onClick={onClick} type="button" className={wrapper}>
        {inner}
      </button>
    );
  }

  // Internal pages use client-side routing.
  if (href.startsWith("/") && !download) {
    return (
      <Link href={href} onClick={onClick} className={wrapper}>
        {inner}
      </Link>
    );
  }

  // Files, mailto:, tel: and external sites are plain anchors.
  return (
    <a
      href={href}
      onClick={onClick}
      download={download === true ? "" : download || undefined}
      {...linkTarget(href)}
      className={wrapper}
    >
      {inner}
    </a>
  );
}
