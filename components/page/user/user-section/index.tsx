import { bioStyle, nameStyle, userSectionStyle } from "./user-section.css";

interface PropType {
  name?: string;
  bio?: string;
}

export default function UserSection({
  name = "잘못된 사용자",
  bio = "아직 소개를 작성하지 않았어요.",
}: PropType) {
  return (
    <section className={userSectionStyle}>
      <h1 className={nameStyle}>{name}</h1>
      <p className={bioStyle}>{bio}</p>
    </section>
  );
}
