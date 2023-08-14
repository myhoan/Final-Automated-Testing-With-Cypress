export const USER_ENDPOINTS = {
  ENDPOINT_GET_USER_PROFILE: "/me",
  ENDPOINT_GET_USERS_LIKED_PHOTOS: (username) => `/users/${username}/likes`,
};

export const COLLECTION_ENDPOINTS = {
  ENDPOINT_CREATE_NEW_COLLECTION: "/collections",
  ENDPOINT_ADD_PHOTO_TO_COLLECTION: (collectionId) =>
    `/collections/${collectionId}/add`,
};

export const PHOTO_ENDPOINTS = {
  ENDPOINT_GET_RANDOM_PHOTO: "/photos/random",
  ENDPOINT_LIKE_A_PHOTO: (photoId) => `/photos/${photoId}/like`,
};

export const RESPONSE_MESSAGE = {
  MSG_INVALID_DATA_TYPE_PRIVATE: "private is invalid",
  MSG_NON_EXISTED_ID: "Couldn't find Photo",
  MSG_UNAUTHORIZED_USER: "OAuth error: The access token is invalid",
};

export const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 404,
};

export const POST_STATUS = {
  SUCCESS: 201,
  UNAUTHORIZED: 401,
  ERROR: 400,
  NOT_FOUND: 404,
};
export const DELETE_STATUS = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  ERROR: 404,
};
export const GET_STATUS = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  ERROR: 404,
};
export const PUT_STATUS = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  ERROR: 404,
};
