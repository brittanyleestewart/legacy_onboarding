const expect = require('chai').expect

Feature('obituaries')
    //tag for onboarding tasks
    .tag('@onboarding');

Scenario('Verify that a user can add a message to the decedent guestbook',

    async ({ I }) => {

        I.amOnPage('https://www.qa-legacy.com/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379'); // opens qa-legacy site
        I.seeElement('[data-component="NameHeadingText"]');

        //Confirm first name
        let headerText = await I.grabTextFrom('[data-component="NameHeadingText"]');
        expect(headerText).to.contain('Virginia')

        //Fill in Guest book fields
        I.scrollTo('[data-component="TextBoxField"]');
        I.fillField('[data-component="TextBoxField"]', 'Tester Testing');
        I.fillField('[data-component="TextAreaField"]', 'This is a Test message for onboarding task 1');
        I.fillField('[data-component="EmailField"]', 'bstewart@qualityworkscg.com');

        //To click submit button
        I.click('[data-component="GuestbookSubmitButton"]')
    });