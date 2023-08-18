import { UrlConstants } from "../constants/page-constants";

const PHOTO_URL = (photoId) =>
  `//a[contains(@href, '${photoId}') and not (@title='Download photo')]`;
const PHOTO = "//a[contains(@itemprop, 'contentUrl')]";
const BTN_REMOVE_FROM_COLLECTION =
  "//div[contains(@class, 'Modal')]//button[@title='Add to collection']";
const COLLECTION_BAR = (collectionTitle) =>
  `//span[text()='${collectionTitle}']`;

export const CollectionDetailsPage = {
  navigateCollectionDetailsPage(collectionId) {
    cy.visit(UrlConstants.URL_COLLECTION_DETAILS_PAGE(collectionId));
  },
  getPhoto(photoId) {
    return cy.xpath(PHOTO_URL(photoId));
  },
  getAllPhotosInCollection() {
    return cy.xpath(PHOTO);
  },
  clickFirstPhoto() {
    cy.xpath(PHOTO).first().click();
  },
  clickRemoveBtn() {
    cy.xpath(BTN_REMOVE_FROM_COLLECTION).click();
  },
  clickCollectionTitle(collectionTitle) {
    cy.xpath(COLLECTION_BAR(collectionTitle)).click();
  },
  getFirstPhotoUrl() {
    return cy.xpath(PHOTO).first().invoke("attr", "href");
  },
};
