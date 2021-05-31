const expect = require('chai').expect
const { janusObituaryPage } = inject();

Feature('bogusObituaries')
    //tag for onboarding tasks
    .tag('@onboarding').tag('@currentTest');


Scenario('Verify that a user cannot navigate to a incorrect obit link', async ({ I }) => {

    const data = await I.sendGetRequest('/us/obituaries/chicagotribune/name/00')

    console.log(data.status)

    expect(data.status).to.equal(404)
})