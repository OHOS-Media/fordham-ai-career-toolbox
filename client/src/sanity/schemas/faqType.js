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
    }),
    defineField({
      name: "answer",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "question",
    },
  },
});
