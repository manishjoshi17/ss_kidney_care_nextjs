"use client";

import { m, useReducedMotion } from "framer-motion";
import { Children, type ReactNode } from "react";

interface MarqueeRowProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export function MarqueeRow({ children, speed = 40, direction = "left", className }: MarqueeRowProps) {
  const reduce = useReducedMotion();
  const childArray = Children.toArray(children);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const distance = direction === "left" ? "-50%" : "50%";

  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <m.div
        className="flex w-max gap-8"
        animate={{ x: ["0%", distance] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {[...childArray, ...childArray].map((child, idx) => (
          <div key={idx} className="shrink-0">
            {child}
          </div>
        ))}
      </m.div>
    </div>
  );
}
