import React from "react";

interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const TextInput: React.FunctionComponent<TextInputProps> = ({
  className,
  ...props
}) => {
  return <input className={`${className ?? ""} `} {...props} />;
};
