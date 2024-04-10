import { skeletonStyle } from "./skeleton.css";

interface PropType {
  color?: "black" | "white";
  width?: "100%" | "75%" | "50%" | "25%";
  height?: "100%" | "75%" | "50%" | "25%" | "1em";
}

export default function Skeleton({ color, width, height }: PropType) {
  return (
    <div
      className={skeletonStyle({ color: color, width: width, height: height })}
    />
  );
}
