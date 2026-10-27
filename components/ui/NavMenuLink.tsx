import Link from "next/link";
import type { SubLink } from "@/data/nav";
import { cn } from "@/lib/utils";

/** One row of a nav dropdown: icon tile, label and a one-line description. */
export default function NavMenuLink({ link, active }: { link: SubLink; active: boolean }) {
  return (
    <Link
      href={link.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group/item flex items-start gap-3 rounded-lg p-2.5 transition-colors duration-200",
        active ? "bg-accent-light/40" : "hover:bg-paper-hover"
      )}
    >
      <span
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-lg border transition-colors duration-200",
          active
            ? "border-accent/25 bg-paper text-accent"
            : "border-line bg-paper-alt text-ink-muted group-hover/item:border-accent/25 group-hover/item:bg-paper group-hover/item:text-accent"
        )}
      >
        <link.icon className="h-4 w-4" />
      </span>
      <div>
        <p className={cn("text-sm font-medium", active ? "text-accent-text" : "text-ink")}>
          {link.label}
        </p>
        <p className="mt-0.5 text-xs text-ink-muted">{link.desc}</p>
      </div>
    </Link>
  );
}
