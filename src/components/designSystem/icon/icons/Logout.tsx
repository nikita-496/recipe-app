import { IIconProps } from '../@types/interface';

export function Logout({
  width = 24,
  height = 24,
  color = 'rgba(255,255,255,0)',
  className = '',
}: IIconProps) {
  return (
    <svg
      data-name="feather-icon/log-out"
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
        fill={color}
      ></rect>
      <path
        d="M3,20a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H7A1,1,0,0,1,7,2H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H7a1,1,0,1,1,0,2Zm10.293-4.293a1,1,0,0,1,0-1.414L16.586,11H7A1,1,0,1,1,7,9h9.586L13.293,5.707a1,1,0,1,1,1.414-1.414l5,5a1,1,0,0,1,0,1.415l-5,5a1,1,0,0,1-1.414,0Z"
        transform="translate(2 2)"
      ></path>
    </svg>
  );
}
