import { chromium } from "playwright";
import sharp from "sharp";
import { mkdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public", "images");

// Full-page captures so card mockups can pan/scroll through the page on hover.
const sites = [
  { url: "https://shoot-gray.vercel.app/", out: "projects/shoot.webp", wait: 8000 },
  { url: "https://vloom-lead-generator.vercel.app/", out: "projects/leadflow.webp", wait: 8000 },
  { url: "https://wearevloom.com/", out: "companies/vloom.webp", wait: 8000 },
  { url: "https://mylegacyledger.com/", out: "companies/legacy-ledger.webp", wait: 8000 },
];

const MAX_HEIGHT = 3200;

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

for (const site of sites) {
  console.log(`Capturing ${site.url} → ${site.out}`);
  const page = await context.newPage();
  try {
    await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(site.wait);
    // Nudge lazy-loaded content, then return to top before capture.
    await page.evaluate(async () => {
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 800));
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 400));
    });
    const screenshot = await page.screenshot({ type: "png", fullPage: true });

    const fullPath = join(publicDir, site.out);
    await mkdir(dirname(fullPath), { recursive: true });
    const resized = sharp(screenshot).resize(1200, null, { withoutEnlargement: true });
    const meta = await resized.toBuffer().then((b) => sharp(b).metadata());
    let pipeline = sharp(await resized.toBuffer());
    if ((meta.height ?? 0) > MAX_HEIGHT) {
      pipeline = pipeline.extract({ left: 0, top: 0, width: 1200, height: MAX_HEIGHT });
    }
    await pipeline.webp({ quality: 82 }).toFile(fullPath);
    console.log(`  ✓ saved ${site.out} (${meta.height}px tall, capped at ${MAX_HEIGHT})`);
  } catch (err) {
    console.error(`  ✗ failed ${site.url}:`, err.message);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("Done!");
