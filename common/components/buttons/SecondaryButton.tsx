import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

export const SecondaryButton: React.FunctionComponent<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${
        className ?? ""
      } h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 font-mono`}
    >
      {children}
    </button>
  );
};
