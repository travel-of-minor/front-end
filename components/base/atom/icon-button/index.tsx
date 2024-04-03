import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { iconButtonStyle } from "./icon-button.css";
import Icon from "../icon";
import classNames from "classnames";

interface PropType
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "small" | "medium" | "large" | "xlarge" | "huge";
  color?: "white" | "black" | "origin";
  src: string;
  children?: ReactNode;
}

export default function IconButton({
  size = "medium",
  color = "white",
  src,
  ...props
}: PropType) {
  return (
    <button
      {...props}
      className={classNames(iconButtonStyle, props?.className)}
    >
      <Icon src={src} alt={""} size={size} color={color} />
    </button>
  );
}
