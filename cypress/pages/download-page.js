import { UrlConstants } from "../constants/page-constants";

const BTN_DOWNLOAD_PHOTO = "//header//a[@title='Download photo']";
export const DownloadPage = {
  navigatePhotoDownload(photoId) {
    cy.visit(UrlConstants.URL_PHOTO_DETAILS_PAGE(photoId));
  },
  clickDownloadPhotoBtn() {
    cy.xpath(BTN_DOWNLOAD_PHOTO)
      .invoke("attr", "href")
      .then((href) => {
        cy.log(href);
        cy.downloadFile(href, "cypress/downloads", "random-photo.jpg").then(
          () => {
            cy.xpath(BTN_DOWNLOAD_PHOTO).click();
          }
        );
      });
  },
};
