// Languages, routes and interface strings. Project / service copy lives in projects.ts and services.ts.

export const langs = ['en', 'fr'] as const;
export type Lang = (typeof langs)[number];

/** A string (or any value) in both languages. */
export type L<T = string> = { en: T; fr: T };
export const t = <T,>(value: L<T>, lang: Lang): T => value[lang];

/** URL of the homepage in a language. English lives at the root, French under /fr. */
export function href(lang: Lang): string {
  return lang === 'en' ? '/' : '/fr';
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
  servicesHeading: { en: 'AI-forward design consulting', fr: 'Design-conseil propulsé par l’IA' },
  contactHeading: { en: 'Work with me', fr: 'Travaillons ensemble' },
  contact: {
    en: 'Building something ambitious, strange or beautiful? Bilingual French/English, based in Québec City, available for consulting mandates.',
    fr: 'Vous bâtissez quelque chose d’ambitieux, d’étrange ou de beau? Bilingue français/anglais, basée à Québec, disponible pour des mandats de consultation.',
  },
  rights: { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
  trailerTitle: { en: '{title} — trailer', fr: '{title} — bande-annonce' },
  appStoreAlt: { en: 'Download on the App Store', fr: 'Télécharger dans l’App Store' },
  googlePlayAlt: { en: 'Get it on Google Play', fr: 'L’obtenir sur Google Play' },
} as const;
