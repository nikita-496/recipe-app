import { IIconProps } from "../@types/interface";

export function ArrowLeft({
  width = 13,
  height = 13,
  color = "#ff642f",
  className = "",
}: IIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 13.333 13.333" className={className}>
        <path d="M6.077,13.089a.833.833,0,0,1,0-1.178L10.488,7.5H.833a.833.833,0,0,1,0-1.667h9.655L6.077,1.423A.834.834,0,0,1,7.256.244l5.829,5.83a.833.833,0,0,1,0,1.186L7.256,13.089a.834.834,0,0,1-1.179,0Z" fill={color}></path>
    </svg>
  );
}
