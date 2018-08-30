
const puppeteer = require('puppeteer');
const utils = require('./util');
const  USER_ID=utils.USER_ID;
const PASSWORD=utils.PASSWORD;
const TIMER_DELAY = 5000;

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  }).then(async browser =>{
    const page = await browser.newPage();
    await page.goto('https://facebook.com');
    
    await page.click('#email');
    await page.keyboard.type(USER_ID);
    await page.click('#pass');
    await page.keyboard.type(PASSWORD);
    if (await page.$('#u_0_2') !== null){
      console.log('im there');
      await page.click('#u_0_2');
    }
    else if(await page.$('#u_0_9 > div:nth-child(5) > button') !== null){
      await page.click('#u_0_9 > div:nth-child(5) > button');
    }
   
   
   await page.waitForNavigation();
    await page.goto('https://www.facebook.com/events/birthdays/');
  await page.evaluate(() => {
    let elements = document.getElementsByClassName('uiTextareaAutogrow');
    let offset = 0;
    Object.values(elements).forEach(function(element){
      setTimeout(function(){
        element.setRangeText('Wish you many more happy returns of the day');;
        const ke = new KeyboardEvent("keydown", {
          bubbles: true, cancelable: true, keyCode: 13
          });
            element.dispatchEvent(ke);
      }, TIMER_DELAY + offset);    
     offset += TIMER_DELAY;
    });
  });
  });
}

run();
