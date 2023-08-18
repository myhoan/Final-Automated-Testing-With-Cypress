import { UrlConstants } from "../constants/page-constants";

const TXT_FISTNAME = "#user_first_name";
const TXT_LASTNAME = "#user_last_name";
const TXT_EMAIL = "#user_email";
const TXT_USERNAME = "#user_username";
const TXT_LOCATION = "#user_location";
const TXT_URL = "#user_url";
const TXT_BIO = "#user_bio";
const TXT_INSTAGRAM = "#user_instagram_username";
const TXT_TWITTER = "#twitter_username";
const BTN_UPDATE_PROFILE = "//input[@value='Update account']";

export const ProfileDetailsPage = {
  inputProfileFirstName(firstName) {
    cy.get(TXT_FISTNAME).clear().type(firstName);
  },
  inputProfileLastName(lastName) {
    cy.get(TXT_LASTNAME).clear().type(lastName);
  },
  inputProfileEmail(email) {
    cy.get(TXT_EMAIL).clear().type(email);
  },
  inputProfileUsername(username) {
    cy.get(TXT_USERNAME).clear().type(username);
  },
  inputProfileUrl(url) {
    cy.get(TXT_URL).clear().type(url);
  },
  inputProfileLocation(location) {
    cy.get(TXT_LOCATION).clear().type(location);
  },
  inputProfileBio(bio) {
    cy.get(TXT_BIO).clear().type(bio);
  },
  inputProfileInstagram(instagramName) {
    cy.get(TXT_INSTAGRAM).clear().type(instagramName);
  },
  inputProfileTwitter(twitterName) {
    cy.get(TXT_TWITTER).clear().type(twitterName);
  },
  clickUpdateProfileBtn() {
    cy.xpath(BTN_UPDATE_PROFILE).click();
  },
};
