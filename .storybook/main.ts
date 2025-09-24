import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
          "@components": path.resolve(__dirname, "../src/components"),
          "@assets": path.resolve(__dirname, "../src/assets"),
        }
      }
    })
  }
};
export default config;