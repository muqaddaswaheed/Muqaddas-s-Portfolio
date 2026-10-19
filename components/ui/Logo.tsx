import { cn } from "@/lib/utils";

/**
 * MW monogram mark. Light theme: near-black tile, white monogram, teal full
 * stop. Dark theme: the original emerald tile. Colours come from --logo-* tokens.
 */
export default function Logo({
  className,
  showWord = true,
}: {
  className?: string;
  showWord?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="relative grid h-9 w-9 place-items-center">
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden>
          <rect
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="10"
            style={{ fill: "rgb(var(--logo-tile))" }}
          />
          {/* M over W monogram (single mirrored zigzag) */}
          <path
            d="M9 13 L9 27 M9 13 L20 22 L31 13 M31 13 L31 27 M9 27 L20 20 L31 27"
            fill="none"
            style={{ stroke: "rgb(var(--logo-mark))" }}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showWord && (
        <span className="text-lg font-semibold tracking-tight text-ink">
          Muqaddas<span className="text-accent">.</span>
        </span>
      )}
    </span>
  );
}
