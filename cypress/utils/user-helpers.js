import { USER_ENDPOINTS } from "../constants/api-constants";
import { getHeaders } from "./header-helper";
import { RequestHelpers } from "./request-helpers";

export const UserHelpers = {
  getUserInfo(token) {
    RequestHelpers.sendGetRequest(
      USER_ENDPOINTS.ENDPOINT_GET_USER_PROFILE,
      getHeaders(token)
    );
  },

  updateUserprofile(token, body) {
    RequestHelpers.sendPutRequest(
      USER_ENDPOINTS.ENDPOINT_GET_USER_PROFILE,
      getHeaders(token),
      body
    );
  },

  getListLikedPhotos(token, username) {
    RequestHelpers.sendGetRequest(
      USER_ENDPOINTS.ENDPOINT_GET_USERS_LIKED_PHOTOS(username),
      getHeaders(token)
    );
  },
};
