import config from "./vite.config";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [...config.plugins],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/vitest-setup.js",
  },
});
