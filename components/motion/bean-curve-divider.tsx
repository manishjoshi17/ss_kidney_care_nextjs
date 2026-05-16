"use client";

import { m, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

interface BeanCurveDividerProps {
  className?: string;
  /** Variant of the curve — different shapes between different section types. */
  shape?: "shallow" | "s-curve" | "tight";
}

const PATHS = {
  shallow: "M0 40 C 180 12, 420 12, 600 30 C 780 48, 1020 48, 1200 20",
  "s-curve": "M0 30 C 180 6, 360 54, 600 30 C 840 6, 1020 54, 1200 30",
  tight: "M0 30 C 240 0, 480 60, 720 30 C 960 0, 1080 30, 1200 30",
};

export function BeanCurveDivider({ className, shape = "shallow" }: BeanCurveDividerProps) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className={cn("block w-full text-primary-300", className)}
      aria-hidden
    >
      <m.path
        d={PATHS[shape]}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0.2 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
