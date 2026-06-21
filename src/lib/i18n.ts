export type Locale = "en" | "ja";

export type LocalizedString = {
  en: string;
  ja: string;
};

export const defaultLocale: Locale = "en";

export const localeStorageKey = "portfolio-locale";

export function pick(locale: Locale, strings: LocalizedString): string {
  return strings[locale];
}
