"use client";

import { useEffect, useState, type ReactNode } from "react";

import { Icon } from "@/components/icons/icon";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface MediaPreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  index: number;
  onIndexChange: (index: number) => void;
  total: number;
  caption?: string;
  children: ReactNode;
  closeLabel?: string;
  prevLabel?: string;
  nextLabel?: string;
}

/**
 * Ported and adapted from tldio_v2's MediaPreviewDialog.
 * Strips: delete/download/render-delete-wrapper, Supabase types.
 * Keeps: keyboard nav (←/→), prev/next, caption slot.
 */
export function MediaPreviewDialog({
  open,
  onOpenChange,
  index,
  onIndexChange,
  total,
  caption,
  children,
  closeLabel = "Close",
  prevLabel = "Previous photo",
  nextLabel = "Next photo",
}: MediaPreviewDialogProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && index < total - 1) onIndexChange(index + 1);
      if (e.key === "ArrowLeft" && index > 0) onIndexChange(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, total, onIndexChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[min(96vw,1200px)] p-0 overflow-hidden bg-surface-navy text-on-navy"
        aria-label={caption}
      >
        <div className="relative">
          <div className="aspect-[3/2] w-full">{children}</div>
          {caption && (
            <div className="px-6 py-4 bg-surface-navy/95">
              <p className="text-small text-on-navy/85">{caption}</p>
              <p className="text-tiny text-on-navy/55 mt-1">
                {index + 1} / {total}
              </p>
            </div>
          )}
          {index > 0 && (
            <button
              type="button"
              aria-label={prevLabel}
              onClick={() => onIndexChange(index - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 size-11 inline-flex items-center justify-center rounded-full bg-on-navy/15 text-on-navy hover:bg-on-navy/25 transition-colors"
            >
              <Icon name="arrow-right" size={20} className="rotate-180" />
            </button>
          )}
          {index < total - 1 && (
            <button
              type="button"
              aria-label={nextLabel}
              onClick={() => onIndexChange(index + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 size-11 inline-flex items-center justify-center rounded-full bg-on-navy/15 text-on-navy hover:bg-on-navy/25 transition-colors"
            >
              <Icon name="arrow-right" size={20} />
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
