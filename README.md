# Elisabeth Boylan Ltd. — Consulting

Design-consulting site for **elisabethboylan.com** (and **elisabethboylan.design**, which redirects to it).

Bilingual — English and French, with an EN / FR switch in the header:

| | English | Français |
| --- | --- | --- |
| Version 1 — staggered rows (after the Squarespace layout) | `/` | `/fr` |
| Version 2 — horizontal gallery | `/gallery` | `/fr/gallery` |

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 and http://localhost:3000/fr (add `/gallery` for Version 2).

## Edit content

Everything editable is in `content/`:

- `projects.ts` — the six Select Projects, in display order
- `services.ts` — what you offer as a consultant
- `i18n.ts` — navigation, headings, contact text and other interface wording
- `site.ts` — name, email, GitHub / Behance / LinkedIn / Figma links

Every text is written as `{ en: '…', fr: '…' }` — edit both.

## Deploy on Vercel

1. In Vercel: **Add New → Project → Import** `elisabethboylan/Consulting`. Framework preset: Next.js. No environment variables needed.
2. **Settings → Domains**: add `elisabethboylan.com`, `www.elisabethboylan.com`, `elisabethboylan.design` and `www.elisabethboylan.design`.
   - Set `elisabethboylan.com` as the primary domain. Vercel can redirect the others to it; `next.config.mjs` also redirects any `.design` request to `.com`.
3. At each domain's registrar (or Squarespace Domains), point DNS at Vercel using the records Vercel shows on the Domains page — typically an `A` record for the apex (`@`) and a `CNAME` for `www`.
4. Once DNS verifies, Vercel issues HTTPS certificates automatically.

## Working with Claude Code

`CLAUDE.md` holds the design rules and the open TODO list, so Claude Code picks them up automatically. Run `npm run build` before committing.
