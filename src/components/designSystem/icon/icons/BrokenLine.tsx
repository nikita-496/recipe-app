import { IIconProps } from "../@types/interface";

export function BrokenLine({
  width = 24,
  height = 24,
  color = "black",
  className = "",
}: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 20"
      className={className}
      fill={color}
    >
      <path d="M14,15.838,8.949.684a1,1,0,0,0-1.9,0L4.279,9H1a1,1,0,0,0,0,2H5a1,1,0,0,0,.949-.684L8,4.162l5.051,15.154a1,1,0,0,0,1.9,0L17.721,11H21a1,1,0,0,0,0-2H17a1,1,0,0,0-.949.684Z"></path>
    </svg>
  );
}
