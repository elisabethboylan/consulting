import { site } from '@/content/site';
import { ui, t, type Lang } from '@/content/i18n';
import { SocialIcons } from './SocialIcons';

export function SiteFooter({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <SocialIcons lang={lang} />
        <p className="footer__copy">
          © {year} {site.name} {t(ui.rights, lang)}
        </p>
      </div>
    </footer>
  );
}
