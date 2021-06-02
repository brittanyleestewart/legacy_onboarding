# Onboarding Legacy Project
This contains tasks 1 - 6 for the legacy onboarding project  created for Test Automation Engineers 
Details can be found here: https://legacycom.atlassian.net/wiki/spaces/T2/pages/2108882953/Onboarding%2BProject%2BTest%2BAutomation%2BEngineering

## Usage

# Running Tests
The basic command to run test for Janus Beta is ```npx codeceptjs run```

To run all of the Webdriver-based tests use ```npm run codeceptjs tests/obituaries.test.js```

To run all of the REST-based tests use ```npx codeceptjs run --grep "@currentTest"```