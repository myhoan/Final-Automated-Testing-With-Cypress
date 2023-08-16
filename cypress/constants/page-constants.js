export const UrlConstants = {
  URL_LOGIN: "/login",
  URL_PROFILE_PAGE: (username) => `/@${username}`,
  URL_PHOTO_DETAILS_PAGE: (photoId) => `/photos/${photoId}`,
  URL_LIKE_PAGE: (username) => `/@${username}/likes`,
  URL_COLLECTIONS_PAGE: (username) => `/@${username}/collections`,
  URL_COLLECTION_DETAILS_PAGE: (collectionId) => `/collections/${collectionId}`,
};
