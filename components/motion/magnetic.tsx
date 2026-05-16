"use client";

import { m, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/**
 * Cursor-attraction wrapper. Disabled on touch via @media (hover: none),
 * and via the reduced-motion fallback.
 */
export function Magnetic({ children, strength = 12, className }: MagneticProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 25, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 25, mass: 0.5 });

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onPointerMove={(event) => {
        if (window.matchMedia("(hover: none)").matches) return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(((event.clientX - centerX) / rect.width) * strength);
        y.set(((event.clientY - centerY) / rect.height) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </m.div>
  );
}
