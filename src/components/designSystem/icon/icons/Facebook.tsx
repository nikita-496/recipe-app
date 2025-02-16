import { IIconProps } from "../@types/interface";

export function Facebook({
  width = 20,
  height = 20,
  color = "#000000",
  className = "",
}: IIconProps) {
  return (
    <svg data-name="feather-icon/facebook" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" className={className}>
        <rect data-name="Bounding Box" width={width} height={height} fill="rgba(255,255,255,0)"></rect>
        <path d="M6.667,18.333H3.333A.834.834,0,0,1,2.5,17.5V11.667H.833A.835.835,0,0,1,0,10.833V7.5a.834.834,0,0,1,.833-.833H2.5V5a5.006,5.006,0,0,1,5-5H10a.834.834,0,0,1,.833.833V4.167A.834.834,0,0,1,10,5H7.5V6.667H10A.833.833,0,0,1,10.808,7.7l-.833,3.334a.831.831,0,0,1-.809.631H7.5V17.5A.834.834,0,0,1,6.667,18.333Zm-5-10V10H3.333a.835.835,0,0,1,.834.833v5.834H5.833V10.833A.834.834,0,0,1,6.667,10h1.85l.416-1.667H6.667A.834.834,0,0,1,5.833,7.5V5A1.669,1.669,0,0,1,7.5,3.333H9.166V1.666H7.5A3.337,3.337,0,0,0,4.167,5V7.5a.835.835,0,0,1-.834.833Z" transform="translate(5 0.833)" fill={color}></path>
    </svg>
  )
}