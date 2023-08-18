import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../../pages/home-page";
import { PhotoLikedPage } from "../../../pages/photo-liked-page";

Then("I like {int} random photos", (number) => {
  HomePage.getRandomPhotos(number);
  cy.get("@photoIdList").then((photoIdList) => {
    photoIdList.forEach((photoId) => {
      PhotoLikedPage.navigatePhotoLikedPage(photoId);
      PhotoLikedPage.clickLikeBtn();
    });
  });
});
