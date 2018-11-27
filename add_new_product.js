Feature('litecart @tag1', { retries: 0 });

Scenario('add_new_product', function*(I) {
    I.amOnPage('http://localhost/litecart/admin/');
    I.fillField("//input[@name='username']", 'admin');
    I.fillField("//input[@name='password']", 'admin');
    I.click("//button[@value='Login']");
    I.click("//*[contains(text(),'Catalog')]");
    I.click("//*[contains(@href,'edit_product')]");
    I.click("//label[1]");
    I.fillField("//input[@name='name[en]']", 'Bear');
    I.attachFile('//input[@name="new_images[]"]', '/bear.png');
    I.click("//a[contains(text(),'Information')]");
    I.selectOption('//select[@name="manufacturer_id"]', 'ACME Corp.');
    I.fillField("//input[@name='short_description[en]']", 'Teddy bear');
    I.click("//a[contains(text(),'Prices')]");
    I.fillField("//input[@name='purchase_price']", '10');
    I.fillField("//input[@name='prices[USD]']", '20');
    I.selectOption('//*[contains(@name,"currency_code")]', 'US Dollars');
    I.click("//button[@value='Save']");
    I.waitForElement('//a[contains(text(),"Bear")]');

});