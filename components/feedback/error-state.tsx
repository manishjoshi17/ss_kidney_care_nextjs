import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ErrorStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function ErrorState({ title, description, action, className }: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-[var(--radius-card)] border border-destructive/30 bg-destructive/5 py-16 px-8 text-center",
        className,
      )}
    >
      <Icon name="warning" size={48} weight="duotone" className="text-destructive" />
      <p className="text-h3 text-foreground">{title}</p>
      {description && <p className="text-body text-foreground-muted max-w-[40ch]">{description}</p>}
      {action}
    </div>
  );
}
