import type { Preview } from "@storybook/react";
import React from "react";
import colorThemeVar, { colorThemeClass } from "../theme/color-theme.css";
import { typoThemeClass } from "../theme/typo-theme.css";
import { sizeThemeClass } from "../theme/size-theme.css";
import "../app/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main
        className={`${typoThemeClass} ${colorThemeClass} ${sizeThemeClass}`}
        style={{
          minHeight: "100vh",
          padding: "24px",
          background: `linear-gradient(to bottom, ${colorThemeVar.background.dark}, ${colorThemeVar.background.regular})`,
        }}
      >
        <Story />
      </main>
    ),
  ],
};

export default preview;
