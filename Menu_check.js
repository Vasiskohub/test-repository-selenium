Feature('litecart @tag1', {retries: 2});

Scenario('Menu_check', function* (I) {
    I.amOnPage('http://localhost/litecart/admin/');
    I.fillField("//input[@name='username']", 'admin');
    I.fillField("//input[@name='password']", 'admin');
    I.click("//button[@value='Login']");
    var app = yield I.grabNumberOfVisibleElements(`//*[contains(@id,'app-')]`);
    var i = 0;
        while (i < app) {
        I.click('//*[contains(@id,"app-")][' + [(i+1)] +']');
        I.seeElement("//h1");
    var doc = yield I.grabNumberOfVisibleElements(`//ul[@class='docs']//li`);
        if (doc > 0) {   
    var a = 0;
        while (a < doc) {
        I.click('//ul[@class="docs"]//li[' + [(a+1)] +']');
        I.seeElement("//h1");

        a ++ ;  
    }

    }

        i ++ ;  

    }

});
