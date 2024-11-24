import { defineField, defineType } from "sanity";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "links",
      title: "Link Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Section Title", type: "string" },
            {
              name: "items",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "title", title: "Link Title", type: "string" },
                    { name: "path", title: "Link Path", type: "string" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact Information",
      type: "object",
      fields: [
        { name: "email", title: "Email", type: "string" },
        { name: "phone", title: "Phone", type: "string" },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Platform Name", type: "string" },
            { name: "path", title: "Profile Path", type: "string" },
            { name: "icon", title: "Icon", type: "image" },
          ],
        },
      ],
    }),
  ],
});
