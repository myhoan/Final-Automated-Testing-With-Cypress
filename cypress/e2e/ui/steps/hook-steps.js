import { Before } from "@badeball/cypress-cucumber-preprocessor";
import { PhotoHelpers } from "../../../utils/photo-helpers";
import { UserHelpers } from "../../../utils/user-helpers";

Before({ tags: "@username", order: 1 }, function () {
  UserHelpers.getUserInfo(Cypress.env("token"));
  cy.get("@getResp").then((resp) => {
    window.localStorage.setItem("username", resp.body.username);
  });
});

Before({ tags: "@like_photo", order: 2 }, function () {
  let token = Cypress.env("token");
  let username = window.localStorage.getItem("username");

  UserHelpers.getListLikedPhotos(token, username);
  cy.get("@getResp").then((listPhotos) => {
    for (let i = 0; i < listPhotos.body.length; i++) {
      let photoId = listPhotos.body[i].id;
      PhotoHelpers.unlikeAPhoto(token, photoId);
    }
  });
});

Before({ tags: "@update_default_profile", order: 3 }, function () {
  let token = Cypress.env("token");
  let bodyUserDefaultProfile;
  cy.fixture("profileData").then(
    ({
      first_name,
      last_name,
      username,
      email,
      url,
      location,
      bio,
      instagram_username,
      twitter_username,
    }) => {
      bodyUserDefaultProfile = {
        first_name,
        last_name,
        username,
        email,
        url,
        location,
        bio,
        instagram_username,
        twitter_username,
      };
    }
  );
  UserHelpers.updateUserprofile(token, bodyUserDefaultProfile);
});
