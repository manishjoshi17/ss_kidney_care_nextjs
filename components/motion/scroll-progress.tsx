"use client";

import { m, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 280, damping: 30 });

  if (reduce) return null;

  return (
    <m.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-primary origin-left"
      style={{ scaleX }}
    />
  );
}
