import { PropsWithChildren, forwardRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "../button/Button";

interface IDialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  title: string;
  toggleDialog: () => void;
  isModal?: boolean;
}

export const Dialog = forwardRef(function Dialog(
  {
    title,
    toggleDialog,
    isModal = false,
    children,
  }: IDialogProps & PropsWithChildren,
  ref: React.ForwardedRef<HTMLDialogElement>
) {
  return createPortal(
    <dialog ref={ref} aria-modal={isModal} aria-labelledby="dialog-title">
      <h2 id="dialog-title">{title}</h2>
      <Button onClick={toggleDialog}>Close</Button>
      {children}
    </dialog>,
    document.body
  );
});
