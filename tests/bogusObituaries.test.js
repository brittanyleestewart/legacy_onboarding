const expect = require('chai').expect
const { janusObituaryPage } = inject();

Feature('bogusObituaries')
    //tag for onboarding tasks
    .tag('@onboarding')
    .tag('@currentTest')
    .tag('@obitPage')
    .tag('@REST')
    .tag('@only-qa');

//Data-Driven test
let obituaries = new DataTable(['url', 'status']);

obituaries.add(['https://www.qa-legacy.com/us/obituaries/chicagotribune/name/00', '404']);
obituaries.add(['https://www.qa-legacy.com/us/obituaries/chicagotribune/name/01', '404']);

//Pass dataTable to Data()
Data(obituaries).Scenario('Verify that a user cannot navigate to a incorrect obit link', async ({ I }) => {

    const data = await I.sendGetRequest('/us/obituaries/chicagotribune/name/00')

    console.log(data.status)

    expect(data.status).to.equal(404)

})
