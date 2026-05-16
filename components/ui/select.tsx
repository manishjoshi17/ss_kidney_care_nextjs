"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/utils";
import { controlSize } from "./_control-variants";

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      controlSize.adaptive,
      "flex w-full items-center justify-between gap-2 bg-surface text-foreground",
      "border-[var(--control-border-w)] border-input",
      "transition-[border-color] duration-[var(--duration-fast)] ease-[var(--ease-out-snap)]",
      "hover:border-border-strong focus-visible:border-primary outline-none",
      "data-[placeholder]:text-muted-foreground",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-invalid:border-destructive",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <Icon name="caret-down" size={16} className="opacity-60" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export const SelectContent = forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      position={position}
      className={cn(
        "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-hidden rounded-[var(--radius-button)]",
        "border border-border bg-surface text-foreground shadow-[var(--shadow-3)]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        position === "popper" && "translate-y-1",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

export const SelectItem = forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-[var(--radius-chip)] py-2 pl-3 pr-8 text-small outline-none",
      "focus:bg-primary-soft focus:text-primary-deep",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Icon name="check" size={14} />
      </SelectPrimitive.ItemIndicator>
    </span>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
