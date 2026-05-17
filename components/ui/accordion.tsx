"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b border-border", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between gap-4 py-5 text-left cursor-pointer",
        "text-h4 font-semibold text-foreground",
        "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out-snap)]",
        "hover:text-primary-deep",
        "focus-visible:outline-none focus-visible:text-primary-deep",
        "[&[data-state=open]>svg]:rotate-180",
        "[&[data-state=open]]:text-primary-deep",
        className,
      )}
      {...props}
    >
      {children}
      <Icon
        name="caret-down"
        size={20}
        className="shrink-0 text-foreground-muted transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-soft)]"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-body text-foreground-muted",
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className,
    )}
    {...props}
  >
    <div className="pb-5 prose-content max-w-none">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";
