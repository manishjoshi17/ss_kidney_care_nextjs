"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FloatProps {
  children: ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export function Float({ children, amplitude = 8, duration = 4, delay = 0, className }: FloatProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      animate={{ y: [0, -amplitude, 0, amplitude, 0] }}
      transition={{ duration, ease: "easeInOut", repeat: Infinity, delay }}
    >
      {children}
    </m.div>
  );
}
