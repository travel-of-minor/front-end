"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { drawerContainerStyle } from "./drawer.css";

interface PropType {
  parentId: string;
  children: ReactNode;
}

export default function DrawerContainer({ parentId, children }: PropType) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? (
    createPortal(
      <div className={drawerContainerStyle}>{children}</div>,
      document.getElementById(parentId) as HTMLElement
    )
  ) : (
    <></>
  );
}
