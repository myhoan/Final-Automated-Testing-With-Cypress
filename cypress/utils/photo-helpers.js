import { PHOTO_ENDPOINTS } from "../constants/api-constants";
import { getHeaders } from "./header-helper";
import { RequestHelpers } from "./request-helpers";

export const PhotoHelpers = {
  getARandomPhoto(token) {
    RequestHelpers.sendGetRequest(
      PHOTO_ENDPOINTS.ENDPOINT_GET_RANDOM_PHOTO,
      getHeaders(token)
    );
  },

  unlikeAPhoto(token, photoId) {
    RequestHelpers.sendDeleteRequest(
      PHOTO_ENDPOINTS.ENDPOINT_LIKE_A_PHOTO(photoId),
      getHeaders(token)
    );
  },

  likeAPhoto(token, photoId) {
    RequestHelpers.sendPostRequest(
      PHOTO_ENDPOINTS.ENDPOINT_LIKE_A_PHOTO(photoId),
      getHeaders(token)
    );
  },
};
