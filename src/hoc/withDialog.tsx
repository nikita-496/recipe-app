import React, { forwardRef, useRef } from 'react';
import { Dialog } from '../components/designSystem/dialog/Dialog';
import { WrappedComponentProps } from '../components/@types/props/WrappedComponent';

type WrappedComponentFunction = ({
  toggleDialog,
}: WrappedComponentProps) => React.JSX.Element;

export function withDialog(
  WrappedComponent: WrappedComponentFunction,
  title: string,
  isModal?: boolean,
  Children?: () => React.JSX.Element,
) {
  const enhanceWrappedComponent = forwardRef(function enhanceWrappedComponent(
    {},
    ref,
  ) {
    const dialogRef = useRef(null);
    function toggleDialog() {
      if (!dialogRef.current) {
        return;
      }
      dialogRef.current.hasAttribute('open')
        ? dialogRef.current.close()
        : dialogRef.current.showModal();
    }
    return (
      <>
        <WrappedComponent toggleDialog={toggleDialog} forwardRef={ref} />
        <Dialog
          ref={dialogRef}
          title={title}
          isModal={isModal}
          toggleDialog={toggleDialog}
        >
          <Children />
        </Dialog>
      </>
    );
  });

  return enhanceWrappedComponent;
}
