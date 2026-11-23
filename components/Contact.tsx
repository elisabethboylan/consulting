import { site } from '@/content/site';
import { ui, t, type Lang } from '@/content/i18n';

export function Contact({ lang }: { lang: Lang }) {
  return (
    <section id="contact" className="contact">
      <h2 className="eyebrow-heading">{t(ui.contactHeading, lang)}</h2>
      <p className="contact__line">{t(ui.contact, lang)}</p>
      <a href={`mailto:${site.email}`} className="btn">
        {site.email}
      </a>
    </section>
  );
}
