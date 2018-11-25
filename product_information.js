Feature('litecart @tag1', { retries: 0 });

Scenario('product_information', function*(I) {
    I.amOnPage('http://localhost/litecart/');

    I.say('Проверяю, что на главной странице параметры соответствуют требованиям');

    I.say('Обычная цена зачеркнута');
    var decoration = yield I.grabCssPropertyFrom('//*[contains(@id,"box-campaigns")]//*[@class="regular-price"]', 'text-decoration');
    var decoration = decoration.match(/line-through/);

    if (decoration != null) {

        I.say('Хорошо');
    } else {
        I.say('Плохо');
        throw new Error();
    }

    I.say('Обычная цена серого цвета');
    var regular_price = yield I.grabCssPropertyFrom('//*[contains(@id,"box-campaigns")]//*[@class="regular-price"]', 'color');
    regular_price = regular_price.match(/\d+/g);

    var a = Number(regular_price.slice(0, 1));
    var b = Number(regular_price.slice(1, 2));
    var c = Number(regular_price.slice(2, 3));

    if (a == b && b == c) {

        I.say('Хорошо');
    } else {
        I.say('Плохо');
        throw new Error();
    }
    
    I.say('Акционная цена красного цвета');
    var campaign_price = yield I.grabCssPropertyFrom('//*[contains(@id,"box-campaigns")]//*[@class="campaign-price"]', 'color');
    campaign_price = campaign_price.match(/\d+/g);
    var x = Number(campaign_price.slice(1, 2));
    var z = Number(campaign_price.slice(2, 3));

    if (x == 0 && z == 0) {

        I.say('Хорошо');
    } else {
        I.say('Плохо');
        throw new Error();
    }

    I.say('Размер акционной цены крупнее, чем обычной');
    var campaign_size = yield I.grabCssPropertyFrom('//*[contains(@id,"box-campaigns")]//*[@class="campaign-price"]', 'font-size');
    var regular_size = yield I.grabCssPropertyFrom('//*[contains(@id,"box-campaigns")]//*[@class="regular-price"]', 'font-size');
    campaign_size = campaign_size.match(/(\d+\.\d+)|(\d+)/g); 
    regular_size = regular_size.match(/(\d+\.\d+)|(\d+)/g);

    if (campaign_size > regular_size) {

        I.say('Хорошо');
    } else {
        I.say('Плохо');
        throw new Error();
    }

    I.say('Извлекаю: название товара, обычная цена, акционная цена');
    var duck_name = yield I.grabAttributeFrom("//*[contains(@id,'box-campaigns')]//*[contains(@class,'name')]", 'innerHTML');
    var regular_price_value = yield I.grabAttributeFrom("//*[contains(@id,'box-campaigns')]//*[@class='regular-price']", 'innerHTML');
    var campaign_price_value = yield I.grabAttributeFrom("//*[contains(@id,'box-campaigns')]//*[@class='campaign-price']", 'innerHTML');

    I.say('Проверяю, что на странице товара параметры соответствуют требованиям');
    I.click("//*[contains(@id,'box-campaigns')]//*[contains(@class,'name')]");

    I.say('Обычная цена зачеркнута');
    var decoration = yield I.grabCssPropertyFrom('//*[@class="regular-price"]', 'text-decoration');
    var decoration = decoration.match(/line-through/);

    if (decoration != null) {

        I.say('Хорошо');
    } else {
        I.say('Плохо');
        throw new Error();
    }

    I.say('Обычная цена серого цвета');
    var regular_price = yield I.grabCssPropertyFrom('//*[@class="regular-price"]', 'color');
    regular_price = regular_price.match(/\d+/g);
    var a = Number(regular_price.slice(0, 1));
    var b = Number(regular_price.slice(1, 2));
    var c = Number(regular_price.slice(2, 3));

    if (a == b && b == c) {

        I.say('Хорошо');
    } else {
        I.say('Плохо');
        throw new Error();
    }

    I.say('Акционная цена красного цвета');
    var campaign_price = yield I.grabCssPropertyFrom('//*[@class="campaign-price"]', 'color');
    campaign_price = campaign_price.match(/\d+/g);
    var x = Number(campaign_price.slice(1, 2));
    var z = Number(campaign_price.slice(2, 3));

    if (x == 0 && z == 0) {

        I.say('Хорошо');
    } else {
        I.say('Плохо');
        throw new Error();
    }

    I.say('Размер акционной цены крупнее, чем обычной');
    var campaign_size = yield I.grabCssPropertyFrom('//*[@class="campaign-price"]', 'font-size');
    var regular_size = yield I.grabCssPropertyFrom('//*[@class="regular-price"]', 'font-size');
    campaign_size = campaign_size.match(/(\d+\.\d+)|(\d+)/g);
    regular_size = regular_size.match(/(\d+\.\d+)|(\d+)/g);

    if (campaign_size > regular_size) {

        I.say('Хорошо');
    } else {
        I.say('Плохо');
        throw new Error();
    }

    I.say('Название товара, обычная цена, акционная цена такие же как и на главной странице');
    I.seeElement('//h1[contains(text(),"' + duck_name + '")]');
    I.seeAttributesOnElements('//*[@class="regular-price"]', { 'innerHTML': '' + regular_price_value + '' });
    I.seeAttributesOnElements('//*[@class="campaign-price"]', { 'innerHTML': '' + campaign_price_value + '' });


});