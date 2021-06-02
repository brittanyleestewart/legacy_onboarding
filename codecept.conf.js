const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/*.test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
    },

    ObituaryHelper: {
      require: './custom_helpers/obituaryHelper.js',
    },

    REST: {
      endpoint: "https://www.qa-legacy.com/",


    },

  },
  include: {
    I: './steps_file.js',
    janusObituaryPage: './pages/janusObituaryPage'
  },
  bootstrap: null,
  mocha: {},
  name: 'legacy',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
