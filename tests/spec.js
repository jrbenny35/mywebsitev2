describe('My Website Tests', function() {

    var numberOfProjects = 3;

    beforeEach(function () {
        browser.get('http://localhost:3000');
    });

    /*-------------------------------------------------------------------*/
    it('should have a title', function(){
        expect(browser.getTitle()).toEqual('Benjamin Forehand Jr');
    });

    /*-------------------------------------------------------------------*/
    //Test Nav Links load correct url
    it('should load navigation links', function () {
        element(by.id('side-nav')).all(by.tagName('h4'))
            .get(0)
            .click();
       expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/');
    });

    it('should load navigation links', function () {
        element(by.id('side-nav')).all(by.tagName('h4'))
            .get(1)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/about');
    });

    it('should load navigation links', function () {
        element(by.id('side-nav')).all(by.tagName('h4'))
            .get(2)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/resume');
    });

    it('should load navigation links', function () {
        element(by.id('side-nav')).all(by.tagName('h4'))
            .get(3)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/projects');
    });

    it('should load navigation links', function () {
        element(by.id('side-nav')).all(by.tagName('h4'))
            .get(4)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/contact');
    });

    /*-------------------------------------------------------------------*/
    //Load first link on main partial
    it('should load links on main page to correct url', function () {
        element(by.id('side-nav')).all(by.tagName('h4'))
            .get(0)
            .click();
        element(by.id('bigCallout')).all(by.tagName('a'))
            .get(0)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/about');
    });

    //Load second link on main partial
    it('should load links on main page to correct url', function () {
        element(by.id('side-nav')).all(by.tagName('h4'))
            .get(0)
            .click();
        element(by.id('inTouch')).all(by.tagName('a'))
            .get(0)
            .click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/contact');
    });

    /*-------------------------------------------------------------------*/
    //Check if projects load
    it('should load projects', function () {
        element(by.id('side-nav')).all(by.tagName('h4'))
            .get(3)
            .click();
        var currentProjects = element.all(by.css('.card .card-block h4'));
        expect(currentProjects.count()).toBe(numberOfProjects);
    });


    /*-------------------------------------------------------------------*/
    //Check form sends and changes Url
    it('should allow form input', function () {
        element(by.id('side-nav')).all(by.tagName('h4'))
            .get(4)
            .click();
        //Select form and send text
        element(by.tagName('form')).all(by.tagName('input'))
            .get(0)
            .sendKeys('Protractor Form Test');
        element(by.tagName('form')).all(by.tagName('input'))
            .get(1)
            .sendKeys('protractor@test.com');
        element(by.tagName('form')).all(by.tagName('input'))
            .get(2)
            .sendKeys('This is a test from protractor');
        element(by.css('.btn-primary')).click();
        //Expect browser to load page on success
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/contact');


    })


});