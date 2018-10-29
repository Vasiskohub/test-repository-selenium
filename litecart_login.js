// test-scenario-login

const {Builder, By, Key, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
test.describe('litecart login', function() {
    let driver;
    test.before(function *() {
        driver = yield new Builder().forBrowser('chrome').build();
    });
    it('works with promises', function() {
        return driver.get('http://localhost/litecart/admin/')
            .then(_ =>
                driver.findElement(By.name('username')).sendKeys('admin'))
            .then(_ =>
                driver.findElement(By.name('password')).sendKeys('admin'))
            .then(_ =>
                driver.findElement(By.name('login')).click())
            .then(_ =>
                driver.findElement(By.className('notice success')));
    });
test.after(() => driver.quit());
});