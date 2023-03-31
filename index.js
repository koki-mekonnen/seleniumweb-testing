const { By, Key, Builder } = require("selenium-webdriver");

const { describe, it } = require("mocha");
require("geckodriver");




describe("Successfuly Loged into your github account", function () {     // use this command npx mocha --no-timeouts  'index.js' to run it 

    it("start by searching Github", async function () {


        let driver = await new Builder().forBrowser("firefox").build();

        await driver.get("https://github.com/")
        await driver.sleep(200);
        await driver.findElement(By.xpath("/html/body/div[1]/div[1]/header/div/div[2]/div/div/div[2]/a")).click();
        await driver.sleep(200);
        await driver.get("https://github.com/login");
        await driver.findElement(By.name("login")).sendKeys("put your user name here", Key.RETURN);
        await driver.sleep(100);
        await driver.findElement(By.name("password")).sendKeys("put your password here", Key.RETURN);

        await driver.sleep(500);
        await driver.findElement(By.xpath("/html/body/div[1]/div[3]/main/div/div[4]/form/div/input[11]")).click();

    });





});