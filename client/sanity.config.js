import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemas";
import { structure } from "./src/sanity/structure";
import { RocketIcon } from "@sanity/icons";

export default defineConfig({
  name: "ram-resume",
  title: "Ram Resume",
  icon: RocketIcon,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  basePath: "/studio",
  schema,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
