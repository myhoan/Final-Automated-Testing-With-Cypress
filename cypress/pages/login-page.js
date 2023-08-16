import { UrlConstants } from "../constants/page-constants";

const TXT_EMAIL = "#user_email";
const TXT_PASSWORD = "#user_password";
const BTN_LOGIN = "//input[@value='Login']";

export const LoginPage = {
  navigateLoginPage() {
    cy.visit(UrlConstants.URL_LOGIN);
  },
  inputUserEmail(email) {
    cy.get(TXT_EMAIL).type(email);
  },
  inputPassword(password) {
    cy.get(TXT_PASSWORD).type(password);
  },
  clickLoginBtn() {
    cy.xpath(BTN_LOGIN).click();
  },
};
