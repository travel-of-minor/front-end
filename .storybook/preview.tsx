import type { Preview } from "@storybook/react";
import React from "react";
import { colorThemeClass } from "../theme/color-theme.css";
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
        style={{backgroundColor: "#000", minHeight: "100vh", padding: "24px"}}
      >
        <Story />
      </main>
    ),
  ],
};

export default preview;
