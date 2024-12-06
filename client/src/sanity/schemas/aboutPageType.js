import { defineField, defineType } from "sanity";
import { DesktopIcon } from "@sanity/icons";

export const aboutPageType = defineType({
  name: "aboutpage",
  title: "About Page",
  type: "document",
  icon: DesktopIcon,
  fields: [
    defineField({ name: "versionName", title: "Version Name", type: "string" }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required().error("Page description is required."),
    }),
  ],
});
