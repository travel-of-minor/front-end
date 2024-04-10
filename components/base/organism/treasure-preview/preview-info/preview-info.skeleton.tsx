import Skeleton from "@/components/base/atom/skeleton";
import {
  authorStyle,
  containerStyle,
  descriptionStyle,
  titleStyle,
} from "./preview-info.css";

export default function PreviewInfoSkeleton() {
  return (
    <div className={containerStyle}>
      <div className={titleStyle}>
        <Skeleton width="75%"/>
      </div>
      <div className={authorStyle}>
        <Skeleton width="25%"/>
      </div>
      <div className={descriptionStyle}>
        <Skeleton />
        <Skeleton width="75%"/>
      </div>
    </div>
  );
}
