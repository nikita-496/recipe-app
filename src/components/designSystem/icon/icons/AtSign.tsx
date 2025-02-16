import { IIconProps } from '../@types/interface';

export function AtSign({
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
        d="M4.017,19.5A11,11,0,1,1,22,11v1a4,4,0,0,1-7.261,2.316A5,5,0,1,1,14,7V7a1,1,0,0,1,2,0v5a2,2,0,1,0,4,0V11a9,9,0,1,0-3.528,7.146,1,1,0,1,1,1.216,1.588A11,11,0,0,1,4.017,19.5ZM8,11a3,3,0,1,0,3-3A3,3,0,0,0,8,11Z"
        transform="translate(0.999 0.999)"
        fill={color}
      ></path>
    </svg>
  );
}
