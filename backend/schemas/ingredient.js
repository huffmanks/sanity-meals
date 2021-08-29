export default {
  name: "ingredient",
  title: "Ingredient",
  type: "document",
  fields: [
    {
      name: "ingredientName",
      title: "Ingredient Name",
      type: "string",
    },
    {
      name: "ingredientImage",
      title: "Ingredient Image",
      type: "image",
      option: {
        hotspot: true,
      },
    },
  ],
};