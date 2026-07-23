import config from "./vite.config";
import { defineConfig } from "vitest/config";

export default defineConfig({
  pllugins: [...config.plugins],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/vitest-setup.js",
  },
});
