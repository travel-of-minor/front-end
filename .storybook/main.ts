import type { StorybookConfig } from "@storybook/nextjs";
import * as path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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
    "@storybook/addon-styling-webpack",
    "@storybook/addon-viewport",
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
    //for react server component
    experimentalRSC: true,
  },
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.plugins = config.resolve.plugins || [];
      // for alias @
      config.resolve.plugins.push(
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, "../tsconfig.json"),
        })
      );
    }

    config.plugins?.push(
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin()
    );

    // Exclude vanilla extract files from regular css processing
    config.module?.rules?.forEach((rule: any) => {
      if (
        typeof rule !== "string" &&
        rule?.test instanceof RegExp &&
        rule?.test?.test("test.css")
      ) {
        rule.exclude = /\.vanilla\.css$/i;
      }
    });

    config.module?.rules?.push({
      test: /\.vanilla\.css$/i, // Targets only CSS files generated by vanilla-extract
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve("css-loader"),
          options: {
            url: false, // Required as image imports should be handled via JS/TS import statements
          },
        },
      ],
    });

    return config;
  },
};
export default config;
