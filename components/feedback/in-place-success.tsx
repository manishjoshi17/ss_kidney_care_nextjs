"use client";

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
 * Kidney-curve checkmark draws on entrance via CSS keyframes (see globals.css
 * `ss-path-draw` / `ss-path-draw-delayed`). Pure CSS — avoids the `LazyMotion strict`
 * SVG `pathLength` corner case in framer-motion v12 that was silently aborting
 * <m.path /> renders inside this card and preventing the success state from showing.
 * Respects `prefers-reduced-motion` via the keyframe rule.
 */
export function InPlaceSuccess({ title, description, action, className }: InPlaceSuccessProps) {
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
        <path
          d="M50 18 C72 18 86 32 86 50 C86 72 68 86 50 86 C36 86 26 78 26 66 C26 56 34 50 44 50"
          pathLength={1}
          fill="none"
          stroke="currentColor"
          className="text-primary ss-path-draw"
          strokeWidth={3}
          strokeLinecap="round"
        />
        {/* checkmark sweep */}
        <path
          d="M36 54 L46 64 L66 42"
          pathLength={1}
          fill="none"
          stroke="currentColor"
          className="text-accent ss-path-draw-delayed"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-h2 text-foreground">{title}</p>
      {description && <p className="text-body text-foreground-muted max-w-[40ch]">{description}</p>}
      {action}
    </div>
  );
}
