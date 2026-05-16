"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerProps {
  children: ReactNode;
  gap?: number;
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
}

const SOFT_EASE = [0.16, 1, 0.3, 1] as const;

const parentVariants: Variants = {
  hidden: {},
  visible: (gap: number) => ({
    transition: { staggerChildren: gap / 1000 },
  }),
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: SOFT_EASE } },
};

export const StaggerChild = m.div;

export function Stagger({ children, gap = 80, className, as = "div" }: StaggerProps) {
  const reduce = useReducedMotion();
  const Component = m[as];

  if (reduce) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={gap}
    >
      {children}
    </Component>
  );
}

export { childVariants as staggerChildVariants };
