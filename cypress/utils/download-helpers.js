import { DOWNLOAD_ENPOINTS } from "../constants/api-constants";
import { getHeaders } from "./header-helper";
import { RequestHelpers } from "./request-helpers";

export const DownloadPhotoHelpers = {
  downloadARandomPhoto(photoId, token) {
    RequestHelpers.sendGetRequest(
      DOWNLOAD_ENPOINTS.ENDPOINT_DOWNLOAD_RANDOM_PHOTO(photoId),
      getHeaders(token)
    );
  },
};
