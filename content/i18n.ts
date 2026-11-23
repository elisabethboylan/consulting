// Languages, routes and interface strings. Project / service copy lives in projects.ts and services.ts.

export const langs = ['en', 'fr'] as const;
export type Lang = (typeof langs)[number];

/** A string (or any value) in both languages. */
export type L<T = string> = { en: T; fr: T };
export const t = <T,>(value: L<T>, lang: Lang): T => value[lang];

export type Page = 'home' | 'gallery';

/** URL of a page in a language. English lives at the root, French under /fr. */
export function href(page: Page, lang: Lang): string {
  const base = lang === 'en' ? '' : '/fr';
  if (page === 'home') return base || '/';
  return `${base}/gallery`;
}

export const ui = {
  tagline: {
    en: ['PRODUCT', 'UI/UX', 'AI', 'BRAND', 'MOTION'],
    fr: ['PRODUIT', 'UI/UX', 'IA', 'MARQUE', 'MOTION'],
  },
  description: {
    en: 'Elisabeth Boylan — product, UX/UI, conversational AI, brand and motion design consulting. Bilingual FR/EN, Québec City.',
    fr: 'Elisabeth Boylan — design-conseil : produit, UX/UI, IA conversationnelle, image de marque et motion design. Bilingue FR/EN, Québec.',
  },
  titleSuffix: { en: 'Design Consulting', fr: 'Design-conseil' },
  galleryTitle: { en: 'Gallery', fr: 'Galerie' },
  nav: {
    work: { en: 'Work', fr: 'Projets' },
    services: { en: 'Services', fr: 'Services' },
    contact: { en: 'Contact', fr: 'Contact' },
    primary: { en: 'Primary', fr: 'Navigation principale' },
    social: { en: 'Social', fr: 'Réseaux sociaux' },
  },
  switchTo: {
    // Label shown on the switch, and its accessible name — both in the TARGET language.
    en: { label: 'FR', name: 'Version française', lang: 'fr' as Lang },
    fr: { label: 'EN', name: 'English version', lang: 'en' as Lang },
  },
  selectProjects: { en: 'Select projects', fr: 'Projets sélectionnés' },
  scroll: { en: 'Scroll →', fr: 'Défiler →' },
  role: { en: 'Role', fr: 'Rôle' },
  skills: { en: 'Skills', fr: 'Compétences' },
  heroEyebrow: { en: 'Design consulting · Québec City · FR / EN', fr: 'Design-conseil · Québec · FR / EN' },
  heroTitle: {
    en: 'Product, experience & brand design — shipped with AI.',
    fr: 'Design de produit, d’expérience et de marque — livré avec l’IA.',
  },
  heroLede: {
    en: 'Fifteen years across UI/UX, games, motion and publishing. I take ideas from discovery workshop to live deployment, working daily with Claude Code.',
    fr: 'Quinze ans en UI/UX, jeux, motion design et édition. Je mène les idées de l’atelier de découverte jusqu’au déploiement, en travaillant au quotidien avec Claude Code.',
  },
  servicesHeadingList: { en: 'AI-forward design consulting', fr: 'Design-conseil propulsé par l’IA' },
  servicesHeadingCards: { en: 'What I offer', fr: 'Mes services' },
  contactHeading: { en: 'Work with me', fr: 'Travaillons ensemble' },
  contactLong: {
    en: 'Building something ambitious, strange or beautiful? Bilingual French/English, based in Québec City, available for consulting mandates.',
    fr: 'Vous bâtissez quelque chose d’ambitieux, d’étrange ou de beau? Bilingue français/anglais, basée à Québec, disponible pour des mandats de consultation.',
  },
  contactShort: {
    en: 'Building something ambitious, strange or beautiful?',
    fr: 'Vous bâtissez quelque chose d’ambitieux, d’étrange ou de beau?',
  },
  rights: { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
  location: { en: 'Québec City', fr: 'Québec' },
  trailerTitle: { en: '{title} — trailer', fr: '{title} — bande-annonce' },
  appStoreAlt: { en: 'Download on the App Store', fr: 'Télécharger dans l’App Store' },
  googlePlayAlt: { en: 'Get it on Google Play', fr: 'L’obtenir sur Google Play' },
} as const;
