import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { CollectionDetailsPage } from "../../../pages/collection-details-page";

When("I remove 1 photo from the collection", () => {
  cy.get("@newCollectionTitle").then((collectionTitle) => {
    CollectionDetailsPage.clickFirstPhoto();
    CollectionDetailsPage.clickRemoveBtn();
    CollectionDetailsPage.clickCollectionTitle(collectionTitle);

    CollectionDetailsPage.getFirstPhotoUrl().then((url) => {
      let photoId = url.toString().split("/").pop();
      cy.wrap(photoId).as("removedPhotoId");
    });
  });
});

When("I go to Collection Details section", () => {
  cy.get("@newCollectionId").then((newCollectionId) => {
    CollectionDetailsPage.navigateCollectionDetailsPage(newCollectionId);
  });
});

When("the photo has been removed successfully from the collection", () => {
  cy.get("@newCollectionId").then((newCollectionId) => {
    CollectionDetailsPage.navigateCollectionDetailsPage(newCollectionId);
    cy.get("@removedPhotoId").then((removedPhotoId) => {
      CollectionDetailsPage.getPhoto(removedPhotoId).should("not.exist");
    });
  });
});

Then("there is only 1 remaining photo in the collection", () => {
  CollectionDetailsPage.getAllPhotosInCollection().should("have.length", 1);
});
