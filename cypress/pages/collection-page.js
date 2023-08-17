import { UrlConstants } from "../constants/page-constants";

const COLLECTION_CARD = (collectionTitle) =>
  `//div[text()='${collectionTitle}']//ancestor::a[contains(@href, 'collections')]`;

export const CollectionPage = {
  navigateCollectionPage(username) {
    cy.visit(UrlConstants.URL_COLLECTIONS_PAGE(username));
  },
  clickOnCollection(collectionTitle) {
    cy.xpath(COLLECTION_CARD(collectionTitle)).click();
  },
};
