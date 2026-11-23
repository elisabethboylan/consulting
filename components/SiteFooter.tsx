import { site } from '@/content/site';
import { ui, t, type Lang } from '@/content/i18n';
import { SocialIcons } from './SocialIcons';

export function SiteFooter({ lang, variant }: { lang: Lang; variant: 'centered' | 'split' }) {
  const year = new Date().getFullYear();
  return (
    <footer className={`footer footer--${variant}`}>
      <div className="footer__inner">
        {variant === 'split' && (
          <p className="footer__copy">
            © {year} {site.name} · {t(ui.location, lang)}
          </p>
        )}
        <SocialIcons lang={lang} align={variant === 'split' ? 'end' : 'center'} />
        {variant === 'centered' && (
          <p className="footer__copy">
            © {year} {site.name} {t(ui.rights, lang)}
          </p>
        )}
      </div>
    </footer>
  );
}
