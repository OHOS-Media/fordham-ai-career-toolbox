import { defineField, defineType } from "sanity";
import { DesktopIcon } from "@sanity/icons";

export const homePageType = defineType({
  name: "homepage",
  title: "Home Page",
  type: "document",
  icon: DesktopIcon,
  fields: [
    defineField({ name: "versionName", title: "Version Name", type: "string" }),
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required().error("Title is required."),
        },
        {
          name: "gradientTitle",
          title: "Gradient Title",
          type: "string",
          validation: (Rule) => Rule.required().error("Gradient title is required."),
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required().error("Description is required."),
        },
        {
          name: "ctaText",
          title: "CTA Button Text",
          type: "string",
          validation: (Rule) => Rule.required().error("CTA text is required."),
        },
      ],
      options: {
        collapsed: true,
      },
    }),
    defineField({
      name: "features",
      title: "Features Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required().error("Title is required."),
        },
        {
          name: "featureItems",
          title: "Feature Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule) => Rule.required().error("Title is required."),
                },
                {
                  name: "description",
                  title: "Description",
                  type: "string",
                  validation: (Rule) => Rule.required().error("Description is required."),
                },
                { name: "icon", title: "Feature Icon", type: "image", options: { hotspot: true } },
                { name: "iconAlt", title: "Feature Icon Alt Text", type: "string" },
              ],
            },
          ],
          validation: (Rule) => Rule.required().error("Feature items required."),
        },
      ],
      options: {
        collapsed: true,
      },
    }),
    defineField({
      name: "demoOverview",
      title: "Demo Overview",
      type: "array",
      of: [
        {
          type: "object",
          name: "demo",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required().error("Title is required."),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required().error("Description is required."),
            },
            {
              name: "highlights",
              title: "Highlights",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "text",
                      type: "string",
                      validation: (Rule) => Rule.required().error("Text is required."),
                    },
                    {
                      name: "icon",
                      type: "image",
                      options: { hotspot: true },
                      validation: (Rule) => Rule.required().error("Image is required."),
                    },
                    {
                      name: "iconAlt",
                      title: "Highlight Icon Alt Text",
                      type: "string",
                      validation: (Rule) => Rule.required().error("Alt text is required."),
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required().error("Highlights are required."),
            },
            {
              name: "demoImage",
              title: "Demo Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required().error("Demo image is required."),
            },
            { name: "imageLeft", title: "Align the image to the left?", type: "boolean" },
          ],
        },
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "quote",
              title: "Quote",
              type: "string",
              validation: (Rule) => Rule.required().error("Quote is required."),
            },
            {
              name: "text",
              title: "Text",
              type: "text",
              validation: (Rule) => Rule.required().error("Text is required."),
            },
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required().error("Name is required."),
            },
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required().error("Title is required."),
            },
            {
              name: "year",
              title: "Year",
              type: "number",
              validation: (Rule) => Rule.required().error("Year is required."),
            },
          ],
        },
      ],
      options: {
        collapsed: true,
      },
    }),
    defineField({
      name: "blogSection",
      title: "Blog Section",
      type: "object",
      fields: [
        {
          name: "featuredBlogsTitle",
          title: "Featured Blogs Title",
          type: "string",
          description: "The title shown above the featured blog posts",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: "userStorySection",
      title: "User Story Section",
      type: "object",
      fields: [
        {
          name: "userStoriesTitle",
          title: "User Stories Title",
          type: "string",
          description: "The title shown in the testimonials section",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "versionName",
    },
  },
});
