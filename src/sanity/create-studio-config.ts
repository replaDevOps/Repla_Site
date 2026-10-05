import { visionTool } from "@sanity/vision";
import { defineConfig, type Config } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

/** Shared Studio config for CLI and the embedded /studio route. */
export function createStudioConfig(): Config {
  return defineConfig({
    basePath: "/studio",
    projectId,
    dataset,
    schema,
    plugins: [
      structureTool({ structure }),
      visionTool({ defaultApiVersion: apiVersion }),
    ],
  });
}
