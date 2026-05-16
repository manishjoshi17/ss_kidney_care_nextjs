/**
 * Shared size variants for Button, Input, Textarea, Select.
 * One source of truth — re-skinning the control scale is one edit.
 * Heights/paddings/radii/font-sizes all read from --control-* tokens.
 */

export const controlSize = {
  sm: "h-[var(--control-h-sm)] rounded-[var(--control-radius-sm)] px-[var(--control-px-sm)] text-[length:var(--control-font-sm)]",
  md: "h-[var(--control-h-md)] rounded-[var(--control-radius-md)] px-[var(--control-px-md)] text-[length:var(--control-font-md)]",
  lg: "h-[var(--control-h-lg)] rounded-[var(--control-radius-lg)] px-[var(--control-px-lg)] text-[length:var(--control-font-lg)]",
  xl: "h-[var(--control-h-xl)] rounded-[var(--control-radius-lg)] px-[var(--control-px-xl)] text-[length:var(--control-font-lg)]",
  // The SENbrook idiom, tokenized: mobile size on phones, larger on >=sm.
  adaptive:
    "h-[var(--control-h-md)] sm:h-[var(--control-h-lg)] rounded-[var(--control-radius-md)] sm:rounded-[var(--control-radius-lg)] px-[var(--control-px-md)] sm:px-[var(--control-px-lg)] text-[length:var(--control-font-md)] sm:text-[length:var(--control-font-lg)]",
  icon: "size-[var(--control-h-md)] rounded-[var(--control-radius-md)]",
} as const;

export type ControlSize = keyof typeof controlSize;
