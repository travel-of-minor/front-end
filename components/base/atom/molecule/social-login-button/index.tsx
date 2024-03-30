import { InternalLinkProps } from "@/type/internal-link-props";
import Link from "next/link";
import buttonStyle from "../../button/button.css";
import Image from "next/image";
import socialLoginButtonStyle from "./social-login-button.css";

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
      <Image width={16} height={16} alt={text} src={imageURL} />
      {text}
    </Link>
  );
}
