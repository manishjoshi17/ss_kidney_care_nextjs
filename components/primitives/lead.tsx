import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Lead({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-lead max-w-[60ch]", className)} {...props} />;
}
