import Skeleton from "@/components/base/atom/skeleton";
import {
  descriptionStyle,
  sectionStyle,
  userNameSpanStyle,
  userNameStyle,
} from "./user-section.css";

export default function UserSectionSkeleton() {
  return (
    <section className={sectionStyle}>
      <h2 className={userNameStyle}>
        <Skeleton width="25%"/>
        <span className={userNameSpanStyle}>님의 보물</span>
      </h2>
      <div className={descriptionStyle}><Skeleton width="75%"/></div>
    </section>
  );
}
