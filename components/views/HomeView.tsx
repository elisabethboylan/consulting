// Homepage — staggered layout, after the original Squarespace page.
import { projects } from '@/content/projects';
import { site } from '@/content/site';
import { ui, t, type Lang } from '@/content/i18n';
import { ProjectLinks } from '@/components/ProjectLinks';
import { ProjectMedia } from '@/components/ProjectMedia';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { SiteFooter } from '@/components/SiteFooter';
import { LanguageSwitch } from '@/components/LanguageSwitch';

export function HomeView({ lang }: { lang: Lang }) {
  const marquee = projects.map((p) => t(p.title, lang));
  // Thorns of Piety shows both edition titles in the marquee.
  const thorns = projects.find((p) => p.slug === 'thorns-of-piety');
  if (thorns?.subtitle) marquee.splice(marquee.indexOf(t(thorns.title, lang)) + 1, 0, t(thorns.subtitle, lang));

  return (
    <>
      <header className="masthead">
        <div className="masthead__lang">
          <LanguageSwitch lang={lang} />
        </div>
        <h1 className="wordmark">{site.wordmark}</h1>
        <p className="tagline">{ui.tagline[lang].join(' • ')}</p>
        <nav aria-label={t(ui.nav.primary, lang)} className="nav">
          <a href="#work">{t(ui.nav.work, lang)}</a>
          <a href="#services">{t(ui.nav.services, lang)}</a>
          <a href="#contact">{t(ui.nav.contact, lang)}</a>
        </nav>
      </header>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i}>
              {item}
              <span className="marquee__dot">•</span>
            </span>
          ))}
        </div>
      </div>

      <main id="work" className="stagger">
        <h2 className="eyebrow-heading stagger__title">{t(ui.selectProjects, lang)}</h2>
        {projects.map((p, i) => (
          <section key={p.slug} className={`row ${i % 2 ? 'row--reverse' : ''}`} aria-labelledby={`${p.slug}-title`}>
            <div className="row__text">
              <p className="eyebrow">
                {p.number} — {t(p.category, lang)}
              </p>
              <h3 id={`${p.slug}-title`} className="row__title">
                {t(p.title, lang)}
                {p.subtitle && <span className="row__subtitle">{t(p.subtitle, lang)}</span>}
              </h3>
              <ul className="row__skills">
                {p.skills[lang].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p>{t(p.description, lang)}</p>
              <div className="row__actions">
                <ProjectLinks links={p.links} lang={lang} />
                {p.note && <span className="note">{t(p.note, lang)}</span>}
              </div>
            </div>
            <figure className="row__media">
              <ProjectMedia project={p} lang={lang} sizes="(max-width: 800px) 100vw, 560px" />
              <figcaption className="caption">{t(p.caption, lang)}</figcaption>
            </figure>
          </section>
        ))}
      </main>

      <Services lang={lang} />
      <Contact lang={lang} />
      <SiteFooter lang={lang} />
    </>
  );
}
