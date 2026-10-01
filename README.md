# Shield Master Fund Complaints (Banton Group)

Landing page for the Shield Master Fund complaints campaign. React 19 + Tailwind v4 + Motion, built with Vite.
All visible copy lives in `src/lib/content.ts` (kept in one file for the compliance read).

## Structure

```
src/             the site (sections in src/sections, copy in src/lib/content.ts)
scripts/         export-pdf.mjs (approval PDF), export-html.mjs (single-file HTML)
entregables/     approval PDFs and portable HTML; v1/ holds the 29 September originals
.claude/skills/  design skills used for the redesign (taste-skill)
```

## Commands

```bash
npm install
npm run dev       # local site with motion
npm run build     # production build in dist/ (what Vercel deploys)
npm run pdf       # approval PDF (A4 cover + desktop 1280px + mobile 390px) into entregables/
npm run html      # one portable HTML file into entregables/
```

URL flags: `?static` renders without motion or timers (used by the PDF), `?view=cover` shows the A4 cover sheet.

## Deploying on Vercel

Import the repo with the default settings: Root Directory empty (repo root), framework Vite.
`vercel.json` pins the install/build commands and the `dist` output. Node 22.12 or newer.
