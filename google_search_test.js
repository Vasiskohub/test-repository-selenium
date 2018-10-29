const {Builder, By, Key, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

test.describe('Google Search', function() {
  let driver;

  test.before(function *() {
    driver = yield new Builder().forBrowser('chrome').build();
  });

  it('works with promises', function() {
    return driver.get('https://www.google.ru')
        .then(_ =>
            driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
        .then(_ => driver.wait(until.titleIs('webdriver - Поиск в Google'), 1000));
  });

  test.it('works with generators', function*() {
    yield driver.get('http://www.google.com/ncr');
    yield driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    yield driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  });

  test.after(() => driver.quit());
});
