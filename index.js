const { Builder, By, Key, until } = require('selenium-webdriver');
// let options = new chrome.Options();

async function firstrun() {
    var driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.linkedin.com/login');
    setTimeout(async () => {
        let searchBox = await driver.findElement(By.id('username')).sendKeys('dscrap338@gmail.com');
    }, 1000);
    setTimeout(async () => {
        let searchButton = await driver.findElement(By.id('password')).sendKeys('@Getajob', Key.ENTER);

    }, 6000);

    setTimeout(async () => {
        setTimeout(async () => {
            let searchBox = await driver.findElement(By.className('search-global-typeahead__input')).sendKeys('we are hiring', Key.ENTER);
        }, 1000);

        console.log('ok');
    }, 60000);

}
firstrun()