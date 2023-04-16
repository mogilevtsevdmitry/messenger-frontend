import { ButtonHTMLAttributes } from "react";

import { Icon, IconProps } from "./icon";

export interface IconBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: IconProps["name"];
}

export const IconBtn = ({ className, name, type = "button", ...props }: IconBtnProps) => {
  return (
    <button
      type={type}
      className={`btn flex h-12 w-12 items-center justify-center rounded-full p-0  ${className}`}
      {...props}>
      <Icon name={name} className="h-5 w-5" />
    </button>
  );
};
