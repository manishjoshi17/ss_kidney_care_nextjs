"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  mode?: "words" | "chars";
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const SOFT_EASE = [0.16, 1, 0.3, 1] as const;

const parent: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.06, delayChildren: delay },
  }),
};

const child: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: SOFT_EASE } },
};

export function TextReveal({ text, mode = "words", delay = 0, className, as = "h1" }: TextRevealProps) {
  const reduce = useReducedMotion();
  const Component = m[as];
  const units = mode === "words" ? text.split(/(\s+)/) : Array.from(text);

  if (reduce) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component
      className={cn(className, "inline-block")}
      variants={parent}
      custom={delay}
      initial="hidden"
      animate="visible"
    >
      {units.map((unit, idx) =>
        /^\s+$/.test(unit) ? (
          <span key={idx}>{unit}</span>
        ) : (
          <m.span key={idx} variants={child} className="inline-block">
            {unit}
          </m.span>
        ),
      )}
    </Component>
  );
}
