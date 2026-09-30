// Builds the approval PDF: A4 cover, full desktop page (1280px), full mobile page (390px).
// Usage: npm run build && npm run pdf [-- --shots <dir>] [-- --dark]
import fs from "node:fs/promises";
import path from "node:path";
import { preview } from "vite";
import { chromium } from "playwright-core";
import { PDFDocument } from "pdf-lib";

const OUT_DIR = path.resolve("..");
const NAME = "Keystone - Shield Website Mock-up v2 - 30 September 2026";
const argv = process.argv.slice(2);
const shotsDir = argv.includes("--shots") ? path.resolve(argv[argv.indexOf("--shots") + 1]) : null;
const scheme = argv.includes("--dark") ? "dark" : "light";

const PORT = 4179;
const server = await preview({ preview: { port: PORT, strictPort: true }, logLevel: "warn" });
const base = `http://localhost:${PORT}/`;
const browser = await chromium.launch({ channel: "chrome" });

async function open(width, query) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: scheme });
  const page = await ctx.newPage();
  page.on("pageerror", (e) => console.error(`[pageerror ${width}]`, e.message));
  page.on("console", (m) => m.type() === "error" && console.error(`[console ${width}]`, m.text()));
  await page.goto(base + query, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: "html{scrollbar-width:none}" });
  await page.emulateMedia({ media: "screen", colorScheme: scheme });
  for (const frame of page.frames()) await frame.evaluate(() => document.fonts.ready).catch(() => {});
  await page.waitForTimeout(500);
  return { ctx, page };
}

async function renderSite(width, label) {
  const { ctx, page } = await open(width, "?static");
  const height = await page.evaluate(() => Math.ceil(document.documentElement.scrollHeight));
  const pdf = await page.pdf({ width: `${width}px`, height: `${height}px`, printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 }, pageRanges: "1" });
  if (shotsDir) await page.screenshot({ path: path.join(shotsDir, `${label}-${scheme}.png`), fullPage: true });
  console.log(`${label}: ${width} x ${height}px`);
  await ctx.close();
  return pdf;
}

async function renderCover() {
  const { ctx, page } = await open(794, "?view=cover&static");
  const pdf = await page.pdf({ format: "A4", printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 }, pageRanges: "1" });
  if (shotsDir) await page.screenshot({ path: path.join(shotsDir, `cover-${scheme}.png`), fullPage: true });
  await ctx.close();
  return pdf;
}

try {
  if (shotsDir) await fs.mkdir(shotsDir, { recursive: true });
  const parts = [await renderCover(), await renderSite(1280, "desktop"), await renderSite(390, "mobile")];

  const out = await PDFDocument.create();
  for (const bytes of parts) {
    const src = await PDFDocument.load(bytes);
    const [page] = await out.copyPages(src, [0]);
    out.addPage(page);
  }
  out.setTitle("Shield Master Fund Complaints website: mock-up for approval");
  out.setAuthor("Banton Group");
  const file = path.join(OUT_DIR, `${NAME}${scheme === "dark" ? " (dark)" : ""}.pdf`);
  await fs.writeFile(file, await out.save());
  console.log(`Wrote ${file}`);
} finally {
  await browser.close();
  await server.close();
}
