import { BulbOutlineIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "Frequently Asked Question",
  type: "document",
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: "question",
      type: "string",
      validation: (Rule) => Rule.required().error("Question is required."),
    }),
    defineField({
      name: "answer",
      type: "text",
      validation: (Rule) => Rule.required().error("Answer is required."),
    }),
  ],
  preview: {
    select: {
      title: "question",
    },
  },
});
