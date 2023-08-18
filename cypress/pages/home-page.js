const URL_PHOTO_BY_ORDER = (order) =>
  `(//a[contains(@itemprop, 'contentUrl')])[${order}]`;

const BTN_DOWNLOAD_PHOTO = "//header//a[@title='Download photo']";
export const HomePage = {
  getRandomPhotos(number) {
    let photoIdList = [];
    for (let i = 1; i <= number; i++) {
      let random = Math.floor(Math.random() * 10) + 1;
      cy.xpath(URL_PHOTO_BY_ORDER(random))
        .invoke("attr", "href")
        .then((url) => {
          let photoId = url.toString().split("/").pop();
          photoIdList.push(photoId);
        });
    }
    cy.wrap(photoIdList).as("photoIdList");
  },
  clickDownloadPhotoBtn() {
    cy.xpath(BTN_DOWNLOAD_PHOTO).click();
  },
};
