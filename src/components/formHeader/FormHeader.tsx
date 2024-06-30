import { Button } from '../designSystem/button/Button';

import styles from './FormHeader.module.css';

interface IFormHeader {
  title: string;
}

export function FormHeader({ title }: IFormHeader) {
  return (
    <>
      <div className="d-flex align-items-center">
        <h5 className="text-accent text-size-xl text-weight-xl py-2 py-md-3 mb-0">
          {title}
        </h5>
        <Button
          className={`${styles['form-button']} ml-auto text-size-s text-weight-m text-uppercase`}
        >
          Save
        </Button>
      </div>
      <hr className={`${styles['divider']} my-3`} />
    </>
  );
}
