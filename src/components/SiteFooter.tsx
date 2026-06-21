"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { site, ui } from "@/content/site";
import { pick } from "@/lib/i18n";

export function SiteFooter() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-2xl px-6 py-8 text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="mt-1">{pick(locale, ui.footer.builtWith)}</p>
      </div>
    </footer>
  );
}
