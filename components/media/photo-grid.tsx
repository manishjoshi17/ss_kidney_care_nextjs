"use client";

import { useState } from "react";

import { MediaPreviewDialog } from "./media-preview-dialog";
import { OptimizedImage } from "./optimized-image";
import { Reveal } from "@/components/motion/reveal";
import type { GalleryPhoto } from "@/content/gallery";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/lib/i18n-provider";

interface PhotoGridProps {
  photos: GalleryPhoto[];
  locale: import("@/lib/locale").SupportedLocale;
  className?: string;
}

export function PhotoGrid({ photos, locale, className }: PhotoGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslations();

  return (
    <>
      <div
        className={cn(
          "grid gap-4",
          "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
          className,
        )}
      >
        {photos.map((photo, idx) => (
          <Reveal key={photo.src} delay={idx * 0.04} className="relative">
            <button
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="group relative block w-full aspect-[3/2] overflow-hidden rounded-[var(--radius-image)] border border-border-hairline bg-muted"
            >
              <OptimizedImage
                src={photo.src}
                alt={photo.alt[locale]}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                className="object-cover transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
              />
            </button>
          </Reveal>
        ))}
      </div>
      {activeIndex !== null && (
        <MediaPreviewDialog
          open={activeIndex !== null}
          onOpenChange={(open) => !open && setActiveIndex(null)}
          index={activeIndex}
          onIndexChange={setActiveIndex}
          total={photos.length}
          caption={photos[activeIndex].alt[locale]}
          closeLabel={t("gallery.lightbox.close")}
          prevLabel={t("gallery.lightbox.previous")}
          nextLabel={t("gallery.lightbox.next")}
        >
          <OptimizedImage
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt[locale]}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </MediaPreviewDialog>
      )}
    </>
  );
}
