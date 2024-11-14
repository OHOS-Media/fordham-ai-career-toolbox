import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  studioHost: "ramresume",
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
  },
});
