"use client";

import { LocaleHeading } from "@/components/BilingualText";
import type { LocalizedString } from "@/lib/i18n";

type SectionProps = {
  id: string;
  title: LocalizedString;
  children: React.ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-zinc-200 pt-10 dark:border-zinc-800"
    >
      <LocaleHeading strings={title} as="h2" className="mb-6" />
      {children}
    </section>
  );
}
