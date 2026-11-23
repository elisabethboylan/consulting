// Site-wide settings and links. Edit here, not in components.

export const site = {
  name: 'Elisabeth Boylan Ltd.',
  wordmark: 'ELISABETH BOYLAN LTD.',
  url: 'https://elisabethboylan.com',
  email: 'eb@elisabethboylan.com',
};

export const social = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/elisabethboylan' },
  { id: 'behance', label: 'Behance', href: 'https://www.behance.net/ElisabethBoylan' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/elisabethboylan' },
  { id: 'figma', label: 'Figma', href: 'https://www.figma.com/@elisabethboylan' },
] as const;

export type SocialId = (typeof social)[number]['id'];
