export const site = {
  name: "Ryota Ueda",
  url: "https://portfolio.vercel.app",
  links: {
    github: "https://github.com/Ryota-Ueda-git",
    x: "https://x.com/Ryo257171824842",
  },
} as const;

export const navItems = [
  { href: "/#work", label: { en: "Work", ja: "仕事" } },
  { href: "/#projects", label: { en: "Projects", ja: "プロジェクト" } },
  { href: "/#links", label: { en: "Links", ja: "リンク" } },
] as const;

export const ui = {
  portfolioLabel: { en: "Portfolio", ja: "Portfolio" },
  privacyPolicy: { en: "Privacy Policy", ja: "プライバシーポリシー" },
  back: { en: "← Back", ja: "← 戻る" },
  lastUpdated: { en: "Last updated", ja: "最終更新" },
  footer: {
    builtWith: {
      en: "Built with Next.js and Tailwind CSS.",
      ja: "Next.js と Tailwind CSS で構築しています。",
    },
  },
  sections: {
    work: { en: "Work", ja: "仕事" },
    projects: { en: "Side projects", ja: "サイドプロジェクト" },
    about: { en: "About", ja: "自己紹介" },
    links: { en: "Links", ja: "リンク" },
  },
} as const;

export const hero = {
  en: "Portfolio of Ryota Ueda — data engineer and indie app builder.",
  ja: "データエンジニア兼インディーアプリ開発者、上田涼太のポートフォリオです。",
} as const;

export const about = {
  en: "I build data pipelines by day and mobile apps on the side. This site will grow as my work and projects do.",
  ja: "日中はデータ基盤を、余暇はモバイルアプリを作っています。実績やプロジェクトが増えるにつれ、このサイトも更新していきます。",
} as const;

export const workItems = [
  {
    title: {
      en: "Data Engineer",
      ja: "データエンジニア",
    },
    description: {
      en: "Building and operating data infrastructure. More details coming soon.",
      ja: "データ基盤の設計・構築・運用に携わっています。詳細は追って掲載します。",
    },
  },
] as const;

export const sideProjects = [
  {
    slug: "kotobana",
    name: "Kotobana",
    tagline: {
      en: "Gamified English learning — grow flowers from your study time.",
      ja: "学習時間を「水」に見立て、英語4技能のバランスで花を育てるゲーミフィケーション学習記録アプリ。",
    },
    description: {
      en: "An iOS app that turns listening, reading, speaking, and writing practice into a garden you nurture over time. Built with SwiftUI and Supabase.",
      ja: "Listening / Reading / Speaking / Writing の記録を庭園として可視化する iOS アプリです。SwiftUI と Supabase で開発しています。",
    },
    status: {
      en: "In development",
      ja: "開発中",
    },
    privacyPath: "/privacy",
  },
] as const;

export const linkLabels = {
  github: {
    en: "GitHub",
    ja: "GitHub",
  },
  x: {
    en: "X",
    ja: "X（旧 Twitter）",
  },
} as const;
