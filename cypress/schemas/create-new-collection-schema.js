export const CreateNewCollectionSchema = {
  $id: "CreateNewCollectionSchema",
  type: "object",
  properties: {
    id: {
      type: "integer",
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    published_at: {
      type: "string",
    },
    last_collected_at: {
      type: "string",
    },
    updated_at: {
      type: "string",
    },
    featured: {
      type: "boolean",
    },
    total_photos: {
      type: "integer",
    },
    private: {
      type: "boolean",
    },
    share_key: {
      type: "string",
    },
    cover_photo: {
      type: "null",
    },
    user: {
      type: "null",
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
      },
      required: ["self", "html", "photos"],
    },
  },
  required: [
    "id",
    "title",
    "description",
    "published_at",
    "last_collected_at",
    "updated_at",
    "featured",
    "total_photos",
    "private",
    "share_key",
    "cover_photo",
    "user",
    "links",
  ],
};
