import type { Preview } from "@storybook/react";
import React from "react";
import { colorThemeClass } from "../theme/color-theme.css";
import { typoThemeClass } from "../theme/typo-theme.css";

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
      <div className={`${typoThemeClass} ${colorThemeClass}`}>
        <Story />
      </div>
    )
  ]
};


export default preview;
