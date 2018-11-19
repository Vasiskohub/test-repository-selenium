Feature('litecart @tag1', {retries: 0});

Scenario('countries_check', function* (I) {
    I.amOnPage('http://localhost/litecart/admin/');
    I.fillField("//input[@name='username']", 'admin');
    I.fillField("//input[@name='password']", 'admin');
    I.click("//button[@value='Login']");
    I.click('//span[contains(text(),"Countries")]');
    I.say('Проверяю что страны расположены в алфавитном порядке ');

    var name_sort = yield I.grabAttributeFrom('//td[5]//a[contains(innerHTML,"")]', 'text');

    a = name_sort.sort();

    a = a.toString();

    b = name_sort.toString();

    if (a == b) {

        I.say('Хорошо');
    }
    else {
        I.say('Плохо');
        I.say(a);
        I.say(b);
        throw new Error();
    }

    I.say('Проверяю количество зон у каждой страны, если зон более чем 0 то перехожу на страницу этой страны и проверяю, что зоны расположены в алфавитном порядке ');

    var number = yield I.grabNumberOfVisibleElements(`//tbody//tr//td[6]`);
    I.say(number);
    var i = 0;
    while (i < number) {
        var number_of_zones = yield I.grabAttributeFrom('//tr['+ (i+2) +']//td[6]', 'innerHTML');

        if (number_of_zones > 0) {
            I.click('//tr['+ (i+2) +']//td[5]//a');

    var zname_sort = yield I.grabAttributeFrom('//tr//tr//td[3]//*[contains(@name, "zones") ]', 'value'); //text

    c = zname_sort.sort();

    c = c.toString();

    d = zname_sort.toString();

    I.say(c);

    if (c == d) {

    I.say('Хорошо');
    }

    else {
    I.say('Плохо');
    I.say(c);
    I.say(d);
    throw new Error();
    }

    I.click('//span[contains(text(),"Countries")]');
    }
    i ++;  

    }


});


Scenario('geozones_check', function* (I) {
    I.amOnPage('http://localhost/litecart/admin/');
    I.fillField("//input[@name='username']", 'admin');
    I.fillField("//input[@name='password']", 'admin');
    I.click("//button[@value='Login']");
    I.say('Проверяю что геозоны расположены в алфавитном порядке ');
    

    var zone = ['Canada', 'United States of America'];
    var z = 0;
    while (z < zone.length) {
        I.click('//span[contains(text(),"Geo Zones")]');
        I.click("//a[contains(text(),'"+ zone[z] +"')]");
        var name_sort = yield I.grabAttributeFrom("//*[contains(@name,'zone_code')]//option[@selected]", 'label');

        a = name_sort.sort();

        a = a.toString();

        b = name_sort.toString();

        if (a == b) {

            I.say('Хорошо');
        }
        else {
            I.say('Плохо');
            I.say(a);
            I.say(b);
            throw new Error();
        }

        z ++ ; 
    }



});