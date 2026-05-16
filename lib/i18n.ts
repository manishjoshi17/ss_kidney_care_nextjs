import { type Dictionary, en } from "@/dictionaries/en";
import { hi } from "@/dictionaries/hi";
import { or } from "@/dictionaries/or";
import { type SupportedLocale } from "@/lib/locale";

const DICTIONARIES: Record<SupportedLocale, Dictionary> = { en, hi, or };

export function getDictionary(locale: SupportedLocale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary };
