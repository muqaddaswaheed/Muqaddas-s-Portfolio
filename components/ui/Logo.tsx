import { cn } from "@/lib/utils";

/** MW monogram mark — geometric, emerald, premium. */
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
          <defs>
            <linearGradient id="mw-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#34d399" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
          </defs>
          <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill="url(#mw-g)" />
          <rect
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="11"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.18"
          />
          {/* M over W monogram (single mirrored zigzag) */}
          <path
            d="M9 13 L9 27 M9 13 L20 22 L31 13 M31 13 L31 27 M9 27 L20 20 L31 27"
            fill="none"
            stroke="#04160f"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showWord && (
        <span className="text-lg font-semibold tracking-tight text-white">
          Muqaddas<span className="text-emerald">.</span>
        </span>
      )}
    </span>
  );
}
