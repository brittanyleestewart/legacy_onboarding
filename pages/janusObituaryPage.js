const { I } = inject();

const pageObj = {

  headerText: '[data-component="NameHeadingText"]',

  // setting locators
  fields: {
    yourName: '[data-component="TextBoxField"]',
    yourMessage: '[data-component="TextAreaField"]',
    yourEmail: '[data-component="EmailField"]'
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

  //Functions
  getObituaryRecord: async () => {
    const obit = await I.getJanusPersonRecord();

    return `www.qa-legacy.com/us/obituaries/${obit.Source}/name/${obit.firstName}-${obit.lastName}-obituary?pid=${obit.personID}`
  },
}

module.exports = pageObj;
