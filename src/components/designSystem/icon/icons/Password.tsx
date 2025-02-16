import { IIconProps } from '../@types/interface';

export function Password({
  width = 24,
  height = 24,
  color = '#7f7f7f',
  className = '',
}: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
    >
      <rect
        data-name="Bounding Box"
        width="24"
        height="24"
        fill="rgba(255,255,255,0)"
      ></rect>
      <path
        d="M3,22a3,3,0,0,1-3-3V12A3,3,0,0,1,3,9H4V6A6,6,0,0,1,16,6V9h1a3,3,0,0,1,3,3v7a3,3,0,0,1-3,3ZM2,12v7a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H3A1,1,0,0,0,2,12ZM14,9V6A4,4,0,1,0,6,6V9Z"
        transform="translate(2 1)"
        fill={color}
      ></path>
    </svg>
  );
}
