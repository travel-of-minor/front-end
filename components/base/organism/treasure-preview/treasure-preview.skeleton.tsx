import Skeleton from "../../atom/skeleton";
import PreviewInfoSkeleton from "./preview-info/preview-info.skeleton";
import {
  containerStyle,
  imageContainerStyle,
  liStyle,
} from "./treasure-preview.css";

export default function TreasurePreviewSkeleton() {
  return (
    <li className={liStyle}>
      <div className={containerStyle}>
        <div className={imageContainerStyle}><Skeleton height="100%"/></div>
        <PreviewInfoSkeleton />
      </div>
    </li>
  );
}
