import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/utils";
import { controlSize, type ControlSize } from "./_control-variants";

/**
 * Button atom. 8-state contract (CLAUDE.md §10):
 *   default / hover / focus-visible / active / selected (via data-active)
 *   / disabled / loading / error (via aria-invalid).
 *
 * Sizing reads from --control-* tokens via the shared `controlSize` map.
 * Default size: "adaptive" (h-12 mobile / h-14 desktop).
 */

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "border border-transparent",
    "transition-[transform,background-color,color,border-color,box-shadow]",
    "duration-[var(--duration-quick)] ease-[var(--ease-out-snap)]",
    "outline-none",
    "active:scale-[0.98]",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:border-destructive",
    "[&_svg]:shrink-0",
  ),
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-deep",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent-deep",
        outline:
          "border-border-strong bg-transparent text-foreground hover:bg-muted",
        ghost:
          "bg-transparent text-foreground hover:bg-muted",
        link:
          "text-primary underline-offset-4 hover:underline px-0 h-auto",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        "on-dark":
          "bg-on-forest text-surface-forest hover:bg-on-forest/90",
      },
      size: controlSize,
    },
    defaultVariants: {
      variant: "primary",
      size: "adaptive",
    },
  },
);

interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "size">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  size?: ControlSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        data-loading={loading || undefined}
        disabled={disabled || loading}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading && <Icon name="spinner" className="animate-spin" />}
            {children}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
