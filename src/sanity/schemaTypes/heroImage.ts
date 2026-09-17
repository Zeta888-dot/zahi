import { defineField, defineType } from "sanity";

export const heroImage = defineType({
  name: "heroImage",
  title: "Hero Image",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "alt", title: "Alt text", type: "string" }),
  ],
});