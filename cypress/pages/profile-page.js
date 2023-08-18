import { UrlConstants } from "../constants/page-constants";

const BTN_VIEW_PROFILE = "//a[contains(text(), 'Edit profile')]";
const TXT_FULL_NAME = ".Fu4vG";
export const ProfilePage = {
  navigateProfilePage(username) {
    cy.visit(UrlConstants.URL_PROFILE_PAGE(username));
  },

  clickNavigatepProfileDetailsBtn() {
    cy.xpath(BTN_VIEW_PROFILE).click();
  },
  getTextFullName() {
    return cy.get(TXT_FULL_NAME);
  },
};
