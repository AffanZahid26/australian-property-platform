import { chromium } from "playwright";
import path from "path";
import fs from "fs";

const out = path.resolve("upwork");
fs.mkdirSync(out, { recursive: true });
const base = "http://127.0.0.1:3000";

const hideBadgeCss =
  "nextjs-portal,[data-nextjs-toast],[data-next-badge-root],#__next-build-watcher{display:none!important;visibility:hidden!important}";

async function dismissIntro(page) {
  await page.addStyleTag({ content: hideBadgeCss });
  await page.waitForTimeout(4200);
  await page.evaluate(() => {
    const overlay = document.querySelector('[role="presentation"]');
    if (overlay instanceof HTMLElement) overlay.click();
  });
  await page.waitForTimeout(500);
}

/** Scroll the whole page so lazy media loads, then return to top. */
async function warmFullPage(page) {
  await page.evaluate(async () => {
    const step = Math.max(400, window.innerHeight * 0.8);
    const max = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    );
    for (let y = 0; y < max; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 180));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 400));
  });
}

async function shot(page, file, fullPage) {
  await page.screenshot({
    path: path.join(out, file),
    fullPage,
  });
  console.log("saved", file, fullPage ? "(full page)" : "(viewport)");
}

async function scrollSlide(page, n) {
  await page.evaluate((i) => {
    window.scrollTo({ top: i * window.innerHeight, behavior: "instant" });
  }, n);
  await page.waitForTimeout(900);
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

// 01 — intro (viewport)
await page.goto(base + "/", { waitUntil: "networkidle", timeout: 60000 });
await page.addStyleTag({ content: hideBadgeCss });
await page.waitForTimeout(900);
await shot(page, "01-home-intro-loader.png", false);

// 02 — full home (all slides)
await page.goto(base + "/", { waitUntil: "networkidle", timeout: 60000 });
await dismissIntro(page);
await warmFullPage(page);
await shot(page, "02-home-full.png", true);

// section close-ups (viewport) still useful
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(400);
await shot(page, "03-home-hero.png", false);
await scrollSlide(page, 1);
await shot(page, "04-home-for-sale-slide.png", false);

// Full content pages
const pages = [
  { file: "05-buy-page-full.png", path: "/buy" },
  { file: "06-lease-page-full.png", path: "/lease" },
  { file: "07-about-page-full.png", path: "/about" },
  { file: "08-sold-page-full.png", path: "/sold" },
  { file: "09-contact-page-full.png", path: "/contact" },
  { file: "10-appraisal-page-full.png", path: "/appraisal" },
];

for (const s of pages) {
  await page.goto(base + s.path, { waitUntil: "networkidle", timeout: 60000 });
  await dismissIntro(page);
  await warmFullPage(page);
  await shot(page, s.file, true);
}

// home remaining slides
await page.goto(base + "/", { waitUntil: "networkidle", timeout: 60000 });
await dismissIntro(page);
await scrollSlide(page, 2);
await shot(page, "11-home-for-rent-slide.png", false);
await scrollSlide(page, 3);
await shot(page, "12-home-our-people-slide.png", false);

// Remove old cropped page filenames so folder stays clean
for (const old of [
  "02-home-hero-video.png",
  "03-home-for-sale-slide.png",
  "04-buy-page.png",
  "05-lease-page.png",
  "06-about-page.png",
  "07-sold-page.png",
  "08-contact-page.png",
  "09-appraisal-page.png",
  "10-home-for-rent-slide.png",
  "11-home-our-people-slide.png",
]) {
  const p = path.join(out, old);
  if (fs.existsSync(p)) fs.unlinkSync(p);
}

await browser.close();
console.log("DONE");
