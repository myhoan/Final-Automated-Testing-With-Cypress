Feature: Remove photo
    Background:
        Given There is a private collection with two photos
    @username
    Scenario: Remove photos from the collection successfully
        Given I logged into the application with valid account
        Then I go to the collection
        Then I remove 1 photo from the collection
        When I go to Collection Details section
        Then the photo has been removed successfully from the collection
        And there is only 1 remaining photo in the collection