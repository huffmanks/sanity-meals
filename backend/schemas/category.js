export default {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
      {
        name: 'categoryName',
        title: 'Category Name',
        type: 'string',
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "categoryName",
          maxLength: 96,
        },
      },
      {
        name: "categoryImage",
        title: "Category Image",
        type: "image",
        option: {
          hotspot: true,
        },
      },
    ]
  }