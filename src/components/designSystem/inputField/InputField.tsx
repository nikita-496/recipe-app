import { ReactNode, forwardRef } from 'react';
import styles from './InputField.module.css';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<FieldValues>;
  variant?: 'filled' | 'outlined' | 'unframed';
  label?: string;
  icon?: ReactNode;
  errorMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  rounded?: boolean;
}

export const InputField = forwardRef(function InputField(
  {
    name,
    register,
    variant = 'filled',
    label = '',
    icon,
    errorMessage,
    className = '',
    rounded = false,
    ...props
  }: IInputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className={`input-${variant}-container ${styles['input-container']}`}>
      {
        <label className="text-size-s text-gray" htmlFor={name}>
          {label}

          <input
            ref={ref}
            className={`${className} ${styles['input']} ${
              styles[`input-${variant}`]
            }`}
            {...register(name)}
            {...props}
          />
          {icon && icon}

          {errorMessage && (
            <span className="error-message text-size-xxs">
              {errorMessage.toString()}
            </span>
          )}
        </label>
      }
    </div>
  );
});
