import type { StorybookConfig } from "@storybook/nextjs";
import * as path from "path";
import * as tsconfigPlugin from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  features: {
    experimentalRSC: true,
  },
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.plugins = config.resolve.plugins || [];
      config.resolve.plugins.push(
        new tsconfigPlugin.TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, "../tsconfig.json"),
        })
      );
    }

    return config;
  },
};
export default config;
