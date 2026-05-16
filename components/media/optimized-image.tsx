"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fallback?: ReactNode;
  graded?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  priority,
  className,
  fallback,
  graded = true,
}: OptimizedImageProps) {
  const [error, setError] = useState(false);
  useEffect(() => setError(false), [src]);

  if (error && fallback) {
    return <>{fallback}</>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      {...(fill ? { fill: true } : { width, height })}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
      className={cn("object-cover", graded && "photo-graded", className)}
    />
  );
}
