import puppeteer from "puppeteer";
import cheerio from "cheerio";

const url =
  "https://platform.twitter.com/embed/index.html?creatorScreenName=tixl&dnt=false&embedId=twitter-widget-0&frame=false&hideCard=true&hideThread=true&id=1353748813127806977&lang=en&origin=https%3A%2F%2Fpreview.tixl.finance%2Fprojects%2FTixl&theme=light&widgetsVersion=ed20a2b%3A1601588405575&width=550px";

const getData = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForTimeout(3000);
  const data = await page.content();
  await browser.close();

  const $ = cheerio.load(data);

  console.log($("span").text());
};

getData();
