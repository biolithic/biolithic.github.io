const puppeteer = require('puppeteer');
const fs = require('fs');
let ts = Date.now();
const timeStamp = Math.floor(ts / 1000);

async function autoScroll(page, url){
    await new Promise((resolve, reject) => {
        page.mouse.move(1000, 0);
        page.mouse.click(1000, 0);
        page.keyboard.press('ArrowDown');
        page.keyboard.press('ArrowDown');
        page.keyboard.press('ArrowDown');
        page.keyboard.press('ArrowDown');
        page.keyboard.press('ArrowDown');
        page.keyboard.press('ArrowDown');
        page.mouse.move(1000, 0);

        var timer = setInterval(() => {
          page.mouse.move(1000, 0);
          page.keyboard.press('ArrowUp');
          page.keyboard.press('ArrowUp');
          page.keyboard.press('ArrowUp');
          page.keyboard.press('ArrowUp');
          page.keyboard.press('ArrowUp');
          page.keyboard.press('ArrowUp');
          page.mouse.move(1000, 0);
          clearInterval(timer);
          resolve();
        }, 1200000); // watch 20 minutes of the video, then move on to the next video
    });
}


(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const [page] = await browser.pages();
  const baseURL = "https://www.youtube.com";
  var obj = JSON.parse(fs.readFileSync('goboom.json', 'utf8'));
  console.log("loading " + obj.length + " videos");
  
  for (const item of obj) {
      try {
        await page.goto(baseURL + item.url, { waitUntil: "networkidle0" }); //  domcontentloaded
        await page.setViewport({
          width: 1200,
          height: 800
        });
        await page.waitForSelector("h1.ytd-video-primary-info-renderer");
        await page.mouse.move(1000, 0);
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.mouse.move(1000, 0);
        await autoScroll(page, item.url);
      }
      catch (err) {  
        console.log(err);
      }
    }

  await browser.close();
})();