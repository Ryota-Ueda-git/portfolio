"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { navItems, site } from "@/content/site";
import { pick } from "@/lib/i18n";

export function SiteHeader() {
  const { locale } = useLanguage();

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200/80 bg-white/90 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          {site.name}
        </Link>
        <div className="flex items-center gap-4 sm:gap-5">
          <nav className="flex gap-4 text-sm text-zinc-600 sm:gap-5 dark:text-zinc-400">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {pick(locale, item.label)}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
