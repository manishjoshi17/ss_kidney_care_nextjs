import Link from "next/link";

import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  href?: string;
  label: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex flex-wrap items-center gap-1.5 text-small", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-foreground-muted">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={cn(isLast && "text-primary-deep font-medium")} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <Icon name="caret-right" size={12} className="opacity-60" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
