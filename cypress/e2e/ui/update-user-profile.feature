Feature: Update profile
    @username @update_default_profile
    Scenario: Update the user in the Profile page
        Given I logged into the application with valid account
        And I go to my Profile section
        When I click Edit tags link
        And I edit all information of user
        And I click the Update Account button
        And I go to View Profile with new username
        Then I observe that it will take me to the Profile page
        And My full name is displayed as full name