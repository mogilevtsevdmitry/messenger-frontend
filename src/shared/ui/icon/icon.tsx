import { SVGProps } from "react";

import { SpritesMap } from "./sprite.gen";

export type SpriteKey = {
  [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`;
}[keyof SpritesMap];

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
  name: SpriteKey;
}

export const Icon = ({ name, className, viewBox, ...props }: IconProps) => {
  const [spriteName, iconName] = name.split("/");

  return (
    <svg
      className={`inline-block select-none fill-current text-inherit ${className}`}
      viewBox={viewBox}
      focusable="false"
      aria-hidden
      {...props}>
      <use xlinkHref={`/sprite/${spriteName}.svg#${iconName}`} />
    </svg>
  );
};
