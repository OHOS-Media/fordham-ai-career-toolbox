import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required."),
    }),
    defineField({
      name: "featured",
      type: "boolean",
      description: "Check this box if you want this blog to be featured on the homepage",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) => `/blog/${input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)}`,
      },
      description: (
        <>
          Using the generate button is reccomended. Must start with /blog/...
          <br />
          ex: /blog/top-tips-on-how-to-succeed
        </>
      ),
      validation: (Rule) => Rule.required().error("Slug is required."),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required().error("Author is required."),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
      validation: (Rule) => Rule.required().error("Image is required."),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (Rule) => Rule.required().error("Publish date is required."),
    }),
    defineField({
      name: "body",
      type: "blockContent",
      validation: (Rule) => Rule.required().error("Content is required."),
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
