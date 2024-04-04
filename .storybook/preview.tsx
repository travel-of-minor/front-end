import type { Preview } from "@storybook/react";
import React from "react";
import colorThemeVar, { colorThemeClass } from "../theme/color-theme.css";
import { typoThemeClass } from "../theme/typo-theme.css";
import { sizeThemeClass } from "../theme/size-theme.css";
import { Parameters } from '@storybook/react';
import "../app/global.css";

export const parameters: Parameters = {
  layout: 'fullscreen',
  
};

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
      <div
        className={`${typoThemeClass} ${colorThemeClass} ${sizeThemeClass}`}
        style={{
          fontFamily: "Noto Sans",
          height: "100vh",
          width: "100vw",
          boxSizing: "border-box",
          background: `linear-gradient(to bottom, ${colorThemeVar.background.dark}, ${colorThemeVar.background.regular})`,
        }}
      >
        <Story />
        <div id = "header-drawer"/>
      </div>
    ),
  ],
};

export default preview;
