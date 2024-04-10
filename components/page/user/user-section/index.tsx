import { bioStyle, nameStyle, userSectionStyle } from "./user-section.css";
import ButtonContainer from "./button-container";
import { UserType } from "@/type/api/user";

interface PropType {
  id: string;
}

export default async function UserSection({ id }: PropType) {
  const user = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`
  ).then((res) => res.json())) as UserType;
  return (
    <section className={userSectionStyle}>
      <h3 className={nameStyle}>{user.name}</h3>
      <p className={bioStyle}>{user.bio}</p>
      <ButtonContainer id={id} />
    </section>
  );
}
