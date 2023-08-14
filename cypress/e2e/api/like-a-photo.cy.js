import { PhotoHelpers } from "../../utils/photo-helpers";
import { LikeAPhotoSchema } from "../../schemas/like-a-photo-schema";
import { POST_STATUS, RESPONSE_MESSAGE } from "../../constants/api-constants";

describe("Like a photo", () => {
  let token;
  beforeEach("Get a random photo ID", () => {
    token = Cypress.env("token");
    PhotoHelpers.getARandomPhoto(token);
    cy.get("@getResp").then((resp) => {
      cy.wrap(resp.body.id).as("randomPhotoId");
    });
  });

  describe("Like a photo successfully", () => {
    it("Like a photo successfully with random photo", function () {
      PhotoHelpers.likeAPhoto(token, this.randomPhotoId);
      cy.get("@postResp").then((resp) => {
        cy.validateSchema(LikeAPhotoSchema, resp.body);
        expect(resp.status).eq(POST_STATUS.SUCCESS);
        console.log(resp.body);
        expect(resp.body.photo.id).equal(this.randomPhotoId);
      });
    });
  });

  describe("Like a photo unsuccessfully", () => {
    it("Like a photo unsuccessfully with non-existed photo ID", function () {
      let nonExistedPhotoId = this.randomPhotoId + "abc";
      PhotoHelpers.likeAPhoto(token, nonExistedPhotoId);
      cy.get("@postResp").then((resp) => {
        expect(resp.status).eq(POST_STATUS.NOT_FOUND);
        expect(resp.body.errors.toString()).equal(
          RESPONSE_MESSAGE.MSG_NON_EXISTED_ID
        );
      });
    });

    it("Like a photo unsuccessfully with unauthorized user", function () {
      PhotoHelpers.likeAPhoto("", this.randomPhotoId);
      cy.get("@postResp").then((resp) => {
        expect(resp.status).eq(POST_STATUS.UNAUTHORIZED);
        expect(resp.body.errors.toString()).equal(
          RESPONSE_MESSAGE.MSG_UNAUTHORIZED_USER
        );
      });
    });
  });
});
