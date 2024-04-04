import TastePreview from "@/components/base/organism/taste-preview";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Component/Base/Organism/TastePreview",
  component: TastePreview,
} as Meta;

type Story = StoryObj<Meta>;

export const Default: Story = {
    args:{
        title:"이것은 임시 제목입니다",
        imgURL: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    }
};
