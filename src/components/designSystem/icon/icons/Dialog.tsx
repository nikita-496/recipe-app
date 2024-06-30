import { IIconProps } from "../@types/interface";

export function Dialog({
  width = 13,
  height = 13,
  color = "#000000",
  className = "",
}: IIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 13.333 13.335" className={className}>
        <path d="M.672,13.335a.687.687,0,0,1-.464-.183A.655.655,0,0,1,0,12.667V2A2,2,0,0,1,2,0h9.334a2,2,0,0,1,2,2V8.666a2,2,0,0,1-2,2H3.61L1.138,13.138A.657.657,0,0,1,.672,13.335ZM2,1.333A.667.667,0,0,0,1.333,2v9.058L2.862,9.529a.671.671,0,0,1,.472-.195h8A.668.668,0,0,0,12,8.666V2a.667.667,0,0,0-.667-.667Z" fill={color}></path>
    </svg>
  )
}