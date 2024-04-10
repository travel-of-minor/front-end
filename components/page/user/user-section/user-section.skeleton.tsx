import Skeleton from "@/components/base/atom/skeleton";
import { bioStyle, nameStyle, userSectionStyle } from "./user-section.css";

export default function UserSectionSkeleton() {
  return (
    <section className={userSectionStyle}>
      <h3 className={nameStyle}>
        <Skeleton width="50%" />
      </h3>
      <div className={bioStyle}>
        <Skeleton />
        <Skeleton width="75%" />
      </div>
    </section>
  );
}
