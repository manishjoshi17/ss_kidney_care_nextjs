import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          "flex w-full min-w-0 bg-surface text-foreground",
          "border-[var(--control-border-w)] border-input",
          "rounded-[var(--control-radius-md)] sm:rounded-[var(--control-radius-lg)]",
          "px-[var(--control-px-md)] sm:px-[var(--control-px-lg)] py-3",
          "text-[length:var(--control-font-md)]",
          "transition-[border-color] duration-[var(--duration-fast)] ease-[var(--ease-out-snap)]",
          "outline-none placeholder:text-muted-foreground",
          "hover:border-border-strong focus-visible:border-primary",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "aria-invalid:border-destructive",
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";
