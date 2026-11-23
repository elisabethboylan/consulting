import { site } from '@/content/site';
import { ui, t, type Lang } from '@/content/i18n';

export function Contact({ lang, variant }: { lang: Lang; variant: 'centered' | 'split' }) {
  return (
    <section id="contact" className={`contact contact--${variant}`}>
      {variant === 'centered' && <h2 className="eyebrow-heading">{t(ui.contactHeading, lang)}</h2>}
      <p className="contact__line">{t(variant === 'centered' ? ui.contactLong : ui.contactShort, lang)}</p>
      <a href={`mailto:${site.email}`} className={variant === 'centered' ? 'btn' : 'btn btn--solid'}>
        {site.email}
      </a>
    </section>
  );
}
