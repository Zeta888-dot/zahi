import { defineField, defineType } from "sanity";

export const model = defineType({
  name: "model",
  title: "Model",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Women", "Men", "Kids"] },
    }),
    defineField({ name: "look", title: "Look / vibe", type: "string" }),
  ],
});