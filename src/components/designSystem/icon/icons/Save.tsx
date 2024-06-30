
import { IIconProps } from "../@types/interface";

export function Save({
  width = 32,
  height = 32,
  color = "rgba(255,255,255,0)",
  className = "",
}: IIconProps) {
  return (
    <svg data-name="feather-icon/share copy" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" className={className}>
        <rect data-name="Bounding Box" width={width} height={height} fill={color}></rect>
        <path d="M20,26.669a1.318,1.318,0,0,1-.77-.251l-8.558-6.113L2.108,26.418a1.319,1.319,0,0,1-.77.251A1.362,1.362,0,0,1,.41,26.3,1.314,1.314,0,0,1,0,25.333V4A4,4,0,0,1,4,0H17.333a4,4,0,0,1,4,4V25.333A1.34,1.34,0,0,1,20,26.669Zm-9.329-9.336a1.329,1.329,0,0,1,.776.248l7.225,5.161V4a1.335,1.335,0,0,0-1.334-1.333H4A1.335,1.335,0,0,0,2.666,4V22.742l7.225-5.161A1.324,1.324,0,0,1,10.666,17.333Z" transform="translate(5.333 2.667)"></path>
    </svg>
  );
}

