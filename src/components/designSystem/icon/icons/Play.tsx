import { IIconProps } from "../@types/interface";

export function Play({
  width = 56,
  height = 56,
  color = "#fff",
  className = "",
}: IIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 85.334 106.685" className={className}>
        <path d="M5.347,106.685a5.436,5.436,0,0,1-3.715-1.5A5.261,5.261,0,0,1,0,101.343v-96A5.324,5.324,0,0,1,8.218.855l74.669,48a5.338,5.338,0,0,1,0,8.976l-74.669,48A5.311,5.311,0,0,1,5.347,106.685Zm5.318-91.575V91.575L70.138,53.343Z" fill={color}></path>
    </svg>
  );
}
