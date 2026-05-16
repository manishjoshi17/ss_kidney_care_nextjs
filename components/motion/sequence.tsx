"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Choreographed entry sequence — used by the Hero section per the
 * "first 3 seconds" timeline in plan §6 / CLAUDE.md §8.
 * Children declare their own `data-step` value in the staggered
 * sequence by wrapping themselves in <SequenceStep step={N}>.
 */

interface SequenceProps {
  children: ReactNode;
  className?: string;
}

const SOFT_EASE = [0.16, 1, 0.3, 1] as const;

const parent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export function Sequence({ children, className }: SequenceProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <m.div className={className} variants={parent} initial="hidden" animate="visible">
      {children}
    </m.div>
  );
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: SOFT_EASE } },
};

export function SequenceStep({ children, className, delay }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <m.div
      className={className}
      variants={stepVariants}
      transition={delay ? { ...stepVariants.visible, delay } : undefined}
    >
      {children}
    </m.div>
  );
}
