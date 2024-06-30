import { IIconProps } from '../@types/interface';

export function User({
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
        width={width}
        height={height}
        fill="rgba(255,255,255,0)"
      ></rect>
      <path
        d="M16,19V17a3,3,0,0,0-3-3H5a3,3,0,0,0-3,3v2a1,1,0,0,1-2,0V17a5,5,0,0,1,5-5h8a5,5,0,0,1,5,5v2a1,1,0,0,1-2,0ZM4,5a5,5,0,1,1,5,5A5.006,5.006,0,0,1,4,5ZM6,5A3,3,0,1,0,9,2,3,3,0,0,0,6,5Z"
        transform="translate(3 2)"
        fill={color}
      ></path>
    </svg>
  );
}
