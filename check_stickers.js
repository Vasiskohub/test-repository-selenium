<meta charset="UTF-8">
Feature('litecart @tag1', {retries: 2});

Scenario('check stickers', function* (I) {
    I.amOnPage('http://localhost/litecart/en/');

    var content = ['box-most', 'box-campaigns', 'box-latest'];
    var a = 0

        while (a < content.length) {
    I.say('Проверяю сколько товаров')
    var product = yield I.grabNumberOfVisibleElements(`//*[contains(@id,` + `'${content[a]}'` + `)]//li[contains(@class, "product")]`);
    var i = 0;
    I.say('Проверяю сколько стикеров у каждого из найденных товаров')
        while (i < product) {
    var sticker = yield I.grabNumberOfVisibleElements(`//*[contains(@id, ` + `'${content[a]}'` + `)]//li[` + (i + 1) + `][contains(@class, 'product')]//*[contains(@class, 'sticker')]`);
        if (sticker == 1) {   
    I.say('Хорошо');
    }
        else {
    I.say('Плохо');
        throw new Error();
    }

        i ++ ;  
    }
        a ++ ;

    }   

});
