// Select Projects — shown in this order on both layouts, in English and French.
// Images live in /public/images. Width/height are the source pixel sizes.
import type { L } from './i18n';

export type ProjectImage = {
  src: string;
  alt: L;
  width: number;
  height: number;
  /** Still frame for an animated GIF, shown when the visitor prefers reduced motion. */
  still?: string;
};

export type ProjectLink =
  | { kind: 'button'; label: L; href: string }
  | { kind: 'app-store'; href: string }
  | { kind: 'google-play'; href: string };

export type Project = {
  slug: string;
  number: string;
  category: L;
  title: L;
  subtitle?: L;
  /** One-line role, used on the gallery cards. */
  role: L;
  /** Roles/skills — bullet list on the homepage, tags on the gallery. */
  skills: L<string[]>;
  description: L;
  note?: L;
  caption: L;
  images: ProjectImage[];
  /** When set, the project image links here too (opens in a new tab). */
  imageHref?: string;
  /** YouTube video ID. When set, an embedded player is shown instead of the images. */
  youtubeId?: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: 'theotokos-ai',
    number: '01',
    category: { en: 'Conversational AI', fr: 'IA conversationnelle' },
    title: { en: 'Theotokos AI', fr: 'Theotokos AI' },
    role: {
      en: 'Product & experience designer, partnering with the lead developer',
      fr: 'Designer produit et expérience, en partenariat avec le développeur principal',
    },
    skills: {
      en: [
        'Product design',
        'Experience design',
        'Persona design',
        'Collaboration with lead developer',
        'Claude Code & AI-forward deployment',
      ],
      fr: [
        'Design de produit',
        'Design d’expérience',
        'Design de persona',
        'Collaboration avec le développeur principal',
        'Claude Code et déploiement axé sur l’IA',
      ],
    },
    description: {
      en: 'An interactive prayer journal built on Anthropic’s API. I designed the brand, information architecture, interaction flows and high-fidelity UI, then defined the persona, tone, language-pattern library and guardrails that carry across a session — shipping to production on Vercel alongside the lead developer and Claude Code.',
      fr: 'Un journal de prière interactif bâti sur l’API d’Anthropic. J’ai conçu l’image de marque, l’architecture de l’information, les parcours d’interaction et l’UI haute fidélité, puis défini la persona, le ton, la bibliothèque de tournures et les garde-fous qui portent toute la session — jusqu’à la mise en production sur Vercel, avec le développeur principal et Claude Code.',
    },
    note: {
      en: 'Code BETA2026 at checkout for a free trial',
      fr: 'Code BETA2026 au paiement pour un essai gratuit',
    },
    caption: { en: 'Divine guidance for life’s difficult moments', fr: 'Guidance divine pour les moments difficiles' },
    images: [
      {
        src: '/images/theotokos-ai.png',
        alt: {
          en: 'Theotokos AI logo — gold Marian sunburst on a teal gradient',
          fr: 'Logo de Theotokos AI — soleil marial doré sur un dégradé sarcelle',
        },
        width: 1080,
        height: 1017,
      },
    ],
    links: [
      { kind: 'button', label: { en: 'Visit theotokos.ai', fr: 'Visiter theotokos.ai' }, href: 'https://theotokos.ai' },
    ],
  },
  {
    slug: 'mission-disarm',
    number: '02',
    category: { en: 'Unity game · iOS · Android · WebGL', fr: 'Jeu Unity · iOS · Android · WebGL' },
    title: { en: 'Mission Disarm', fr: 'Mission Disarm' },
    role: {
      en: 'Art director, UI designer and developer',
      fr: 'Directrice artistique, designer UI et développeuse',
    },
    skills: {
      en: [
        'Brand identity & art direction',
        'Unity UI Toolkit design system',
        'World-space diegetic UI',
        'Two animated trailers in After Effects',
        'Pair-programmed with Claude Code',
      ],
      fr: [
        'Identité de marque et direction artistique',
        'Design system Unity UI Toolkit',
        'UI diégétique worldspace',
        'Deux bandes-annonces animées dans After Effects',
        'Programmation en binôme avec Claude Code',
      ],
    },
    description: {
      en: 'A shipped trivia game about war, strategy, philosophy and peace — expanded with Claude Code and integrated with Unity Gaming Services for authentication, analytics, cloud content delivery and in-app purchases.',
      fr: 'Un jeu-questionnaire publié sur la guerre, la stratégie, la philosophie et la paix — enrichi avec Claude Code et intégré à Unity Gaming Services pour l’authentification, l’analytique, la diffusion de contenu infonuagique et les achats intégrés.',
    },
    caption: { en: 'Programming peace one game at a time', fr: 'Programmer la paix, un jeu à la fois' },
    images: [],
    // Trailer: https://youtu.be/PWSNX8CtLh8
    youtubeId: 'PWSNX8CtLh8',
    links: [
      {
        kind: 'button',
        label: { en: 'Visit missiondisarm.com', fr: 'Visiter missiondisarm.com' },
        href: 'https://missiondisarm.com',
      },
    ],
  },
  {
    slug: 'thorns-of-piety',
    number: '03',
    category: { en: 'Creative direction & publishing', fr: 'Direction de création et édition' },
    // Each language leads with its own edition's title.
    title: { en: 'Thorns of Piety', fr: 'Les Épines de la piété' },
    subtitle: { en: 'Les Épines de la piété', fr: 'Thorns of Piety' },
    role: {
      en: 'Author (E.G. Boylan), cover illustrator and creative director',
      fr: 'Autrice (E.G. Boylan), illustratrice de couverture et directrice de création',
    },
    skills: {
      en: [
        'Cover illustration',
        'Brand book & typographic system',
        'Web design — thornsofpiety.com',
        'Writing, as E.G. Boylan',
        'Creative direction & publishing',
      ],
      fr: [
        'Illustration de couverture',
        'Guide de marque et système typographique',
        'Design web — thornsofpiety.com',
        'Écriture, sous le nom d’E.G. Boylan',
        'Direction de création et édition',
      ],
    },
    description: {
      en: 'A novella and its French edition, released June 24, 2026 across print, ebook and audiobook. One visual voice carried from cover to website, animated book trailers and book-club community events.',
      fr: 'Une novella et son édition française, parues le 24 juin 2026 en format imprimé, numérique et audio. Une même voix visuelle portée de la couverture au site web, jusqu’aux bandes-annonces animées et aux clubs de lecture.',
    },
    caption: { en: 'English & French editions', fr: 'Éditions anglaise et française' },
    images: [
      {
        src: '/images/thorns-of-piety.png',
        alt: { en: 'Thorns of Piety cover by E.G. Boylan', fr: 'Couverture de Thorns of Piety par E.G. Boylan' },
        width: 1600,
        height: 2444,
      },
      {
        src: '/images/les-epines-de-la-piete.png',
        alt: {
          en: 'Les Épines de la piété — French edition cover',
          fr: 'Couverture des Épines de la piété, édition française',
        },
        width: 1584,
        height: 2475,
      },
    ],
    imageHref: 'https://thornsofpiety.com',
    links: [
      {
        kind: 'button',
        label: { en: 'Visit thornsofpiety.com', fr: 'Visiter thornsofpiety.com' },
        href: 'https://thornsofpiety.com',
      },
    ],
  },
  {
    slug: 'imessage-stickers',
    number: '04',
    category: { en: 'Illustration & motion', fr: 'Illustration et animation' },
    title: { en: 'iMessage Stickers', fr: 'Autocollants iMessage' },
    role: {
      en: 'Illustrator, animator and publisher — four packs on the App Store',
      fr: 'Illustratrice, animatrice et éditrice — quatre collections sur l’App Store',
    },
    skills: {
      en: ['Character design', 'Scalable iconography', 'Motion promotion in After Effects', 'App Store submission'],
      fr: [
        'Création de personnages',
        'Iconographie évolutive',
        'Promotion animée dans After Effects',
        'Soumission à l’App Store',
      ],
    },
    description: {
      en: 'A published series of illustrated packs — Snowboard Stickers, Ski Stickers, Dogs Dogs Dogs and Shoes Shoes Shoes — every character taken from concept sketch to the App Store.',
      fr: 'Une série de collections illustrées publiées — Snowboard Stickers, Ski Stickers, Dogs Dogs Dogs et Shoes Shoes Shoes — chaque personnage mené de l’esquisse jusqu’à l’App Store.',
    },
    caption: { en: 'Snowboard Stickers · animated', fr: 'Snowboard Stickers · animés' },
    images: [
      {
        src: '/images/snowboard-stickers.gif',
        alt: {
          en: 'Animated snowboarder sticker flipping over a pink sunburst',
          fr: 'Autocollant animé : planchiste en vrille sur un fond rayonnant rose',
        },
        width: 540,
        height: 540,
      },
    ],
    links: [{ kind: 'app-store', href: 'https://apps.apple.com/us/developer/elisabeth-boylan/id993188543' }],
  },
  {
    slug: 'le-metaboliste',
    number: '05',
    category: { en: 'Book layout', fr: 'Mise en page de livre' },
    title: { en: 'Le Métaboliste', fr: 'Le Métaboliste' },
    role: {
      en: 'Illustrator and book designer — a manga on Kisho Kurokawa',
      fr: 'Illustratrice et designer du livre — un manga sur Kisho Kurokawa',
    },
    skills: {
      en: ['Manga-style book layout', 'Illustration in Photoshop', '3D modelling in Maya', '3D-printed capsule packaging'],
      fr: [
        'Mise en page de style manga',
        'Illustration dans Photoshop',
        'Modélisation 3D dans Maya',
        'Emballage-capsule imprimé en 3D',
      ],
    },
    description: {
      en: 'An architecture manga on Kisho Kurokawa and the Japanese Metabolist movement. Illustrations drawn from archival photography of his buildings; the book ships in a 3D-printed capsule that echoes his modular approach.',
      fr: 'Un manga d’architecture sur Kisho Kurokawa et le mouvement métaboliste japonais. Les illustrations s’inspirent de photographies d’archives de ses bâtiments; le livre est livré dans une capsule imprimée en 3D qui évoque son approche modulaire.',
    },
    caption: { en: 'Cyborg futurist philosophy', fr: 'Philosophie futuriste cyborg' },
    images: [
      {
        src: '/images/le-metaboliste.png',
        alt: {
          en: 'Le Métaboliste — Kisho Kurokawa Cyborg spread',
          fr: 'Le Métaboliste — double page Kisho Kurokawa Cyborg',
        },
        width: 1285,
        height: 856,
      },
    ],
    links: [{ kind: 'button', label: { en: 'Download', fr: 'Télécharger' }, href: '/files/le-metaboliste.pdf' }],
  },
  {
    slug: 'graphic-design',
    number: '06',
    category: { en: 'Art direction', fr: 'Direction artistique' },
    title: { en: 'Graphic Design', fr: 'Design graphique' },
    role: {
      en: 'Art director and graphic designer for startups, games and creative products',
      fr: 'Directrice artistique et designer graphique pour des startups, des jeux et des produits créatifs',
    },
    skills: {
      en: [
        'Brand identity & logo systems',
        'Presentation design',
        'Print media & layout',
        'Style guides',
        'Email, social & ad campaigns',
      ],
      fr: [
        'Identité de marque et systèmes de logos',
        'Design de présentations',
        'Imprimé et mise en page',
        'Guides de style',
        'Campagnes courriel, réseaux sociaux et publicité',
      ],
    },
    description: {
      en: 'Fifteen years of identity systems, editorial layouts, packaging and campaign assets for startups, games and creative products — built to hold together across print, digital and merchandise.',
      fr: 'Quinze ans de systèmes d’identité, de mises en page éditoriales, d’emballages et de matériel de campagne pour des startups, des jeux et des produits créatifs — conçus pour rester cohérents de l’imprimé au numérique et aux produits dérivés.',
    },
    caption: { en: 'Posters · identity · print', fr: 'Affiches · identité · imprimé' },
    images: [
      {
        src: '/images/graphic-design-poster.gif',
        still: '/images/graphic-design-poster.jpg',
        alt: {
          en: 'Illustrated music poster — guitarist on red',
          fr: 'Affiche musicale illustrée — guitariste sur fond rouge',
        },
        width: 1080,
        height: 1080,
      },
    ],
    links: [
      {
        kind: 'button',
        label: { en: 'View on Behance', fr: 'Voir sur Behance' },
        href: 'https://www.behance.net/ElisabethBoylan',
      },
    ],
  },
];
