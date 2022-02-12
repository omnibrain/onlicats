import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { Menu } from "./Menu";

interface MenuButtonProps {}

export const MenuButton: React.FunctionComponent<MenuButtonProps> = ({}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed right-1 top-1 round hover:bg-slate-100 rounded-full"
        onClick={() => setOpen(true)}
      >
        <MenuIcon className="w-10 h-10 fill-slate-900 hover:fill-violet-900 m-3" />
      </button>
      <Menu open={open} onClose={() => setOpen(false)} />
    </>
  );
};
