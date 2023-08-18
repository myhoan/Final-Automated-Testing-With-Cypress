import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { ProfileDetailsPage } from "../../../pages/profile-details-page";

When("I edit all information of user", () => {
  const {
    first_name,
    last_name,
    username,
    email,
    url,
    location,
    bio,
    instagram_username,
    twitter_username,
  } = Cypress.env("userProfile");
  ProfileDetailsPage.inputProfileFirstName(first_name);
  ProfileDetailsPage.inputProfileLastName(last_name);
  ProfileDetailsPage.inputProfileUsername(username);
  ProfileDetailsPage.inputProfileEmail(email);
  ProfileDetailsPage.inputProfileUrl(url);
  ProfileDetailsPage.inputProfileLocation(location);
  ProfileDetailsPage.inputProfileBio(bio);
  ProfileDetailsPage.inputProfileInstagram(instagram_username);
  ProfileDetailsPage.inputProfileTwitter(twitter_username);
});

When("I click the Update Account button", () => {
  ProfileDetailsPage.clickUpdateProfileBtn();
});
