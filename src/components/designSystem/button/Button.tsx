import { PropsWithChildren, forwardRef } from 'react';
import style from './Button.module.css';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outlined';
  size?: 'xxs' | 'xs' | 'sm' | 'md';
  isLoading?: false;
}

export const Button = forwardRef(function Button(
  {
    variant = 'primary',
    size = 'sm',
    isLoading = false,
    className = '',
    children,
    ...props
  }: IButtonProps & PropsWithChildren,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={`
        ${className} 
        ${style[`button-${variant}`]} 
        ${style[`button`]}
        `}
      {...props}
    >
      {children}
    </button>
  );
});
