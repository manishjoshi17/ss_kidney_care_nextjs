import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type SectionSurface = "default" | "surface" | "cream" | "mint" | "sky" | "forest" | "navy";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  surface?: SectionSurface;
  spacing?: "default" | "tight" | "loose" | "none";
}

const SURFACE_CLASSES: Record<SectionSurface, string> = {
  default: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  cream: "bg-surface-cream text-on-cream",
  mint: "bg-surface-mint text-on-mint",
  sky: "bg-surface-sky text-on-sky",
  forest: "bg-surface-forest text-on-forest",
  navy: "bg-surface-navy text-on-navy",
};

const SPACING_CLASSES: Record<NonNullable<SectionProps["spacing"]>, string> = {
  default: "py-section",
  tight: "py-block",
  loose: "py-section",
  none: "",
};

export function Section({
  as: Component = "section",
  surface = "default",
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      data-surface={surface === "default" ? undefined : surface}
      className={cn(
        SURFACE_CLASSES[surface],
        SPACING_CLASSES[spacing],
        "relative",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
