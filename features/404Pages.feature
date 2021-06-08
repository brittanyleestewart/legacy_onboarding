Feature: Janus Obituaries: 404 Pages
  As a user
  I want to display an attractive error page when we are not able to serve an obituary

  Scenario: 404 page displays for bogus person ID
    Given I attempt to access a Janus Obituary for a bogus person ID
    Then I should see the Janus 404 page
    And I should see the following elements
      | Elements  |
      | image div |