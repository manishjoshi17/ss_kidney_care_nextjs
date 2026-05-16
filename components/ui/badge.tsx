import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-[var(--radius-chip)] px-2.5 py-1 text-tiny font-medium",
  {
    variants: {
      variant: {
        default: "bg-muted text-foreground",
        primary: "bg-primary-soft text-primary-deep",
        accent: "bg-accent-100 text-accent-700",
        outline: "border border-border text-foreground",
        success: "bg-success/15 text-success",
        warning: "bg-warning/20 text-warning-foreground",
        destructive: "bg-destructive/15 text-destructive",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
