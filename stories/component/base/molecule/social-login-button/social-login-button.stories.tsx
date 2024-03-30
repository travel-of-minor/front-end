import GoogleLoginButton from "@/components/base/atom/molecule/social-login-button/google";
import KakaoLoginButton from "@/components/base/atom/molecule/social-login-button/kakao";
import NaverLoginButton from "@/components/base/atom/molecule/social-login-button/naver";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Component/Base/Molecule/SocialLogin",
} as Meta;

const Template:StoryFn = (_args) => (
    <div style={{display: 'flex',flexDirection: "column", gap:"40px"}}>
        <GoogleLoginButton/>
        <KakaoLoginButton/>
        <NaverLoginButton/>
    </div>
)

export const Default = Template.bind({});