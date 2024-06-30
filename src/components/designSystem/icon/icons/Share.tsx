
import { IIconProps } from "../@types/interface";

export function Share({
  width = 32,
  height = 32,
  color = "rgba(255,255,255,0)",
  className = "",
}: IIconProps) {
  return (
    <svg data-name="feather-icon/share" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" className={className}>
        <rect data-name="Bounding Box" width={width} height={height} fill={color}></rect>
        <path d="M4,29.333a4,4,0,0,1-4-4V14.666a1.333,1.333,0,1,1,2.666,0V25.333A1.333,1.333,0,0,0,4,26.666H20a1.333,1.333,0,0,0,1.333-1.333V14.666a1.333,1.333,0,1,1,2.666,0V25.333a4,4,0,0,1-4,4Zm6.667-10.666V4.552L7.609,7.609A1.333,1.333,0,0,1,5.724,5.724L11.057.39a1.333,1.333,0,0,1,.307-.229h0l.025-.013.008,0,.018-.009.015-.007.011-.005.024-.011h0a1.338,1.338,0,0,1,1.062,0h0l.024.011.011,0,.016.008L12.6.143l.008,0,.025.013h0a1.333,1.333,0,0,1,.307.229l5.333,5.334a1.333,1.333,0,1,1-1.885,1.885L13.333,4.552V18.667a1.333,1.333,0,0,1-2.666,0Z" transform="translate(4 1.333)"></path>
  </svg>
  );
}




