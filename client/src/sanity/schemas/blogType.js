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
      description: (
        <>
          Please use appropriate headings for your content.
          <br />
          Start with H2 for main sections.
          <br />
          Use H3 for subsections.
          <br />
          Use H4 for minor sections.
        </>
      ),
      options: {
        spellCheck: true,
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          { title: "Code", value: "code" },
          { title: "Highlight", value: "highlight" },
          { title: "Superscript", value: "sup" },
          { title: "Subscript", value: "sub" },
          { title: "Small", value: "small" },
        ],
        styles: [
          { title: "Normal", value: "normal" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
          { title: "Quote", value: "blockquote" },
          { title: "Large Quote", value: "blockquote-large" },
          { title: "Lead Paragraph", value: "lead" },
          { title: "Note", value: "note" },
          { title: "Warning", value: "warning" },
        ],
        lists: [
          { title: "Bullet", value: "bullet" },
          { title: "Numbered", value: "number" },
          { title: "Check List", value: "checkbox" },
        ],
      },
      validation: (Rule) =>
        Rule.custom((blocks, context) => {
          if (context.document?.contentType !== "blockContent") return true;
          if (!blocks) return "Content is required.";
          return true;
        }),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
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
