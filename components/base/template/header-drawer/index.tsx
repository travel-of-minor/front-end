"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import DrawerContainer from "../../organism/drawer-container";
import { containerStyle } from "./header-drawer.css";

const DrawerContext = createContext<{
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
          <DrawerContext.Provider
            value={{ isOpen: isOpen, setIsOpen: setIsOpen }}
          >
            <div className={containerStyle}>
              
            </div>
          </DrawerContext.Provider>
        </DrawerContainer>
      )}
    </>
  );
}
