import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import buttonStyle from "./button.css";
import classNames from "classnames";

export interface ButtonPropType
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "small" | "medium" | "large";
  color?: "primary" | "negative" | "positive" | "white" | "transparent";
  children?: ReactNode;
  fullWidth?: boolean;
  flat?: boolean;
  fit?: boolean;
}

export default function Button({
  size = "medium",
  color = "primary",
  children,
  fullWidth = false,
  flat = false,
  fit = false,
  ...props
}: ButtonPropType) {
  return (
    <button
      {...props}
      className={classNames(
        props?.className,
        buttonStyle({
          color: color,
          size: size,
          fullWidth: fullWidth,
          flat: flat,
          fit: fit,
        })
      )}
    >
      {children}
    </button>
  );
}
