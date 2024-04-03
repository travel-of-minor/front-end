"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import DrawerContainer from "../../organism/drawer-container";
import { containerStyle } from "./header-drawer.css";
import Top from "./top";
import Bottom from "./bottom";

export const HeaderDrawerContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({ isOpen: false, setIsOpen: () => {} });

interface PropType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderDrawer({ isOpen, setIsOpen }: PropType) {
  return (
    <>
      {isOpen && (
        <DrawerContainer parentId="header-drawer">
          <HeaderDrawerContext.Provider
            value={{ isOpen: isOpen, setIsOpen: setIsOpen }}
          >
            <div className={containerStyle}>
              <Top/>
              <Bottom/>
            </div>
          </HeaderDrawerContext.Provider>
        </DrawerContainer>
      )}
    </>
  );
}
