import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { urlForLocale, type SupportedLocale } from "@/lib/locale";

interface LogoProps {
  locale: SupportedLocale;
  className?: string;
  /** "default" → fullcolor on light surface; "on-dark" → reverse on dark surface; "mark" → mark-only (small contexts). */
  variant?: "default" | "on-dark" | "mark" | "mark-on-dark";
  /** Pixel height of the logo. Per the brand sheet, horizontal lockup minimum is ≈ 120px wide — at that width the height is ~26px. Below that, use a `mark*` variant. */
  height?: number;
}

/**
 * Brand logo lockup. Uses the approved SVG assets in /public/brand/.
 *
 * Per the brand usage sheet (ss-kidney-care-brand-kit/ss-kidney-care_brand-sheet.pdf):
 *   - Never redraw, recolor, rotate, or stylize.
 *   - Min horizontal lockup ≈ 120px wide; below that use a `mark*` variant.
 *   - Wordmark uses one weight, no italics, no outline/shadow/gradient.
 */
export function Logo({ locale, className, variant = "default", height = 32 }: LogoProps) {
  const src =
    variant === "on-dark"
      ? "/brand/logo-horizontal-reverse.svg"
      : variant === "mark"
        ? "/brand/logo-mark.svg"
        : variant === "mark-on-dark"
          ? "/brand/logo-mark-reverse.svg"
          : "/brand/logo-horizontal.svg";

  const isMark = variant === "mark" || variant === "mark-on-dark";
  // Horizontal lockup aspect ≈ 4.5:1; mark aspect ≈ 1:1.
  const width = isMark ? height : Math.round(height * 4.5);

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
