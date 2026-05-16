import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { controlSize } from "./_control-variants";

const inputVariants = cva(
  cn(
    "flex w-full min-w-0 bg-surface text-foreground",
    "border-[var(--control-border-w)] border-input",
    "transition-[border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-out-snap)]",
    "outline-none",
    "placeholder:text-muted-foreground",
    "hover:border-border-strong",
    "focus-visible:border-primary",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:border-destructive",
  ),
  {
    variants: {
      size: controlSize,
    },
    defaultVariants: { size: "adaptive" },
  },
);

interface InputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size">,
    VariantProps<typeof inputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, type = "text", ...props }, ref) => {
    return <input ref={ref} type={type} className={cn(inputVariants({ size }), className)} {...props} />;
  },
);
Input.displayName = "Input";

export { inputVariants };
