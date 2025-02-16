import { IIconProps } from "../@types/interface";

export function Heart({
  width = 16,
  height = 16,
  color = "#7f7f7f",
  className = "",
}: IIconProps) {
  return (
    <svg data-name="feather-icon/calendar" xmlns="http://www.w3.org/2000/svg" width={width} height={height}  className={className}viewBox="0 0 16 16">
        <rect data-name="Bounding Box" width={width} height={height} fill="rgba(255,255,255,0)"></rect>
        <path d="M7.634,13.488a.662.662,0,0,1-.471-.2L1.269,7.4A4.334,4.334,0,0,1,7.4,1.27l.235.235.235-.235a4.334,4.334,0,0,1,7.4,3.064A4.3,4.3,0,0,1,14,7.4L8.105,13.292A.662.662,0,0,1,7.634,13.488ZM4.334,1.334A3,3,0,0,0,2.212,6.457l5.422,5.422,5.422-5.422A3,3,0,1,0,8.812,2.213l-.707.706a.666.666,0,0,1-.943,0l-.707-.706A2.981,2.981,0,0,0,4.334,1.334Z" transform="translate(0.366 1.332)" fill={color}></path>
    </svg>
  )
}