import { IIconProps } from "../@types/interface";

export function More({
  width = 12,
  height = 3,
  color = "#7f7f7f",
  className = "",
}: IIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 12 2.666" className={className}>
        <path d="M9.334,1.333a1.333,1.333,0,1,1,1.333,1.333A1.333,1.333,0,0,1,9.334,1.333Zm-4.667,0A1.333,1.333,0,1,1,6,2.666,1.333,1.333,0,0,1,4.667,1.333ZM0,1.333A1.333,1.333,0,1,1,1.333,2.666,1.333,1.333,0,0,1,0,1.333Z" fill={color}></path>
    </svg>
  );
}