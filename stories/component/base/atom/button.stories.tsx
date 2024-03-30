import { Meta, StoryFn } from "@storybook/react";
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

const colorArr: ("primary" | "negative" | "positive" | "white")[] = [
  "primary",
  "negative",
  "positive",
  "white",
];

const Template: StoryFn<typeof Button> = (args) => (
  <div style={{ display: "flex", gap: "20px" }}>
    {colorArr.map((e, i) => (
      <Button {...args} color={e} key={i}>
        Button
      </Button>
    ))}
  </div>
);

export const Small = Template.bind({});
Small.args = {
  size: "small"
}

export const Medium = Template.bind({});
Medium.args = {
  size: "medium"
}

export const Large = Template.bind({});
Large.args = {
  size: "large"
}


