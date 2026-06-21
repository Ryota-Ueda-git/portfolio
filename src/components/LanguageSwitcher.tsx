"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n";

const options: Array<{ value: Locale; label: string }> = [
  { value: "en", label: "EN" },
  { value: "ja", label: "JA" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="inline-flex rounded-full border border-zinc-200 p-0.5 dark:border-zinc-700"
      role="tablist"
      aria-label="Language"
    >
      {options.map((option) => {
        const isActive = locale === option.value;

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setLocale(option.value)}
            className={cn(
              "min-w-10 rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
              isActive
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-500 hover:text-foreground dark:text-zinc-400",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
