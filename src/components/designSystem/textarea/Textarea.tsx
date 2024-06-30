import React, { PropsWithChildren } from 'react';
import { StyleComponentProps } from '../../@types/props/StyleComponent';
import styles from './Textarea.module.css';

interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
}

export function Textarea({
  name,
  label = '',
  placeholder,
  className,
  children,
}: ITextareaProps & StyleComponentProps & PropsWithChildren) {
  return (
    <>
      <label className="text-size-s text-gray" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        placeholder={placeholder}
        className={`${styles['textarea']} ${className}`}
      >
        {children}
      </textarea>
    </>
  );
}
