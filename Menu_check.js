// Menu_check
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
                driver.findElement(By.className('notice success')))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Appearence')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Template')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Template')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Logotype')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Logotype')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Catalog')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Catalog')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Product Groups')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Product Groups')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Option Groups')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Option Groups')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Manufacturers')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Manufacturers')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Suppliers')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Suppliers')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Delivery Statuses')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Delivery Statuses')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Sold Out Statuses')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Sold Out Statuses')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Quantity Units')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Quantity Units')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'CSV Import/Export')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'CSV Import/Export')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Countries')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Countries')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Currencies')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Currencies')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Customers')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Customers')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'CSV Import/Export')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'CSV Import/Export')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Newsletter')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Newsletter')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Geo Zones')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Geo Zones')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Languages')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Languages')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Storage Encoding')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Storage Encoding')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Modules')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Background Jobs')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Job Modules')]")))
            .then(_ =>
                driver.findElement(By.xpath("//li[@id='doc-customer']")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Customer Modules')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Shipping')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Shipping Modules')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Payment')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Payment Modules')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Order Total')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Order Total Modules')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Order Success')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Order Success Modules')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Order Action')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Order Action Modules')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Orders')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Orders')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Order Statuses')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Order Statuses')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Pages')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Pages')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Reports')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Monthly Sales')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Monthly Sales')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Most Sold Products')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Most Sold Products')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Most Shopping Customers')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Most Shopping Customers')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Settings')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Store Info')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Settings')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Defaults')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Settings')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'General')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Settings')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Listings')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Settings')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Images')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Settings')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Checkout')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Settings')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Advanced')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Settings')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Security')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Settings')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Slides')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Slides')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Tax')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Tax Classes')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Tax Classes')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Tax Rates')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Tax Rates')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Translations')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Search Translations')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Search Translations')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Scan Files')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Scan Files For Translations')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'CSV Import/Export')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'CSV Import/Export')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'Users')]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'Users')]")))
            .then(_ =>
                driver.findElement(By.xpath("//a[contains(.,'vQmods')]")).click())
            .then(_ =>
                driver.findElement(By.css("[id=doc-vqmods]")).click())
            .then(_ =>
                driver.findElement(By.xpath("//h1[contains(.,'vQmods')]")))

    });
    test.after(() => driver.quit());
});