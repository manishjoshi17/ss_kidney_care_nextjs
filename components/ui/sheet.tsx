"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/utils";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;

export const SheetOverlay = forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

interface SheetContentProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  side?: "left" | "right";
  hideClose?: boolean;
}

export const SheetContent = forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(({ className, children, side = "left", hideClose = false, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <SheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-y-0 z-50 flex h-svh w-full flex-col bg-background shadow-[var(--shadow-3)]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "duration-[var(--duration-base)] ease-[var(--ease-spring-gentle)]",
        side === "left" && "left-0 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        side === "right" && "right-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
        className,
      )}
      {...props}
    >
      {children}
      {!hideClose && (
        <DialogPrimitive.Close
          aria-label="Close menu"
          className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface hover:bg-muted transition-colors"
        >
          <Icon name="close" size={20} />
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
SheetContent.displayName = DialogPrimitive.Content.displayName;

export function SheetTitle({ className, ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title className={cn("sr-only", className)} {...props} />;
}

export function SheetDescription({ className, ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description className={cn("sr-only", className)} {...props} />;
}
