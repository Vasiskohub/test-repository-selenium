Feature('litecart @tag1', { retries: 0 });

Scenario('links_to_new_window', function*(I) {
    I.amOnPage('http://localhost/litecart/admin/');
    I.fillField("//input[@name='username']", 'admin');
    I.fillField("//input[@name='password']", 'admin');
    I.click("//button[@value='Login']");
    I.click('//span[contains(text(),"Countries")]');
    I.say('Перехожу к редактированию рандомной страны, перехожу поочередно по всем ссылкам на внешние страницы');

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    I.click('(//tr/td[7]/a[1])[' + random(1, 238) + ']');

    var number = yield I.grabNumberOfVisibleElements(`//tr/td/a[@target]/i`);
    var i = 0;
    while (i < number) {

        I.click('(//tr/td/a[@target]/i)[' + (i + 1) + ']');
        I.switchToNextTab();
        I.closeCurrentTab();

        i++;
    }


});