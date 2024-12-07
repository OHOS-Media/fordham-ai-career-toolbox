import { defineField, defineType } from "sanity";

const blogPageType = defineType({
  name: "blogPage",
  title: "Blog Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "The main title that appears at the top of the Blog page",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Page Description",
      type: "text",
      description: "A brief description that appears below the title",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default blogPageType; 