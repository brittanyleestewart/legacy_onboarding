const expect = require('chai').expect
const { janusObituaryPage } = inject();

Feature('obituaries')
    //tag for onboarding tasks
    .tag('@onboarding');

Scenario('Verify that a user can add a message to the decedent guestbook',

    async ({ I, janusObituaryPage }) => {
        const url = await janusObituaryPage.getObituaryRecord();

        I.amOnPage(url)
        //I.amOnPage('https://www.qa-legacy.com/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379'); // opens qa-legacy site
        I.seeElement('[data-component="NameHeadingText"]');

        //Confirm first name
        //let headerText = await I.grabTextFrom(janusObituaryPage.fields.headerText);
        //expect(headerText).to.contain('Virginia')

        //Fill in Guest book fields
        I.scrollTo(janusObituaryPage.fields.yourName);
        I.click(janusObituaryPage.fields.yourName);
        I.fillField(janusObituaryPage.fields.yourName, 'Tester Testing');
        I.fillField(janusObituaryPage.fields.yourMessage, 'This is a Test message for onboarding task 1');
        I.fillField(janusObituaryPage.fields.yourEmail, 'bstewart@qualityworkscg.com');

        //To click submit button
        janusObituaryPage.createGuestBookEntry(janusObituaryPage.fields.yourName, janusObituaryPage.fields.yourMessage, janusObituaryPage.fields.yourEmail)
    });