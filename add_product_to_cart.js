Feature('litecart @tag1', { retries: 0 });

Scenario('add_product_to_cart', function*(I) {

    I.say("Добавляю в корзину три товара и убеждаюсь, что они попали в корзину");
    var i = 0;
    while (i < 3) {
        I.amOnPage('http://localhost/litecart/');
        I.click("//*[contains(@id,'box-most')]//li[1][contains(@class, 'product')]");

        var number = yield I.grabNumberOfVisibleElements("//select[@name='options[Size]']");
        if (number > 0) {
            I.selectOption('//select[@name="options[Size]"]', 'Small');
        }
        I.click("//button[@value='Add To Cart']");
        I.waitForText('' + [i + 1] + '', 5, '//span[@class="quantity"]');
        i++;
    }

    I.say("Перехожу в корзину, удаляю по очереди каждую позицию, убеждаюсь что они удалены");
    I.click("//*[contains(text(),'Checkout')]");

    var b = yield I.grabNumberOfVisibleElements("//li[@class='shortcut']");
    var a = 0;
    while (a < b) {
        var name = yield I.grabAttributeFrom('(//a//strong[contains(text(),"")])[1]', 'innerHTML');
        I.click("(//*[@name='remove_cart_item'])[1]");
        I.waitUntilExists('//*[contains(text(), "' + name + '")]', 20);
        a++;
    }

});