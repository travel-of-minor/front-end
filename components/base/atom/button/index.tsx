import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import buttonStyle from "./button.css";

interface PropType
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "small" | "medium" | "large";
  color?: "primary" | "negative" | "positive" | "white";
  children?: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  size = "medium",
  color = "primary",
  children,
  fullWidth = false,
  ...props
}: PropType) {
  return (
    <button
      {...props}
      className={`${props?.className} ${buttonStyle({ color: color, size: size, fullWidth: fullWidth })}`}
    >
      {children}
    </button>
  );
}
