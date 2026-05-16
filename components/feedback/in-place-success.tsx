"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface InPlaceSuccessProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

/**
 * Replaces a form in place on successful submission.
 * Kidney-curve checkmark draws on entrance (CLAUDE.md §10, §14).
 */
export function InPlaceSuccess({ title, description, action, className }: InPlaceSuccessProps) {
  const reduce = useReducedMotion();
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex flex-col items-center justify-center gap-5 rounded-[var(--radius-card)] border border-primary/30 bg-primary-soft/50 px-8 py-12 text-center",
        className,
      )}
    >
      <svg width={72} height={72} viewBox="0 0 100 100" aria-hidden>
        {/* bean curve */}
        <motion.path
          d="M50 18 C72 18 86 32 86 50 C86 72 68 86 50 86 C36 86 26 78 26 66 C26 56 34 50 44 50"
          fill="none"
          stroke="currentColor"
          className="text-primary"
          strokeWidth={3}
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* checkmark sweep */}
        <motion.path
          d="M36 54 L46 64 L66 42"
          fill="none"
          stroke="currentColor"
          className="text-accent"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.5, ease: [0.34, 1.45, 0.64, 1] }}
        />
      </svg>
      <p className="text-h2 text-foreground">{title}</p>
      {description && <p className="text-body text-foreground-muted max-w-[40ch]">{description}</p>}
      {action}
    </div>
  );
}
