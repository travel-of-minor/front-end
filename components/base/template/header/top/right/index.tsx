"use client";

import { iconStyle, pStyle, rightStyle } from "./right.css";
import Link from "next/link";
import IconButton from "@/components/base/atom/icon-button";
import { useState } from "react";
import HeaderDrawer from "../../../header-drawer";

export default function Right() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        className={iconStyle}
        aria-label="menu-label"
        onClick={()=>{setIsDrawerOpen(true)}}
      />
      <HeaderDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </div>
  );
}
