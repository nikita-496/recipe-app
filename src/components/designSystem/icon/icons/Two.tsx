import { IIconProps } from "../@types/interface";

export function Two({
  width = 22,
  height = 20,
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
    >
      <path
        d="M6,20a1,1,0,0,1-.768-1.641l5-6a1,1,0,0,1,1.536,0l5,6A1,1,0,0,1,16,20Zm2.136-2h5.729L11,14.562ZM18,16a1,1,0,0,1,0-2h1a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V13a1,1,0,0,0,1,1H4a1,1,0,1,1,0,2H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H19a3,3,0,0,1,3,3V13a3,3,0,0,1-3,3Z"
        fill={color}
      ></path>
    </svg>
  );
}
