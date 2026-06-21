"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/cn";
import { pick, type LocalizedString } from "@/lib/i18n";

type LocaleTextProps = {
  strings: LocalizedString;
  className?: string;
  as?: "p" | "span";
};

export function LocaleText({
  strings,
  className,
  as: Tag = "p",
}: LocaleTextProps) {
  const { locale } = useLanguage();

  return (
    <Tag className={cn("leading-relaxed text-foreground", className)}>
      {pick(locale, strings)}
    </Tag>
  );
}

type LocaleHeadingProps = {
  strings: LocalizedString;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function LocaleHeading({
  strings,
  as: Tag = "h2",
  className,
}: LocaleHeadingProps) {
  const { locale } = useLanguage();

  return (
    <Tag
      className={cn("font-semibold tracking-tight text-foreground", className)}
    >
      {pick(locale, strings)}
    </Tag>
  );
}

/** @deprecated Use LocaleText with `strings` prop */
export function BilingualText({
  en,
  ja,
  className,
}: {
  en: string;
  ja: string;
  className?: string;
}) {
  return <LocaleText strings={{ en, ja }} className={className} />;
}

/** @deprecated Use LocaleHeading with `strings` prop */
export function BilingualHeading({
  en,
  ja,
  as = "h2",
  className,
}: {
  en: string;
  ja: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <LocaleHeading strings={{ en, ja }} as={as} className={className} />
  );
}
