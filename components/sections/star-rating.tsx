import { Icon } from "@/components/icons/icon";

interface StarRatingProps {
  /** Numeric rating 0..5 (e.g. 4.9). */
  value: number;
  /** Icon size in px. Default 14. */
  size?: number;
  /** Accessible label override. Default: "{value} out of 5 stars". */
  ariaLabel?: string;
}

/**
 * Five-star row reflecting a 0..5 rating. Each star position can be:
 *   • full       (value ≥ position)               — text-accent, weight=fill
 *   • partial    (value > position - 1)           — text-accent clipped to (value − floor) width
 *   • empty      (otherwise)                      — text-accent at low opacity
 *
 * Stars use the same Phosphor `star` icon as the rest of the site (icon discipline
 * — never lucide). `aria-label` carries the numeric value so screen readers don't
 * read out a row of five "star" repetitions.
 */
export function StarRating({ value, size = 14, ariaLabel }: StarRatingProps) {
  const clamped = Math.max(0, Math.min(5, value));
  return (
    <span
      className="inline-flex items-center gap-0.5 leading-none"
      role="img"
      aria-label={ariaLabel ?? `${clamped} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((position) => {
        const isFull = clamped >= position;
        const partial = !isFull && clamped > position - 1 ? clamped - (position - 1) : 0;

        if (isFull) {
          return (
            <Icon key={position} name="star" size={size} weight="fill" className="text-accent" />
          );
        }
        if (partial > 0) {
          return (
            <span
              key={position}
              aria-hidden
              className="relative inline-block leading-none"
              style={{ width: size, height: size }}
            >
              <Icon
                name="star"
                size={size}
                weight="fill"
                className="text-accent/25 block"
              />
              <span
                className="absolute inset-y-0 left-0 overflow-hidden block"
                style={{ width: `${partial * 100}%` }}
              >
                <Icon
                  name="star"
                  size={size}
                  weight="fill"
                  className="text-accent block"
                />
              </span>
            </span>
          );
        }
        return (
          <Icon
            key={position}
            aria-hidden
            name="star"
            size={size}
            weight="fill"
            className="text-accent/25"
          />
        );
      })}
    </span>
  );
}
