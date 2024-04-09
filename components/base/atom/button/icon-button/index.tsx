import { ReactNode } from "react";
import Button, { ButtonPropType } from "..";
import Icon from "../../icon";

interface PropType extends ButtonPropType {
  iconColor?: "white" | "black" | "origin";
  src: string;
  iconSize?: "small" | "medium" | "large" | "xlarge" | "huge";
  children?: ReactNode;
}

export default function IconButton({
  size = "medium",
  iconSize = "medium",
  iconColor = "white",
  children,
  src,
  ...props
}: PropType) {
  return (
    <Button fit color="transparent" {...props}>
      <Icon src={src} alt={""} size={iconSize} color={iconColor} />
      {children}
    </Button>
  );
}
