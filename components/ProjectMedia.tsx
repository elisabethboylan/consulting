import Image from 'next/image';
import type { Project } from '@/content/projects';
import { ui, t, type Lang } from '@/content/i18n';

/** The picture side of a project: a pair of book covers or one image, optionally linking to the project's site. */
export function ProjectMedia({ project, lang, sizes }: { project: Project; lang: Lang; sizes: string }) {
  if (project.youtubeId) {
    const title = t(ui.trailerTitle, lang).replace('{title}', t(project.title, lang));
    // Privacy-enhanced embed; French pages get the French player interface and captions.
    const params = new URLSearchParams({ rel: '0', modestbranding: '1', hl: lang, cc_lang_pref: lang });
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?${params}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  const images = project.images.map((img) => ({ ...img, alt: t(img.alt, lang) }));
  const [first, second] = images;

  let media: React.ReactNode;
  if (second) {
    // French pages show the French edition first.
    const ordered = lang === 'fr' ? [...images].reverse() : images;
    media = (
      <div className="covers">
        {ordered.map((img) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            sizes="(max-width: 800px) 45vw, 260px"
          />
        ))}
      </div>
    );
  } else {
    media = (
      <Image
        src={first.src}
        alt={first.alt}
        width={first.width}
        height={first.height}
        sizes={sizes}
        unoptimized={first.src.endsWith('.gif')}
        className="media"
      />
    );
  }

  if (!project.imageHref) return media;
  return (
    <a href={project.imageHref} className="media-link" target="_blank" rel="noopener noreferrer">
      {media}
    </a>
  );
}
