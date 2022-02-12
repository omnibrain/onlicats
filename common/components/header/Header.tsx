import { useSession, signOut, signIn } from "next-auth/react";
import React from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { Logo } from "../logo/Logo";
import { AccountButtons } from "./AccountButtons";

interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = ({ children }) => {
  return (
    <header className="h-20 flex justify-start sm:justify-center items-center space-x-1 px-4">
      <Logo />
      {children}
      <AccountButtons />
    </header>
  );
};
