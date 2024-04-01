import Image from "next/image";
import { iconStyle } from "./icon.css";

interface PropType {
  size?: "small" | "medium" | "large" | "xlarge";
  color?: "white" | "black" | "origin";
  src: string;
  alt: string;
}

const sizeObj: {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
} = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
};

export default function Icon({
  size = "medium",
  color = "origin",
  src,
  alt,
}: PropType) {
  return (
    <Image
      src={src}
      alt={alt}
      width={sizeObj[size]}
      height={sizeObj[size]}
      className={iconStyle({ color: color })}
    />
  );
}
