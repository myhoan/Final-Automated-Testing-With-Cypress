import { UrlConstants } from "../constants/page-constants";

const BTN_LIKE = "//header//button[@title='Like']";

export const PhotoLikedPage = {
  navigatePhotoLikedPage(photoId) {
    cy.visit(UrlConstants.URL_PHOTO_DETAILS_PAGE(photoId));
  },
  clickLikeBtn() {
    cy.xpath(BTN_LIKE).click();
  },
};
