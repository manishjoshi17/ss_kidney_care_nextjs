"use client";

import { m, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface TiltCardProps {
  children: ReactNode;
  maxTilt?: number;
  className?: string;
}

export function TiltCard({ children, maxTilt = 6, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const springX = useSpring(rotateX, { stiffness: 280, damping: 24 });
  const springY = useSpring(rotateY, { stiffness: 280, damping: 24 });

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      ref={ref}
      className={className}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1000 }}
      onPointerMove={(event) => {
        if (window.matchMedia("(hover: none)").matches) return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
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
