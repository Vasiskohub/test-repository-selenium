Feature('litecart @tag1', { retries: 0 });

Scenario('new_user_registration', function*(I) {
    I.amOnPage('http://localhost/litecart/');

    I.say('Регистрирую нового пользователя');
    I.click('//a[contains(text(),"New customers")]');

    I.selectOption('//select[@name="country_code"]', 'United States');
    I.waitForEnabled('//select[@name="zone_code"]');
    I.selectOption('//select[@name="zone_code"]', 'Nebraska');

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var rand = random(1, 1000);
    var name = ['firstname', 'lastname', 'address1', 'postcode', 'city', 'phone', 'password', 'confirmed_password', 'email'];
    var value = ['John', 'Johnson', 'Ernst St', '68601', 'Columbus', '+1 402-564-2857', '12345', '12345', 'nebraska' + rand + '@mail.com'];
    var i = 0;
    while (i < name.length) {
        I.fillField('//input[@name="' + name[i] + '"]', '' + value[i] + '');

        i++;
    }

    I.click('//button[@value="Create Account"]');
    I.waitForElement('//*[@class="notice success"]');
    I.click('(//*[contains(@href,"logout")])[1]');
    I.waitForElement('//*[@class="notice success"]');
    I.fillField('//input[@name="' + name[8] + '"]', '' + value[8] + '');
    I.fillField('//input[@name="' + name[6] + '"]', '' + value[6] + '');
    I.click('//button[@value="Login"]');
    I.waitForElement('//*[@class="notice success"]');
    I.click('(//*[contains(@href,"logout")])[1]');
    I.waitForElement('//*[@class="notice success"]');


});