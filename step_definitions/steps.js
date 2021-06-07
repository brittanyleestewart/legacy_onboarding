const { I, janusObituaryPage } = inject();
// Add in your custom step files

Given(/I am on a (\w+) obituary page/, async (pageType) => {
  console.log(pageType)

  const url = await janusObituaryPage.getObituaryRecord()
  I.amOnPage(url)
});

When('I scroll to the Guestbook section', () => {
  I.scrollTo(janusObituaryPage.fields.yourName)
})

Then('I should be able to fill out the guestbook', () => {
  janusObituaryPage.submitForm('Brit', 'Testing', 'bstewart@qualityworkscg.com')
})

Then('I should be able to submit the entry', () => {
  I.click(janusObituaryPage.submitButton)

})
