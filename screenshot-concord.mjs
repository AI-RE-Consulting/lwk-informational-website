import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://www.concordcompanies.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
await new Promise(r => setTimeout(r, 5000));

// Take viewport screenshots scrolling down
for (let i = 0; i < 8; i++) {
  await page.screenshot({ path: `/tmp/concord-section-${i}.png` });
  await page.evaluate(() => window.scrollBy(0, 900));
  await new Promise(r => setTimeout(r, 1000));
}

await browser.close();
console.log('Done');
