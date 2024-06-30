import { IIconProps } from '../@types/interface';

export function Arrow({
  width = 14,
  height = 8,
  color = '#ff642f',
  className = '',
}: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 9.333 5.333"
      className={className}
    >
      <path d="M1.138.2A.667.667,0,0,0,.2,1.138l4,4a.667.667,0,0,0,.943,0l4-4A.667.667,0,1,0,8.2.2L4.667,3.724Z"></path>
    </svg>
  );
}
