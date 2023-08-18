Feature: Like photo
    @username @like_photo
    Scenario: List of liked photos
        Given I logged into the application with valid account
        And I like 3 random photos
        When I go to my Likes section
        Then I see the number of likes is 3
        And 3 photos appear in Likes section