import React from "react";

interface LayoutProps {}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};
