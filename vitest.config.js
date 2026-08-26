import config from "./vite.config";
import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  plugins: [...config.plugins],
  test: {
    projects: [
      {
        test: {
          include: ["./src/tests/unit/**/*.test.{js,jsx}"],
          name: "unit",
          globals: true,
          environment: "jsdom",
          setupFiles: "./src/tests/vitest-setup.js",
        },
      },
      {
        test: {
          include: ["./src/tests/e2e/**/*.browser.test.{js,jsx}"],
          name: "browser",
          globals: true,
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
