import { createElement } from "react";
import { icons } from "./icons";
import { IIconProps } from "./@types/interface";
import { IconName } from "../../@types/iconName";

interface IIconWrapperProps extends IIconProps {
  icon: IconName;
}

export function Icon({
  icon,
  className,
  width,
  height,
  color,
}: IIconWrapperProps) {
  return <>{createElement(icons[icon], { width, height, color, className })}</>;
}
