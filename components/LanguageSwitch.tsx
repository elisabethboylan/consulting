import { ui, href, type Lang, type Page } from '@/content/i18n';

/** EN/FR toggle. Links to the same page in the other language. */
export function LanguageSwitch({ lang, page }: { lang: Lang; page: Page }) {
  const other = ui.switchTo[lang];
  return (
    <a
      href={href(page, other.lang)}
      hrefLang={other.lang}
      lang={other.lang}
      aria-label={other.name}
      className="langswitch"
    >
      <span aria-hidden="true" className={lang === 'en' ? 'is-current' : ''}>
        EN
      </span>
      <span aria-hidden="true" className="langswitch__sep">
        /
      </span>
      <span aria-hidden="true" className={lang === 'fr' ? 'is-current' : ''}>
        FR
      </span>
    </a>
  );
}
