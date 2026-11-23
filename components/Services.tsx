import { services, servicesIntro } from '@/content/services';
import { ui, t, type Lang } from '@/content/i18n';

export function Services({ lang }: { lang: Lang }) {
  return (
    <section id="services" className="services">
      <div className="services__head">
        <h2 className="eyebrow-heading">{t(ui.servicesHeading, lang)}</h2>
        <p className="lede">{t(servicesIntro, lang)}</p>
      </div>
      <div className="services__grid">
        {services.map((s) => (
          <div key={s.title.en} className="service">
            <h3>{t(s.title, lang)}</h3>
            <p>{t(s.body, lang)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
