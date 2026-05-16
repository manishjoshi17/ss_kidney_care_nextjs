import { BeanCurve } from "@/components/icons/bean-curve";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-[var(--radius-card)] border border-dashed border-border bg-surface py-16 px-8 text-center",
        className,
      )}
    >
      <BeanCurve size={56} className="text-primary-300" />
      <p className="text-h3 text-foreground">{title}</p>
      {description && <p className="text-body text-foreground-muted max-w-[40ch]">{description}</p>}
      {action}
    </div>
  );
}
