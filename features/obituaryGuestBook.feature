Feature: Janus Obituary Guestbook
    In order to pay my respects
    As a user
    I want to be able to add a message to a guestbook 

Scenario: Add message
    Given I have a valid obituary URL to access
    When I go the Janus Obituary page
    Then I should see the following elements:
    | Memories & Condolences form |