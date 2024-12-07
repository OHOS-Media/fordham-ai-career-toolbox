import { defineField, defineType } from "sanity";
import { DesktopIcon } from "@sanity/icons";

const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: DesktopIcon,
  fields: [
    defineField({ name: "versionName", title: "Version Name", type: "string" }),
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "The main title that appears at the top of the About page",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Page Description",
      type: "text",
      description: "A brief description that appears below the title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [{ type: "reference", to: [{ type: "teamMember" }] }],
      description: "Add team members that will appear on the About page",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

export default aboutPageType;
