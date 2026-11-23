import Image from 'next/image';
import type { ProjectLink } from '@/content/projects';
import { ui, t, type Lang } from '@/content/i18n';

export function ProjectLinks({ links, lang }: { links: ProjectLink[]; lang: Lang }) {
  return (
    <div className="links">
      {links.map((link) => {
        if (link.kind === 'app-store') {
          return (
            <a key={link.href} href={link.href} className="badge" target="_blank" rel="noopener noreferrer">
              <Image
                src={lang === 'fr' ? '/badges/app-store-fr.svg' : '/badges/app-store.svg'}
                alt={t(ui.appStoreAlt, lang)}
                width={lang === 'fr' ? 152 : 144}
                height={48}
              />
            </a>
          );
        }
        if (link.kind === 'google-play') {
          return (
            <a key={link.href} href={link.href} className="badge" target="_blank" rel="noopener noreferrer">
              <Image
                src={lang === 'fr' ? '/badges/google-play-fr.svg' : '/badges/google-play.svg'}
                alt={t(ui.googlePlayAlt, lang)}
                width={162}
                height={48}
              />
            </a>
          );
        }
        return (
          <a key={link.href} href={link.href} className="btn" target="_blank" rel="noopener noreferrer">
            {t(link.label, lang)}
          </a>
        );
      })}
    </div>
  );
}
