import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * Skeleton building blocks — geometry matches destination content,
 * with a 1.4s left-to-right oklch mask shimmer (defined in globals.css).
 */
function SkeletonBlock({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden bg-muted rounded-[var(--radius-chip)]",
        "before:absolute before:inset-0 before:-translate-x-full",
        "before:bg-gradient-to-r before:from-transparent before:via-surface/60 before:to-transparent",
        "before:animate-[shimmer_1.4s_infinite] motion-reduce:before:hidden",
        className,
      )}
      {...props}
    />
  );
}

export function HeroSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <SkeletonBlock className="h-12 w-3/4" />
      <SkeletonBlock className="h-16 w-full" />
      <SkeletonBlock className="h-6 w-2/3" />
      <div className="flex gap-3 pt-4">
        <SkeletonBlock className="h-14 w-44" />
        <SkeletonBlock className="h-14 w-36" />
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6 flex flex-col gap-3">
      <SkeletonBlock className="aspect-[3/2] w-full rounded-[var(--radius-image)]" />
      <SkeletonBlock className="h-5 w-2/3" />
      <SkeletonBlock className="h-4 w-full" />
      <SkeletonBlock className="h-4 w-1/2" />
    </div>
  );
}

export function ListRowSkeleton() {
  return (
    <div className="flex items-center gap-4 p-3">
      <SkeletonBlock className="size-12 shrink-0 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <SkeletonBlock className="h-4 w-1/3" />
        <SkeletonBlock className="h-3 w-2/3" />
      </div>
    </div>
  );
}

export { SkeletonBlock };
