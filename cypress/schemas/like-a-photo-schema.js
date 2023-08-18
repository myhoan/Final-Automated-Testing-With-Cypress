export const LikeAPhotoSchema = {
  $id: "LikeAPhotoSchema",
  type: "object",
  properties: {
    photo: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
        width: {
          type: "integer",
        },
        height: {
          type: "integer",
        },
        color: {
          type: "string",
        },
        blur_hash: {
          type: "string",
        },
        likes: {
          type: "integer",
        },
        liked_by_user: {
          type: "boolean",
        },
        description: {
          type: "string",
        },
        urls: {
          type: "object",
          properties: {
            raw: {
              type: "string",
            },
            full: {
              type: "string",
            },
            regular: {
              type: "string",
            },
            small: {
              type: "string",
            },
            thumb: {
              type: "string",
            },
          },
          required: ["raw", "full", "regular", "small", "thumb"],
        },
        links: {
          type: "object",
          properties: {
            self: {
              type: "string",
            },
            html: {
              type: "string",
            },
            download: {
              type: "string",
            },
          },
          required: ["self", "html", "download"],
        },
      },
      required: [
        "id",
        "width",
        "height",
        "color",
        "blur_hash",
        "likes",
        "liked_by_user",
        "description",
        "urls",
        "links",
      ],
    },
    user: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
        username: {
          type: "string",
        },
        name: {
          type: "string",
        },
        links: {
          type: "object",
          properties: {
            self: {
              type: "string",
            },
            html: {
              type: "string",
            },
            photos: {
              type: "string",
            },
            likes: {
              type: "string",
            },
          },
          required: ["self", "html", "photos", "likes"],
        },
      },
      required: ["id", "username", "name", "links"],
    },
  },
  required: ["photo", "user"],
};
