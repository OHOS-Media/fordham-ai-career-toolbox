// schemas/homepage.js
// export default {
//   name: "homepage",
//   title: "Home Page",
//   type: "document",
//   fields: [
//     {
//       name: "hero",
//       title: "Hero Section",
//       type: "object",
//       fields: [
//         {
//           name: "title",
//           title: "Title",
//           type: "string",
//         },
//         {
//           name: "description",
//           title: "Description",
//           type: "text",
//         },
//         {
//           name: "ctaText",
//           title: "CTA Button Text",
//           type: "string",
//         },
//         {
//           name: "ctaLink",
//           title: "CTA Button Link",
//           type: "string",
//         },
//       ],
//     },
//     {
//       name: "statistics",
//       title: "Statistics Section",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           fields: [
//             { name: "number", title: "Number", type: "string" },
//             { name: "text", title: "Text", type: "string" },
//           ],
//         },
//       ],
//     },
//     {
//       name: "aiPowered",
//       title: "AI Powered Section",
//       type: "object",
//       fields: [
//         {
//           name: "description",
//           title: "Description",
//           type: "text",
//         },
//       ],
//     },
//     {
//       name: "demoSection",
//       title: "Demo Section",
//       type: "object",
//       fields: [
//         {
//           name: "title",
//           title: "Title",
//           type: "string",
//         },
//         {
//           name: "description",
//           title: "Description",
//           type: "text",
//         },
//         {
//           name: "checkboxItems",
//           title: "Checkbox Items",
//           type: "array",
//           of: [{ type: "string" }],
//         },
//         {
//           name: "demoImage",
//           title: "Demo Image",
//           type: "image",
//           options: {
//             hotspot: true,
//           },
//         },
//       ],
//     },
//     {
//       name: "stepsSection",
//       title: "Steps Section",
//       type: "object",
//       fields: [
//         {
//           name: "title",
//           title: "Title",
//           type: "string",
//         },
//         {
//           name: "steps",
//           title: "Steps",
//           type: "array",
//           of: [
//             {
//               type: "object",
//               fields: [
//                 { name: "number", title: "Step Number", type: "string" },
//                 { name: "text", title: "Step Text", type: "string" },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "faqSection",
//       title: "FAQ Section",
//       type: "object",
//       fields: [
//         {
//           name: "title",
//           title: "Title",
//           type: "string",
//         },
//         {
//           name: "faqs",
//           title: "FAQs",
//           type: "array",
//           of: [
//             {
//               type: "object",
//               fields: [
//                 { name: "question", title: "Question", type: "string" },
//                 { name: "answer", title: "Answer", type: "text" },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

import { defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homepage",
  title: "Home Page",
  type: "document",
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
  ],
  preview: {
    select: {
      title: "versionName",
    },
  },
});
