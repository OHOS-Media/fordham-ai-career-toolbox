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
        { name: "title", title: "Title", type: "string" },
        { name: "gradientTitle", title: "Gradient Title", type: "string" },
        { name: "description", title: "Description", type: "text" },
        { name: "ctaText", title: "CTA Button Text", type: "string" },
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
        { name: "title", title: "Title", type: "string" },
        {
          name: "featureItems",
          title: "Feature Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "description", title: "Description", type: "string" },
                { name: "icon", title: "Feature Icon", type: "image", options: { hotspot: true } },
                { name: "iconAlt", title: "Feature Icon Alt Text", type: "string" },
              ],
            },
          ],
        },
      ],
      options: {
        collapsed: true,
      },
    }),
    defineField({
      name: "demo",
      title: "Demo Section",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "description", title: "Description", type: "text" },
        { name: "checkboxItems", title: "CheckboxItems", type: "array", of: [{ type: "string" }] },
        { name: "demoImage", title: "Demo Image", type: "image", options: { hotspot: true } },
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
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            {
              name: "highlights",
              title: "Highlights",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "text", type: "string" },
                    {
                      name: "icon",
                      type: "image",
                      options: { hotspot: true },
                    },
                    { name: "iconAlt", title: "Highlight Icon Alt Text", type: "string" },
                  ],
                },
              ],
            },
            { name: "demoImage", title: "Demo Image", type: "image", options: { hotspot: true } },
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
            { name: "quote", title: "Quote", type: "string" },
            { name: "text", title: "Text", type: "text" },
            { name: "name", title: "Name", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "year", title: "Year", type: "number" },
          ],
        },
      ],
      options: {
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "versionName",
    },
  },
});
