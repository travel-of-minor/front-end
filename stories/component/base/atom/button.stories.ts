import { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/base/atom/button";
export default {
  title: "Component/Base/Atom/Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "radio",
        options: ["primary", "negative", "positive", "warn"],
      },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
} as Meta;

type Story = StoryObj<typeof Button>;

export const SmallButton: Story = {
  args: { size: "small", children: "Button" },
};

export const MediumButton: Story = {
  args: { size: "medium", children: "Button" },
};

export const LargeButton: Story = {
  args: { size: "large", children: "Button" },
};
