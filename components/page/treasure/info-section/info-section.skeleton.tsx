import Skeleton from "@/components/base/atom/skeleton";
import {
  authorStyle,
  imageContainerStyle,
  sectionStyle,
  titleStyle,
} from "./info-section.css";

export default function InfoSectionSkeleton() {
  return (
    <section className={sectionStyle}>
      <div className={imageContainerStyle}>
        <Skeleton height="100%" />
      </div>
      <h1 className={titleStyle}>
        <Skeleton width="50%" />
      </h1>
      <div className={authorStyle}>
        <Skeleton width="25%" />
      </div>
    </section>
  );
}
