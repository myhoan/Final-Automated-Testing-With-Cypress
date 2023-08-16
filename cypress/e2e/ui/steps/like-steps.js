import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { LikesPage } from "../../../pages/like-page";

When("I go to my Likes section", () => {
  LikesPage.navigateLikesPage(window.localStorage.getItem("username"));
});

Then("I see the number of likes is {int}", (number) => {
  LikesPage.getTotalLikes().should("have.text", number.toString());
});

Then("{int} photos appear in Likes section", () => {
  cy.get("@photoIdList").then((likedPhotoIdList) => {
    LikesPage.getPhotoUrls().then((elements) => {
      let urls = Array.from(elements, (element) =>
        element.getAttribute("href").toString().split("/").pop()
      );
      expect(likedPhotoIdList).to.contain.members(urls);
    });
  });
});
