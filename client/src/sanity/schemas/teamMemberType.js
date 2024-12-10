import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const teamMemberType = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "student",
      title: "Is the Team Member a Student?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "studentInformation",
      title: "Student Information",
      type: "object",
      hidden: ({ parent }) => !parent?.student,
      fields: [
        defineField({
          name: "school",
          title: "School",
          type: "string",
        }),
        defineField({
          name: "major",
          title: "Major",
          type: "string",
        }),
        defineField({
          name: "graduation",
          title: "Graduation",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "teamMemberInformation",
      title: "Team Member Information",
      type: "object",
      hidden: ({ parent }) => parent?.student,
      fields: [
        defineField({
          name: "company",
          title: "Company",
          type: "string",
        }),
        defineField({
          name: "responsibilities",
          title: "Responsibilities",
          type: "text",
        }),
      ],
    }),
    defineField({
      name: "socialMediaLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        defineField({
          name: "linkedIn",
          title: "LinkedIn",
          type: "url",
        }),
        defineField({
          name: "gitHub",
          title: "GitHub",
          type: "url",
        }),
        defineField({
          name: "website",
          title: "Website",
          type: "url",
        }),
      ],
    }),
  ],
});

export default teamMemberType;
