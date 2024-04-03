import { InternalLinkProps } from "@/type/internal-link-props";
import Link from "next/link";
import buttonStyle from "../../atom/button/button.css";
import Image from "next/image";
import socialLoginButtonStyle from "./social-login-button.css";
import Icon from "../../atom/icon";
import classNames from "classnames";

interface PropType extends InternalLinkProps {
  text: string;
  imageURL: string;
  alt?: string;
}

export default function SocialLoginButton({
  text,
  imageURL,
  alt = text,
  ...props
}: PropType) {
  return (
    <Link
      {...props}
      className={classNames(
        buttonStyle({ size: "large", color: "white", fullWidth: true }),
        socialLoginButtonStyle
      )}
    >
      <Icon size="medium" src={imageURL} alt={alt} />
      {text}
    </Link>
  );
}
