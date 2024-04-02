"use client";

import Icon from "@/components/base/atom/icon";
import { iconStyle, pStyle, rightStyle } from "./right.css";
import Link from "next/link";

export default function Right() {
  return (
    <div className={rightStyle}>
      <Link href="/" className={pStyle}>
        <p>로그인</p>
      </Link>
      <button className={iconStyle}>
        <Icon src="/icons/menu-icon.svg" alt="menu" color="white" size="xlarge" />
      </button>
      
    </div>
  );
}
