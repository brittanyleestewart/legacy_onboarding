@currentTest

Feature: Janus Obituary Guestbook
    In order to pay my respects
    As a user
    I want to be able to add a message to a guestbook

    Scenario: Add message
        Given I am on a Janus obituary page
        When I scroll to the Guestbook section
        Then I should be able to fill out the guestbook
        And I should be able to submit the entry

#     | Memories & Condolences form |