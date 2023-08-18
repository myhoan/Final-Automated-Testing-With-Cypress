import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { ProfilePage } from "../../../pages/profile-page";

When("I go to my Profile section", () => {
  ProfilePage.navigateProfilePage(window.localStorage.getItem("username"));
});

When("I click Edit tags link", () => {
  ProfilePage.clickNavigatepProfileDetailsBtn();
});

When("I go to View Profile with new username", () => {
  ProfilePage.navigateProfilePage(Cypress.env("userProfile").username);
});

Then("I observe that it will take me to the Profile page", () => {
  cy.location().should((loc) => {
    expect(loc.pathname).to.equal(`/@${Cypress.env("userProfile").username}`);
  });
});

Then("My full name is displayed as full name", function () {
  ProfilePage.getTextFullName().should(
    "have.text",
    `${Cypress.env("userProfile").first_name} ${
      Cypress.env("userProfile").last_name
    }`
  );
});
