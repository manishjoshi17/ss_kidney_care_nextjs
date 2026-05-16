"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Mount once at the [lang]/layout root. LazyMotion + domAnimation
 * keeps initial framer-motion bundle at ~12kB. MotionConfig pulls
 * reduced-motion preference from the user.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
