import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

export const PrimaryButton: React.FunctionComponent<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${
        className ?? ""
      } h-10 px-6 font-mono rounded-md bg-violet-900 text-white`}
    >
      {children}
    </button>
  );
};
