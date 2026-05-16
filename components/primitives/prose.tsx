import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Prose({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("prose-content", className)} {...props} />;
}
