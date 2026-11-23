import type { L } from './i18n';

export const servicesIntro: L = {
  en: 'I design products, brands and interactive experiences end to end — from the first discovery workshop to a live deployment. Fifteen years across UI/UX, games, motion and publishing, now working daily with Claude Code to prototype, build and ship.',
  fr: 'Je conçois des produits, des marques et des expériences interactives de bout en bout — du premier atelier de découverte jusqu’au déploiement. Quinze ans en UI/UX, jeux, motion design et édition; aujourd’hui, je prototype, développe et livre au quotidien avec Claude Code.',
};

export const services: { title: L; body: L }[] = [
  {
    title: { en: 'Product & UX/UI Design', fr: 'Design de produit et UX/UI' },
    body: {
      en: 'Discovery workshops, information architecture, flows, prototypes and high-fidelity UI, accessible to WCAG 2.1 AA.',
      fr: 'Ateliers de découverte, architecture de l’information, parcours, prototypes et interfaces haute fidélité, conformes aux WCAG 2.1, niveau AA.',
    },
  },
  {
    title: { en: 'Conversational AI', fr: 'IA conversationnelle' },
    body: {
      en: 'Persona and voice, system-prompt architecture, guardrails and chat UI — designed and deployed on the Anthropic API.',
      fr: 'Persona et voix, architecture des invites système, garde-fous et interface de clavardage — conçus et déployés sur l’API d’Anthropic.',
    },
  },
  {
    title: { en: 'Design Systems', fr: 'Design systems' },
    body: {
      en: 'Tokens, component libraries and handoff documentation in Figma, Unity UI Toolkit and code.',
      fr: 'Tokens, bibliothèques de composants et documentation de passation dans Figma, Unity UI Toolkit et en code.',
    },
  },
  {
    title: { en: 'Brand & Art Direction', fr: 'Marque et direction artistique' },
    body: {
      en: 'Identity systems, brand books, typography and multi-channel campaigns.',
      fr: 'Systèmes d’identité, guides de marque, typographie et campagnes multicanaux.',
    },
  },
  {
    title: { en: 'Games & Interactive', fr: 'Jeux et interactivité' },
    body: {
      en: 'Game UI, diegetic interfaces, LiveOps and AR/VR adaptations for Unity titles.',
      fr: 'Interfaces de jeu, interfaces diégétiques, LiveOps et adaptations RA/RV pour des titres Unity.',
    },
  },
  {
    title: { en: 'Motion, Illustration & Publishing', fr: 'Motion, illustration et édition' },
    body: {
      en: 'After Effects trailers, character illustration, book covers and layout for print, ebook and audio.',
      fr: 'Bandes-annonces After Effects, illustration de personnages, couvertures et mise en page pour l’imprimé, le numérique et l’audio.',
    },
  },
];
