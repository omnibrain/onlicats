import React from "react";
import { Header } from "./header/Header";
import { MenuButton } from "./menu/MenuButton";

interface LayoutProps {}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="h-10">
      <Header></Header>
      {children}
    </div>
  );
};
