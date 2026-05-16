import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  index?: string;
}

/**
 * Section eyebrow label. On lg:+ the index hangs into the gutter
 * via negative margin, breaking the perfect-grid feel (CLAUDE.md §10 asymmetry).
 */
export function Eyebrow({ index, className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-eyebrow flex items-baseline gap-3",
        "text-foreground-muted",
        index && "lg:-ml-6",
        className,
      )}
      {...props}
    >
      {index && <span className="text-accent">{index}</span>}
      {index && <span aria-hidden className="h-px w-6 bg-foreground-muted/40" />}
      <span>{children}</span>
    </p>
  );
}
