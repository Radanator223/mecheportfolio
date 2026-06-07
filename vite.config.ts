import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { access, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { PluginOption } from "vite";

const vercelOutputDir = ".vercel/output";
const vercelNitroFunctionName = "__nitro";

function vercelBuildOutputConfigPlugin(): PluginOption {
  return {
    name: "vercel-build-output-config",
    apply: "build",
    async closeBundle() {
      const outputDir = join(process.cwd(), vercelOutputDir);
      const functionDir = join(outputDir, "functions", `${vercelNitroFunctionName}.func`);

      await access(functionDir);
      await mkdir(outputDir, { recursive: true });
      await writeFile(
        join(outputDir, "config.json"),
        `${JSON.stringify(
          {
            version: 3,
            routes: [
              { handle: "filesystem" },
              { src: "/(.*)", dest: `/${vercelNitroFunctionName}` },
            ],
          },
          null,
          2,
        )}\n`,
      );

      const functionConfigPath = join(functionDir, ".vc-config.json");
      try {
        await access(functionConfigPath);
      } catch {
        await writeFile(
          functionConfigPath,
          `${JSON.stringify(
            {
              handler: "index.mjs",
              launcherType: "Nodejs",
              shouldAddHelpers: false,
              supportsResponseStreaming: true,
            },
            null,
            2,
          )}\n`,
        );
      }
    },
  };
}

export default defineConfig({
  plugins: [vercelBuildOutputConfigPlugin()],
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
      publicDir: ".vercel/output/static",
      serverDir: ".vercel/output/functions/__nitro.func",
    },
  },
});
