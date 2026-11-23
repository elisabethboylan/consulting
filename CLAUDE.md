# CLAUDE.md — Consulting site

Elisabeth Boylan Ltd.'s design-consulting website, **bilingual English / French**. Served at **elisabethboylan.com**; **elisabethboylan.design** redirects to it (see `next.config.mjs`). Hosted on Vercel.

## Stack

- Next.js 15 (App Router), React 19, TypeScript, plain CSS (no Tailwind).
- Font: Jost (self-hosted via `@fontsource/jost`, weights 300/400/500) as a free stand-in for Futura PT.
- Fully static — every route prerenders. No database, no env vars.
- Bilingual by route: English at `/`, French at `/fr` (old `/gallery` URLs redirect to the homepage — see `next.config.mjs`). Two root layouts in route groups — `app/(en)/layout.tsx` (`<html lang="en-CA">`) and `app/(fr)/layout.tsx` (`<html lang="fr-CA">`). Each page sets canonical + hreflang alternates via `content/metadata.ts`.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # must pass before every commit
```

## Where things live

| What | File |
| --- | --- |
| Projects (order, copy, roles, skills, images, links, YouTube ID) — EN + FR | `content/projects.ts` |
| Services / "what I offer" copy — EN + FR | `content/services.ts` |
| Interface strings (nav, headings, contact, alt text), routes | `content/i18n.ts` |
| Name, wordmark, email, social links | `content/site.ts` |
| Homepage — staggered layout (`/`, `/fr`) | `components/views/HomeView.tsx` |
| EN/FR toggle | `components/LanguageSwitch.tsx` |
| All styles + design tokens | `app/globals.css` (`:root` variables at the top) |
| Images | `public/images/` · store badges in `public/badges/` · downloads (Le Métaboliste PDF) in `public/files/` |

Content changes should be made in `content/*.ts` only — the page reads from there.

**Every piece of copy is `{ en, fr }`.** When adding or changing text, always write both languages (the client is fully bilingual and reviews the French). French uses Québec conventions: « courriel », « clavardage », typographic apostrophes (’), no space before `?`/`!` in this codebase's style. Never ship an English string on a French page.

## Design rules (from the client — keep them)

- **Black, greys and white only.** Background `#F9FAFB`. Colour comes only from the project images. Do not introduce brand colours (no Theotokos / Machines of Grace gold or teal).
- Clean artist-site feel: uppercase, widely letter-spaced Jost for headings, labels and buttons; light-weight (300) body text.
- Top header reads **ELISABETH BOYLAN LTD.**
- Button hover = light grey fill (`--hover`) with **black text**. Never black-on-black.
- Footer social links are black icon-only links (GitHub, Behance, LinkedIn, Figma), each with an `aria-label`.
- Mission Disarm shows its embedded YouTube trailer (`youtubeId` in `content/projects.ts`, privacy-enhanced youtube-nocookie player) plus a button to missiondisarm.com. Thorns of Piety links to thornsofpiety.com (button + cover images). No store badges on either (client decision).
- Project order: Theotokos AI → Mission Disarm → Thorns of Piety / Les Épines de la piété → iMessage Stickers → Le Métaboliste → Graphic Design.
- Accessibility: 44px minimum touch targets, visible focus outlines, alt text on every image, `prefers-reduced-motion` respected (marquee stops; an animated GIF with a `still` image in `content/projects.ts` shows that still frame instead).

## Open TODOs

1. **Review the French copy** in `content/*.ts` — it was translated from the English and from the French résumés; adjust tone and terms as needed.
2. Optional: swap Jost for licensed Futura PT via Adobe Fonts (replace the `@fontsource` imports in `app/(en)/layout.tsx` and `app/(fr)/layout.tsx`, and the `--font` variable).
