import { POST_STATUS, RESPONSE_MESSAGE } from "../../constants/api-constants";
import { CreateNewCollectionSchema } from "../../schemas/create-new-collection-schema";
import { CollectionHelpers } from "../../utils/collection-helpers";

describe("Create New Collection", () => {
  let token = Cypress.env("token");
  let title = "Private Collection";
  let description = "This is a private collection";
  let isPrivate = true;
  describe("Create a new collection successfully", () => {
    it("Create a new collection successfully with all fields", function () {
      CollectionHelpers.createNewCollection(
        token,
        title,
        description,
        isPrivate
      );
      cy.get("@postResp").then((resp) => {
        cy.validateSchema(CreateNewCollectionSchema, resp.body);
        expect(resp.status).eq(POST_STATUS.SUCCESS);
        expect(resp.body.title).equal(title);
        expect(resp.body.description).equal(description);
        expect(resp.body.private).equal(isPrivate);
      });
    });

    it("Create a new collection successfully with all fields", function () {
      CollectionHelpers.createNewCollection(token, title, description, false);
      cy.get("@postResp").then((resp) => {
        cy.validateSchema(CreateNewCollectionSchema, resp.body);
        expect(resp.status).eq(POST_STATUS.SUCCESS);
        expect(resp.body.title).equal(title);
        expect(resp.body.description).equal(description);
        expect(resp.body.private).equal(!isPrivate);
      });
    });

    it("Create a new collection successfully with mandatory fields", function () {
      CollectionHelpers.createNewCollection(token, title, "", "");
      cy.get("@postResp").then((resp) => {
        expect(resp.status).eq(POST_STATUS.SUCCESS);
        expect(resp.body.title).equal(title);
        expect(resp.body.description).equal(null);
        expect(resp.body.private).equal(false);
      });
    });
  });

  describe("Create a new collection unsuccessfully", () => {
    it("Create a new collection unsuccessfully with unauthorized user", function () {
      CollectionHelpers.createNewCollection("", title, description, isPrivate);
      cy.get("@postResp").then((resp) => {
        expect(resp.status).eq(POST_STATUS.UNAUTHORIZED);
        expect(resp.body.errors.toString()).equal(
          RESPONSE_MESSAGE.MSG_UNAUTHORIZED_USER
        );
      });
    });

    it('Create a new collection unsuccessfully with incorrect type of "private" field', function () {
      CollectionHelpers.createNewCollection(
        token,
        title,
        description,
        "string"
      );
      cy.get("@postResp").then((resp) => {
        expect(resp.status).eq(POST_STATUS.ERROR);
        expect(resp.body.errors.toString()).equal(
          RESPONSE_MESSAGE.MSG_INVALID_DATA_TYPE_PRIVATE
        );
      });
    });
  });
});
