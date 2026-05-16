"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";

import { Icon } from "@/components/icons/icon";
import { cn } from "@/lib/utils";

interface PhotoCarouselProps {
  slides: ReactNode[];
  className?: string;
  ariaLabel?: string;
}

export function PhotoCarousel({ slides, className, ariaLabel }: PhotoCarouselProps) {
  const [ref, embla] = useEmblaCarousel({ loop: false, align: "start", containScroll: "trimSnaps" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
  }, [embla, onSelect]);

  return (
    <div className={cn("relative", className)} aria-roledescription="carousel" aria-label={ariaLabel}>
      <div ref={ref} className="overflow-hidden">
        <div className="flex gap-4">
          {slides.map((slide, idx) => (
            <div key={idx} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3">
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === selectedIndex ? "true" : undefined}
              onClick={() => embla?.scrollTo(idx)}
              className={cn(
                "size-2 rounded-full transition-all",
                idx === selectedIndex ? "w-6 bg-primary" : "bg-border-strong hover:bg-primary/50",
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous"
            disabled={!canPrev}
            onClick={() => embla?.scrollPrev()}
            className="size-10 inline-flex items-center justify-center rounded-full border border-border bg-surface text-foreground hover:bg-muted disabled:opacity-40 transition-colors"
          >
            <Icon name="arrow-right" size={18} className="rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={!canNext}
            onClick={() => embla?.scrollNext()}
            className="size-10 inline-flex items-center justify-center rounded-full border border-border bg-surface text-foreground hover:bg-muted disabled:opacity-40 transition-colors"
          >
            <Icon name="arrow-right" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
