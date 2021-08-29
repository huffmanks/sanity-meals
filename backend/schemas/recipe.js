export default {
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    {
      name: "recipeName",
      title: "Recipe Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "recipeName",
        maxLength: 96,
      },
    },
    {
      name: "recipeImage",
      title: "Recipe Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "ingredient",
      title: "Ingredient",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "ingredient",
              title: "Ingredient",
              type: "reference",
              to: [
                    { type: "ingredient" }
                  ],
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "string",
            },
            {
              name: "unit",
              title: "Unit",
              type: "string",
              options: {
                list: ["grams", "cup", "Tbsp.", "tsp.", "oz.", "lb."],
              },
            },
          ],
          preview: {
            select: {
              title: "ingredient.ingredientName",
              media: "ingredient.ingredientImage",
              quantity: "quantity",
              unit: "unit",
            },
            // prepare({
            //   title,
            //   subtitle,
            //   media,
            //   quantity,
            //   unit,
            // }) {
            //   return {
            //     title,
            //     subtitle: `${quantity} ${unit}`,
            //     media,
            //   };
            // },

            prepare(selection) {
              const {title, quantity, unit, media} = selection
              return {
                title: title,
                subtitle: `${quantity ? quantity + unit : ''}`,
                media: media
              }
            },

          },
        },
      ],
    },
    {
      name: "instructions",
      title: "Instructions",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};