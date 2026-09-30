# Shield Master Fund Complaints site (v2 mock-up)

React 19 + Tailwind v4 + Motion. All visible copy lives in `src/lib/content.ts`.

```bash
npm install
npm run dev            # local site with motion
npm run pdf            # builds and writes the approval PDF (A4 cover + desktop 1280px + mobile 390px) to the parent folder
npm run build:single   # one portable HTML file in dist-single/
```

URL flags: `?static` renders without motion or timers (used by the PDF), `?view=cover` shows the A4 cover sheet.
