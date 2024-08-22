import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function TopNav() {
  return (
    <Navbar  css={{ position: 'static' }} className="bg-background text-text flex items-center">
      <NavbarBrand className="flex-none">
        <p className="font-bold text-inherit">當卡士達華人基督教會</p>
      </NavbarBrand>
      <NavbarContent className="flex-1 flex gap-4 justify-center items-center">
        <NavbarItem>
          <Link className="text-text" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-text" href="./events">
            活動
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-text" href="./about">
            關於我們
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-text" href="./album">
            圖片集
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
