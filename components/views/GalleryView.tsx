// Version 2 — horizontal gallery. Same content as the homepage.
import Link from 'next/link';
import { projects } from '@/content/projects';
import { site } from '@/content/site';
import { ui, t, href, type Lang } from '@/content/i18n';
import { ProjectLinks } from '@/components/ProjectLinks';
import { ProjectMedia } from '@/components/ProjectMedia';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { SiteFooter } from '@/components/SiteFooter';
import { LanguageSwitch } from '@/components/LanguageSwitch';

export function GalleryView({ lang }: { lang: Lang }) {
  return (
    <>
      <header className="topbar">
        <Link href={href('home', lang)} className="topbar__mark">
          {site.wordmark}
        </Link>
        <div className="topbar__right">
          <nav aria-label={t(ui.nav.primary, lang)} className="nav">
            <a href="#work">{t(ui.nav.work, lang)}</a>
            <a href="#services">{t(ui.nav.services, lang)}</a>
            <a href="#contact">{t(ui.nav.contact, lang)}</a>
          </nav>
          <LanguageSwitch lang={lang} page="gallery" />
        </div>
      </header>

      <section className="hero">
        <p className="eyebrow">{t(ui.heroEyebrow, lang)}</p>
        <h1 className="hero__title">{t(ui.heroTitle, lang)}</h1>
        <p className="lede">{t(ui.heroLede, lang)}</p>
      </section>

      <section id="work" aria-label={t(ui.selectProjects, lang)} className="gallery">
        <div className="gallery__head">
          <h2 className="eyebrow-heading">{t(ui.selectProjects, lang)}</h2>
          <p className="eyebrow muted">
            01 — {String(projects.length).padStart(2, '0')} · {t(ui.scroll, lang)}
          </p>
        </div>
        <div className="strip" tabIndex={0}>
          {projects.map((p) => (
            <article key={p.slug} className="card">
              <div className={`card__media ${p.images.length > 1 ? 'card__media--covers' : ''}`}>
                <ProjectMedia project={p} lang={lang} sizes="420px" />
              </div>
              <div className="card__body">
                <p className="eyebrow muted">
                  {p.number} · {t(p.category, lang)}
                </p>
                <h3 className="card__title">
                  {t(p.title, lang)}
                  {p.subtitle && ` · ${t(p.subtitle, lang)}`}
                </h3>
                <p className="card__role">
                  <span className="label">{t(ui.role, lang)} · </span>
                  {t(p.role, lang)}
                </p>
                <ul aria-label={t(ui.skills, lang)} className="tags">
                  {p.skills[lang].map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="card__links">
                  <ProjectLinks links={p.links} lang={lang} variant="text" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Services lang={lang} variant="cards" />
      <Contact lang={lang} variant="split" />
      <SiteFooter lang={lang} variant="split" />
    </>
  );
}
