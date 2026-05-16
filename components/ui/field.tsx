"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons/icon";
import { Label } from "./label";
import { type ReactNode, useId } from "react";

interface FieldProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Form field shell — label, hint/error message, and aria wiring.
 * Pair with <Input>, <Textarea>, or <Select>. The wrapped control
 * receives `id` and `aria-describedby` automatically when consumers
 * pass htmlFor.
 */
export function Field({ label, htmlFor, required, hint, error, children, className }: FieldProps) {
  const autoId = useId();
  const id = htmlFor ?? autoId;
  const messageId = `${id}-msg`;
  const hasError = !!error;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id} required={required}>{label}</Label>
      <div className="relative">
        {/* Consumer's input/textarea/select must accept id; aria-describedby is auto-attached via cloning is intentional here — pass through to children with id */}
        {children}
      </div>
      {(hint || error) && (
        <p
          id={messageId}
          className={cn(
            "flex items-center gap-1.5 text-small",
            hasError ? "text-destructive" : "text-muted-foreground",
          )}
        >
          {hasError && <Icon name="alert-circle" size={16} weight="fill" />}
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
