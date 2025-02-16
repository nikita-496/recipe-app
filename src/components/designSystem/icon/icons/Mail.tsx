import { IIconProps } from "../@types/interface";

export function Mail({
  width = 24,
  height = 24,
  color = "#7f7f7f",
  className = "",
}: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Icon"
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
        d="M3,18a3,3,0,0,1-3-3V3.01C0,3,0,2.99,0,2.98A3,3,0,0,1,3,0H19a3,3,0,0,1,3,2.968c0,.018,0,.036,0,.054V15a3,3,0,0,1-3,3ZM2,15a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V4.921l-8.427,5.9a1,1,0,0,1-1.147,0L2,4.921ZM11,8.78l8.895-6.226A1,1,0,0,0,19,2H3a1,1,0,0,0-.895.553Z"
        transform="translate(1 3)"
        fill={color}
      />
    </svg>
  );
}
