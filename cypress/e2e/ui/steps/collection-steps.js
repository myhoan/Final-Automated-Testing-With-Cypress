import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { CollectionPage } from "../../../pages/collection-page";

Then("I go to the collection", () => {
  cy.get("@newCollectionTitle").then((collectionTitle) => {
    CollectionPage.navigateCollectionPage(
      window.localStorage.getItem("username")
    );
    CollectionPage.clickOnCollection(collectionTitle);
  });
});
