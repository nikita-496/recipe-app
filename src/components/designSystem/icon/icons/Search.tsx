import { IIconProps } from "../@types/interface";

export function Search({
  width = 24,
  height = 24,
  color = "#7f7f7f",
  className = "",
}: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="feather-icon_search"
      data-name="feather-icon/search"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
    >
      <rect
        id="Bounding_Box"
        data-name="Bounding Box"
        width="24"
        height="24"
        fill="rgba(255,255,255,0)"
      />
      <path
        id="Shape"
        d="M18.292,19.707l-3.678-3.678a9.009,9.009,0,1,1,1.414-1.414l3.678,3.678a1,1,0,0,1-1.415,1.415ZM2,9a7,7,0,0,0,11.87,5.024,1,1,0,0,1,.154-.154A7,7,0,1,0,2,9Z"
        transform="translate(2 2)"
        fill={color}
      />
    </svg>
  );
}
