import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../../pages/home-page";
import { DownloadPage } from "../../../pages/download-page";

When("I open a random photo", () => {
  HomePage.getRandomPhotos(1);
  cy.get("@photoIdList").then((photoIdList) => {
    photoIdList.forEach((photoId) => {
      DownloadPage.navigatePhotoDownload(photoId);
    });
  });
});

When("I download this photo", () => {
  DownloadPage.clickDownloadPhotoBtn();
});

Then(
  "I notice that the image is downloadable and the correct image has been saved",
  () => {
    cy.readFile("cypress/downloads/random-photo.jpg").should("exist");
  }
);
