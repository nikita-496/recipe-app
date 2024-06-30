import { IIconProps } from "../@types/interface";

export function Instagram({
  width = 20,
  height = 20,
  color = "#000000",
  className = "",
}: IIconProps) {
  return (
    <svg data-name="feather-icon/instagram" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" className={className}>
        <rect data-name="Bounding Box" width={width} height={height} fill="rgba(255,255,255,0)"></rect>
        <path d="M5,18.333a5.005,5.005,0,0,1-5-5V5A5.006,5.006,0,0,1,5,0h8.333a5.005,5.005,0,0,1,5,5v8.333a5,5,0,0,1-5,5ZM1.667,5v8.333A3.337,3.337,0,0,0,5,16.667h8.333a3.337,3.337,0,0,0,3.333-3.333V5a3.337,3.337,0,0,0-3.333-3.334H5A3.338,3.338,0,0,0,1.667,5Zm4.59,7.076A4.164,4.164,0,1,1,9.2,13.3,4.161,4.161,0,0,1,6.256,12.076Zm.713-4.07a2.5,2.5,0,1,0,2.6-1.348A2.527,2.527,0,0,0,9.2,6.631,2.487,2.487,0,0,0,6.97,8.006Zm6.191-2.833a.833.833,0,1,1,.589.244A.834.834,0,0,1,13.161,5.173Z" transform="translate(0.833 0.833)" fill={color}></path>
  </svg>
  )
}