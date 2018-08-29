
const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  }).then(async browser =>{
    const page = await browser.newPage();
    await page.goto('https://facebook.com');
    await page.click('#email');
    await page.keyboard.type('userid');
    await page.click('#pass');
    await page.keyboard.type('password');
    await page.click('#u_0_2');
  
    await page.waitForNavigation();
    await page.goto('https://www.facebook.com/events/birthdays/');
  

    //const enterEvent = document.createEvent("KeyboardEvent");
    //enterEvent.initKeyboardEvent("keypress",true,true,null,false,false,false,false,13,0);

    await page.evaluate(() => {
      let elements = document.getElementsByClassName('uiTextareaAutogrow');
      console.log('bala',elements);
      for (var element of elements){
        console.log('bala',element);
          element.setRangeText('Wish you many more happy returns of the day');
          let ev = document.createEvent('Event');
          ev.initEvent('keypress');
          ev.which = ev.keyCode = 13;
          element.dispatchEvent(ev);
          //page.type(String.fromCharCode(13));
        }
  });

  });
  
    // const cookies=[{name:'dpr2',value:'2'},{name:'c_user',value:'100002509940690'},{name:'presence',value:'EDvF3EtimeF1535502377EuserFA21B02509940690A2EstateFDutF1535502377745CEchFDp_5f1B02509940690F1CC'},{name:'wd',value:'1440x264'},{name:'act',value:'1535502417191%2F2'}];
    // await page.setCookie(...cookies);
  

  //await page.keyboard.type('Wish you many more happy returns of the day');

  // .uiMentionsInput > .uiTypeahead > div > div > textarea
  // #u_0_12
  // #u_0_15
  // //*[@id="u_0_15"]
  //await page.screenshot({ path: 'screenshots/github.png' });
  
  //browser.close();
}

run();