import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../../pages/login-page";

Given("I logged into the application with valid account", () => {
  LoginPage.navigateLoginPage();
  LoginPage.inputUserEmail(Cypress.env("email"));
  LoginPage.inputPassword(Cypress.env("password"));
  LoginPage.clickLoginBtn();
});
