const { I } = inject();

const pageObj = {

  headerText: '[data-component="NameHeadingText"]',

  // setting locators
  fields: {
    yourName: '[data-component="TextBoxField"]',
    yourMessage: '[data-component="TextAreaField"]',
    yourEmail: '[data-component="EmailField"]',

    //locator for REST helper
    testCode: '[data-component="ErrorCodeBox"]'
  },
  submitButton: { css: '[data-component="GuestbookSubmitButton"]' },

  //Introducing methods
  submitForm(yourName, yourMessage, yourEmail) {
    I.fillField(this.fields.yourName, yourName);
    I.fillField(this.fields.yourMessage, yourMessage);
    I.fillField(this.fields.yourEmail, yourEmail);
  },

  createGuestBookEntry(yourName, yourMessage, yourEmail) {
    I.click(this.submitButton)
  },

  getTestCode(testCode) {
    I.seeElement('[data-component="ErrorCodeBox"]')
  },

  //Functions
  getObituaryRecord: async () => {
    const obit = await I.getJanusPersonRecord();

    return `https://www.qa-legacy.com/us/obituaries/${obit.Source}/name/${obit.FirstName}-${obit.LastName}-obituary?pid=${obit.PersonId}`
  },
}

/*getObitRecord: async () => {
  const obitBad = await I.getJanusPersonRecord();

  return 'https://www.qa-legacy.com/us/obituaries/bismarcktribune/name/daniel-fisher-obituary?pid=00'
},*/

module.exports = pageObj;
