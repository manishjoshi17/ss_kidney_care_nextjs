"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "p" | "span";
}

const SOFT_EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  direction = "up",
  distance = 24,
  delay = 0,
  duration = 0.6,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const offset =
    direction === "up"
      ? { y: distance }
      : direction === "down"
        ? { y: -distance }
        : direction === "left"
          ? { x: distance }
          : { x: -distance };

  const Component = m[as];

  if (reduce) {
    return (
      <Component className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: SOFT_EASE }}
    >
      {children}
    </Component>
  );
}
