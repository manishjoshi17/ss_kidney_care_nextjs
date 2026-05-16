"use client";

import { createContext, useCallback, useContext, useMemo, type ReactNode } from "react";

import { type Dictionary } from "@/lib/i18n";
import { DEFAULT_LOCALE, type SupportedLocale } from "@/lib/locale";

type NestedValue = string | { [k: string]: NestedValue } | NestedValue[];

interface TranslationsContextValue {
  locale: SupportedLocale;
  dictionary: Dictionary;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const TranslationsContext = createContext<TranslationsContextValue | null>(null);

interface TranslationsProviderProps {
  locale: SupportedLocale;
  dictionary: Dictionary;
  children: ReactNode;
}

export function TranslationsProvider({ locale, dictionary, children }: TranslationsProviderProps) {
  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      let cursor: NestedValue | undefined = dictionary as unknown as NestedValue;
      for (const segment of key.split(".")) {
        if (cursor && typeof cursor === "object" && !Array.isArray(cursor) && segment in cursor) {
          cursor = (cursor as Record<string, NestedValue>)[segment];
        } else {
          return key;
        }
      }
      if (typeof cursor !== "string") return key;
      if (!params) return cursor;
      return Object.entries(params).reduce(
        (acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)),
        cursor,
      );
    },
    [dictionary],
  );

  const value = useMemo<TranslationsContextValue>(
    () => ({ locale, dictionary, t }),
    [locale, dictionary, t],
  );

  return <TranslationsContext value={value}>{children}</TranslationsContext>;
}

export function useTranslations(): TranslationsContextValue {
  const ctx = useContext(TranslationsContext);
  if (!ctx) {
    return {
      locale: DEFAULT_LOCALE,
      dictionary: {} as Dictionary,
      t: (key: string) => key,
    };
  }
  return ctx;
}
