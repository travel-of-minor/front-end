import Link from "next/link";
import {
  descriptionStyle,
  sectionStyle,
  userNameSpanStyle,
  userNameStyle,
} from "./user-section.css";

interface PropType {
  userName: string;
  description: string;
  userId: string;
}

export default function UserSection({
  userName,
  description,
  userId,
}: PropType) {
  return (
    <section className={sectionStyle}>
      <Link href={`/user/${userId}`}>
        <h2 className={userNameStyle}>
          {userName}
          <span className={userNameSpanStyle}>님의 보물</span>
        </h2>
      </Link>
      <p className={descriptionStyle}>{description}</p>
    </section>
  );
}
