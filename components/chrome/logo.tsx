import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { urlForLocale, type SupportedLocale } from "@/lib/locale";

// Aspect ratios derived directly from the brand-kit SVG viewBoxes.
// Horizontal lockup: 1600 × 450 → 3.556. Mark: 760 × 760 → 1.
const HORIZONTAL_ASPECT = 1600 / 450;
const MARK_ASPECT = 1;

interface LogoProps {
  locale: SupportedLocale;
  className?: string;
  /** "default" → fullcolor on light surface; "on-dark" → reverse on dark surface; "mark" → mark-only (small contexts). */
  variant?: "default" | "on-dark" | "mark" | "mark-on-dark";
  /** Pixel height of the logo. Default 40px — chosen to keep the wordmark legible inside the 64–80px header.
   *  Per the brand sheet, horizontal lockup minimum is ≈ 120px wide (≈ 34px tall). Below that, use a `mark*` variant. */
  height?: number;
}

/**
 * Brand logo lockup. Uses the approved SVG assets in /public/brand/.
 *
 * Per the brand usage sheet (ss-kidney-care-brand-kit/ss-kidney-care_brand-sheet.pdf):
 *   - Never redraw, recolor, rotate, or stylize the mark or wordmark.
 *   - Min horizontal lockup ≈ 120px wide; below that use a `mark*` variant.
 *   - Wordmark uses one weight, no italics, no outline/shadow/gradient.
 */
export function Logo({ locale, className, variant = "default", height = 40 }: LogoProps) {
  const src =
    variant === "on-dark"
      ? "/brand/logo-horizontal-reverse.svg"
      : variant === "mark"
        ? "/brand/logo-mark.svg"
        : variant === "mark-on-dark"
          ? "/brand/logo-mark-reverse.svg"
          : "/brand/logo-horizontal.svg";

  const isMark = variant === "mark" || variant === "mark-on-dark";
  const aspect = isMark ? MARK_ASPECT : HORIZONTAL_ASPECT;
  const width = Math.round(height * aspect);

  return (
    <Link
      href={urlForLocale(locale, "/")}
      aria-label="SS Kidney Care — Home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src={src}
        alt="SS Kidney Care"
        width={width}
        height={height}
        priority
        className="block w-auto"
        style={{ height }}
      />
    </Link>
  );
}
