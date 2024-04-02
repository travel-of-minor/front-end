"use client";

import { iconStyle, pStyle, rightStyle } from "./right.css";
import Link from "next/link";
import IconButton from "@/components/base/atom/icon-button";

export default function Right() {
  return (
    <div className={rightStyle}>
      <Link href="/" className={pStyle}>
        <p>로그인</p>
      </Link>
      <IconButton
        src="/icons/menu-icon.svg"
        name="menu"
        color="white"
        size="xlarge"
      />
    </div>
  );
}
