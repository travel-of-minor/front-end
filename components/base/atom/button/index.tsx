import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import buttonStyle from "./button.css";

interface PropType {
  size?: "small" | "medium" | "large";
  color?: "primary" | "negative" | "positive" | "warn";
  children?: ReactNode;
  attribute?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  fullWidth?: boolean;
}

export default function Button({
  size = "medium",
  color = "primary",
  children,
  attribute,
  fullWidth = false,
}: PropType) {
  return (
    <button
      {...attribute}
      className={`${attribute?.className} ${buttonStyle({ color: color, size: size, fullWidth: fullWidth })}`}
    >
      {children}
    </button>
  );
}
