exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    },
    ObituaryHelper: {
      require: './custom_helpers/obituaryHelper.js'
    },
    REST: {
      endpoint: 'https://www.qa-legacy.com/'
    }
  },
  include: {
    I: './steps_file.js',
    janusObituaryPage: './pages/janusObituaryPage'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
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
    }
  },
  tests: 'tests/*.test.js',
  name: 'legacy'
}