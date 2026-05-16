import { cn } from "@/lib/utils";

/**
 * Decorative bean-curve motif used in section dividers, success animations,
 * empty states, the FAQ watermark, and the 404 illustration.
 *
 * NOT the brand logomark. The approved logo lives at /public/brand/* and
 * must never be redrawn, recoloured, or substituted. See the brand usage
 * sheet in /ss-kidney-care-brand-kit/ for rules.
 */

interface BeanCurveProps {
  size?: number;
  className?: string;
  variant?: "solid" | "outline";
}

export function BeanCurve({ size = 24, className, variant = "outline" }: BeanCurveProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("inline-block", className)}
      aria-hidden
    >
      <path
        d="M50 18 C72 18 86 32 86 50 C86 72 68 86 50 86 C36 86 26 78 26 66 C26 56 34 50 44 50 C52 50 56 56 56 60 C56 64 52 66 48 66"
        fill={variant === "solid" ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={variant === "solid" ? 0 : 3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A wide, subtle horizontal divider variant of the bean-curve. */
export function BeanCurvePath({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className={cn("block w-full", className)}
      aria-hidden
    >
      <path
        d="M0 40 C 180 12, 420 12, 600 30 C 780 48, 1020 48, 1200 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
