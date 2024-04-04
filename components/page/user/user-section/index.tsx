import { bioStyle, nameStyle, userSectionStyle } from "./user-section.css";
import ButtonContainer from "./button-container";

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
      <h3 className={nameStyle}>{name}</h3>
      <p className={bioStyle}>{bio}</p>
      <ButtonContainer id="1"/>
    </section>
  );
}
