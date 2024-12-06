import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error('Name is required.'),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required().error('Role is required.'),
    }),
    defineField({
      name: "student",
      title: "Is the Team Member a Student?",
      type: "boolean",
    }),
    defineField({
      name: "studentInformation",
      type: "object",
      fields: [
        { name: "school", title: "School", type: "string" },
        { name: "major", title: "Major", type: "string" },
        { name: "graduation", title: "Graduation", type: "string" },
      ],
      hidden: ({ parent }) => parent?.student === false,
    }),
    defineField({
      name: "teamMemberInformation",
      title: "Team Member Information",
      type: "object",
      fields: [
        { name: "company", title: "Company", type: "string" },
        { name: "responsibilities", title: "Responsibilities", type: "text" },
      ],
      hidden: ({ parent }) => parent?.student === true,
    }),
    defineField({
      name: "socialMediaLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "linkedIn", title: "LinkedIn", type: "string" },
        { name: "gitHub", title: "Git Hub", type: "string" },
        { name: "website", title: "Website", type: "string" },
      ],
      options: {
        collapsed: true,
      },
    }),
  ],
});
