import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({ size = "default", className, ...props }: ContainerProps) {
  const sizeClass =
    size === "narrow"
      ? "container-narrow"
      : size === "wide"
        ? "container-wide"
        : "container-default";
  return <div className={cn(sizeClass, className)} {...props} />;
}
