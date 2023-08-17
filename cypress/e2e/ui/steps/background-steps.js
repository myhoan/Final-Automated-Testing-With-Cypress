import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { CollectionHelpers } from "../../../utils/collection-helpers";
import { PhotoHelpers } from "../../../utils/photo-helpers";
import dayjs from "dayjs";

Given("There is a private collection with two photos", () => {
  let token = Cypress.env("token");
  let newCollectionTitle =
    "Private Collection " + dayjs().format("YYYY-MM-DD HH:mm");

  CollectionHelpers.createNewCollection(token, newCollectionTitle, "", true);
  cy.get("@postResp").then((collection) => {
    for (let i = 0; i < 2; i++) {
      PhotoHelpers.getARandomPhoto(token);
      cy.get("@getResp").then((photo) => {
        CollectionHelpers.addPhotoToCollection(
          token,
          collection.body.id,
          photo.body.id
        );
      });
    }
    cy.wrap(collection.body.id).as("newCollectionId");
  });
  cy.wrap(newCollectionTitle).as("newCollectionTitle");
});
