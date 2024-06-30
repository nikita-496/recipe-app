import { IIconProps } from "../@types/interface";

export function TrandingUp({
  width = 20,
  height = 20,
  color = "#ff642f",
  className = "",
}: IIconProps) {
  return (
    <svg data-name="feather-icon/trending-up" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" className={className}>
        <rect data-name="Bounding Box" width={width} height={height} fill="rgba(255,255,255,0)"></rect>
        <path d="M.244,11.423a.834.834,0,0,1,0-1.178L6.494,3.994a.834.834,0,0,1,1.178,0L11.25,7.571l5.9-5.9H14.167a.833.833,0,1,1,0-1.667h5A.833.833,0,0,1,20,.833v5a.834.834,0,0,1-1.667,0V2.845L11.839,9.339a.834.834,0,0,1-1.179,0L7.083,5.761l-5.66,5.661a.834.834,0,0,1-1.179,0Z" transform="translate(0 4.167)" fill={color}></path>
    </svg>
  )
}