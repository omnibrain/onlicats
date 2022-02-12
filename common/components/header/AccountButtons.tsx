import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { MenuButton } from "../menu/MenuButton";

interface AccountButtonsProps {}

const Wrapper: React.FunctionComponent = ({ children }) => (
  <div className="absolute right-2">{children}</div>
);

export const AccountButtons: React.FunctionComponent<
  AccountButtonsProps
> = ({}) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div />;
  }

  if (session) {
    return <MenuButton />;
  }

  return (
    <Wrapper>
      <PrimaryButton onClick={() => signIn()}>Sign in</PrimaryButton>
    </Wrapper>
  );
};
