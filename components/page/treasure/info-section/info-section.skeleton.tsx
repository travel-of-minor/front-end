import Skeleton from "@/components/base/atom/skeleton";
import {
  authorStyle,
  imageContainerStyle,
  publisherStyle,
  sectionStyle,
  skeletonPositionStyle,
  titleStyle,
} from "./info-section.css";

export default function InfoSectionSkeleton() {
  return (
    <section className={sectionStyle}>
      <div className={imageContainerStyle}>
        <Skeleton height="100%" />
      </div>
      <h1 className={titleStyle}>
        <div className={skeletonPositionStyle}>
          <Skeleton width="25%" />
        </div>
      </h1>
      <div className={authorStyle}>
        <div className={skeletonPositionStyle}>
          <Skeleton width="10%" />
        </div>
      </div>
      <div className={publisherStyle}>
        <div className={skeletonPositionStyle}>
          <Skeleton width="10%" />
        </div>
      </div>
    </section>
  );
}
