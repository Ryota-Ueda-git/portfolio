"use client";

import Link from "next/link";
import { LocaleHeading, LocaleText } from "@/components/BilingualText";
import { ExternalLink } from "@/components/ExternalLink";
import { Section } from "@/components/Section";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  about,
  hero,
  linkLabels,
  sideProjects,
  site,
  ui,
  workItems,
} from "@/content/site";
import { pick } from "@/lib/i18n";

export function HomeContent() {
  const { locale } = useLanguage();

  return (
    <main className="mx-auto max-w-2xl px-6 py-14">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          {pick(locale, ui.portfolioLabel)}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {site.name}
        </h1>
        <LocaleText strings={hero} />
      </div>

      <div className="mt-14 space-y-10">
        <Section id="work" title={ui.sections.work}>
          <ul className="space-y-8">
            {workItems.map((item) => (
              <li key={item.title.en}>
                <LocaleHeading strings={item.title} as="h3" className="font-medium" />
                <LocaleText strings={item.description} className="mt-3" />
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title={ui.sections.projects}>
          <ul className="space-y-10">
            {sideProjects.map((project) => (
              <li key={project.slug}>
                <h3 className="text-lg font-medium">{project.name}</h3>
                <LocaleText strings={project.tagline} className="mt-3" />
                <LocaleText strings={project.description} className="mt-4" />
                <p className="mt-4 text-sm">
                  <Link
                    href={project.privacyPath}
                    className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 hover:decoration-zinc-500 dark:decoration-zinc-600 dark:hover:text-zinc-50"
                  >
                    {pick(locale, ui.privacyPolicy)}
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="about" title={ui.sections.about}>
          <LocaleText strings={about} />
        </Section>

        <Section id="links" title={ui.sections.links}>
          <ul className="space-y-4">
            <li>
              <ExternalLink href={site.links.github}>
                {pick(locale, linkLabels.github)}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={site.links.x}>
                {pick(locale, linkLabels.x)}
              </ExternalLink>
            </li>
          </ul>
        </Section>
      </div>
    </main>
  );
}
