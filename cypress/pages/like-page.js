import { UrlConstants } from "../constants/page-constants";

const LBL_TOTAL_LIKES = "//a[@data-test='user-nav-link-likes']//span//span";
const PHOTO =
  "//a[contains(@itemprop, 'contentUrl') and not (@title='Download photo')]";

export const LikesPage = {
  navigateLikesPage(username) {
    cy.visit(UrlConstants.URL_LIKE_PAGE(username));
  },
  getTotalLikes() {
    return cy.xpath(LBL_TOTAL_LIKES);
  },
  getPhotoUrls() {
    return cy.xpath(PHOTO);
  },
};
