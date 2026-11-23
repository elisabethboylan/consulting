import type { Metadata } from 'next';
import { site } from './site';
import { ui, t, href, type Lang } from './i18n';

/** Homepage metadata with canonical URL and hreflang alternates for both languages. */
export function pageMetadata(lang: Lang): Metadata {
  const title = `${site.name} — ${t(ui.titleSuffix, lang)}`;
  const description = t(ui.description, lang);
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical: href(lang),
      languages: {
        'en-CA': href('en'),
        'fr-CA': href('fr'),
        'x-default': href('en'),
      },
    },
    openGraph: {
      title,
      description,
      url: href(lang),
      siteName: site.name,
      locale: lang === 'fr' ? 'fr_CA' : 'en_CA',
      alternateLocale: lang === 'fr' ? 'en_CA' : 'fr_CA',
      type: 'website',
    },
  };
}
