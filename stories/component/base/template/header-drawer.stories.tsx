import HeaderDrawer from "@/components/base/template/header-drawer";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Component/Base/Template/HeaderDrawer",
  component: HeaderDrawer,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

type Story = StoryObj<Meta>;

export const Default: Story = {};