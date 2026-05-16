import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingVariant = "display" | "h1" | "h2" | "h3" | "h4";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  variant?: HeadingVariant;
}

const VARIANT_CLASS: Record<HeadingVariant, string> = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
};

export function Heading({ as = 2, variant, className, ...props }: HeadingProps) {
  const inferred: HeadingVariant = variant ?? (`h${as}` as HeadingVariant);
  const Component = `h${as}` as "h1" | "h2" | "h3" | "h4";
  return <Component className={cn(VARIANT_CLASS[inferred], className)} {...props} />;
}
