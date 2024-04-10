import {
  descriptionStyle,
  sectionStyle,
  userNameSpanStyle,
  userNameStyle,
} from "./user-section.css";

interface PropType {
  userName: string;
  description: string;
}

export default function UserSection({ userName, description }: PropType) {
  return (
    <section className={sectionStyle}>
      <h2 className={userNameStyle}>
        {userName}
        <span className={userNameSpanStyle}>님의 보물</span>
      </h2>
      <p className={descriptionStyle}>{description}</p>
    </section>
  );
}
