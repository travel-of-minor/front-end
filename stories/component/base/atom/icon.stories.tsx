import Icon from "@/components/base/atom/icon";
import { Meta, StoryFn } from "@storybook/react";
import { CSSProperties } from "react";

export default {
  title: "Component/Base/Atom/Icon",
  component: Icon,
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
    },
  },
} as Meta;

function divStyle(color: string): CSSProperties {
  return {
    backgroundColor: color,
    flex: 1,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 16,
    padding: 16,
  };
}

const sizeArr: ("small" | "medium" | "large" | "xlarge" | "huge")[] = [
  "small",
  "medium",
  "large",
  "xlarge",
  "huge",
];

const Template: StoryFn<typeof Icon> = (args) => (
  <div style={{ display: "flex", width: "100%", height: "100%" }}>
    <div style={divStyle("black")}>
      {sizeArr.map((e, i) => (
        <Icon
          {...args}
          src="/icons/kakao-icon.svg"
          alt="icon"
          key={i}
          size={e}
        />
      ))}
    </div>
    <div style={divStyle("gray")}>
    {sizeArr.map((e, i) => (
        <Icon
          {...args}
          src="/icons/kakao-icon.svg"
          alt="icon"
          key={i}
          size={e}
        />
      ))}
    </div>
    <div style={divStyle("white")}>
    {sizeArr.map((e, i) => (
        <Icon
          {...args}
          src="/icons/kakao-icon.svg"
          alt="icon"
          key={i}
          size={e}
        />
      ))}
    </div>
  </div>
);

export const Default = Template.bind({});
