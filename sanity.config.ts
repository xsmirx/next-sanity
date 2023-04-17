import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "gfrimnxu",
  dataset: "production",
  title: "My personal Website",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
