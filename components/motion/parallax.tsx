"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  range?: [number, number];
  className?: string;
}

export function Parallax({ children, speed = 0.3, range = [-100, 100], className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [range[0] * speed, range[1] * speed]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <m.div ref={ref} className={className} style={{ y, willChange: "transform" }}>
      {children}
    </m.div>
  );
}
