import { cn } from "@/lib/utils";

/**
 * "M." wordmark — a heavy, slanted M and a round accent dot (teal in the light
 * theme, emerald in dark). Put `group` on the wrapping link and the dot hops
 * on hover. Size it with a text-* class; everything scales in `em`.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Muqaddas Waheed"
      className={cn(
        "inline-flex select-none items-baseline text-[2rem] font-extrabold leading-none tracking-tight text-ink",
        className
      )}
    >
      {/* Skewed from the baseline so the foot stays put and the top leans right */}
      <span aria-hidden className="inline-block origin-bottom -skew-x-[10deg]">
        M
      </span>
      <span
        aria-hidden
        className="ml-[0.07em] inline-block h-[0.2em] w-[0.2em] rounded-full bg-accent transition-transform duration-300 ease-out motion-safe:group-hover:-translate-y-[0.18em]"
      />
    </span>
  );
}
