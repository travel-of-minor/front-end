import Image from "next/image";
import { iconStyle } from "./icon.css";

interface PropType {
  size?: "small" | "medium" | "large" | "xlarge" | "huge";
  color?: "white" | "black" | "origin";
  src: string;
  alt: string;
  className?: string;
}

const sizeObj: {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  huge: number;
} = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
  huge: 32,
};

export default function Icon({
  size = "medium",
  color = "origin",
  src,
  alt,
  className = "",
}: PropType) {
  return (
    <Image
      src={src}
      alt={alt}
      width={sizeObj[size]}
      height={sizeObj[size]}
      className={`${className} ${iconStyle({ color: color })}`}
    />
  );
}
