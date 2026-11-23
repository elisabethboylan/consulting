import type { Metadata } from 'next';
import { site } from './site';
import { ui, t, href, type Lang, type Page } from './i18n';

/** Per-page metadata with canonical URL and hreflang alternates for both languages. */
export function pageMetadata(page: Page, lang: Lang): Metadata {
  const base = `${site.name} — ${t(ui.titleSuffix, lang)}`;
  const title = page === 'gallery' ? `${t(ui.galleryTitle, lang)} · ${base}` : base;
  const description = t(ui.description, lang);
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical: href(page, lang),
      languages: {
        'en-CA': href(page, 'en'),
        'fr-CA': href(page, 'fr'),
        'x-default': href(page, 'en'),
      },
    },
    openGraph: {
      title,
      description,
      url: href(page, lang),
      siteName: site.name,
      locale: lang === 'fr' ? 'fr_CA' : 'en_CA',
      alternateLocale: lang === 'fr' ? 'en_CA' : 'fr_CA',
      type: 'website',
    },
  };
}
