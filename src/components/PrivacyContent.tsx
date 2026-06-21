"use client";

import Link from "next/link";
import { LocaleHeading, LocaleText } from "@/components/BilingualText";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/content/site";
import { privacyPolicy } from "@/content/privacy";
import { pick } from "@/lib/i18n";

export function PrivacyContent() {
  const { locale } = useLanguage();

  return (
    <main className="mx-auto max-w-2xl px-6 py-14">
      <Link
        href="/"
        className="text-sm text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400"
      >
        {pick(locale, ui.back)}
      </Link>

      <div className="mt-8 space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          {privacyPolicy.appName}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          {pick(locale, ui.privacyPolicy)}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {pick(locale, ui.lastUpdated)}: {privacyPolicy.lastUpdated}
        </p>
      </div>

      <LocaleText strings={privacyPolicy.intro} className="mt-10" />

      <div className="mt-10 space-y-10">
        {privacyPolicy.sections.map((section) => (
          <section key={section.title.en}>
            <LocaleHeading strings={section.title} as="h2" className="mb-4" />
            <div className="space-y-4">
              {section.paragraphs.map((paragraph) => (
                <LocaleText key={paragraph.en} strings={paragraph} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
