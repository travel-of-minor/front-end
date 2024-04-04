import GoogleLoginButton from "@/components/base/molecule/social-login-button/google";
import KakaoLoginButton from "@/components/base/molecule/social-login-button/kakao";
import NaverLoginButton from "@/components/base/molecule/social-login-button/naver";
import { sectionStyle } from "../section.css";
import { containerStyle } from "./login-section.css";

export default function LoginSection() {
  return (
    <section className={sectionStyle}>
      <div className={containerStyle}>
        <KakaoLoginButton />
        <GoogleLoginButton />
        <NaverLoginButton />
      </div>
    </section>
  );
}
