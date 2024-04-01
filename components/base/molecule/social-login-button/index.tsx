import { InternalLinkProps } from "@/type/internal-link-props";
import Link from "next/link";
import buttonStyle from "../../atom/button/button.css";
import Image from "next/image";
import socialLoginButtonStyle from "./social-login-button.css";
import Icon from "../../atom/icon";

interface PropType extends InternalLinkProps {
  text: string;
  imageURL: string;
}

export default function SocialLoginButton({
  text,
  imageURL,
  ...props
}: PropType) {
  return (
    <Link
      {...props}
      className={`${buttonStyle({ size: "medium", color: "white", fullWidth: true })} 
      ${socialLoginButtonStyle}`}
    >
      <Icon size="medium" src={imageURL} alt={text}/>
      {text}
    </Link>
  );
}
