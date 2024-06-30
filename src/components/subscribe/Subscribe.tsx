import { Button } from '../designSystem/button/Button';
import styles from './Subscribe.module.css';

export function Subscribe() {
  return (
    <>
      <h6 className={`text-weight-l mb-2 mb-md-4 pb-2`}>Newsletter</h6>
      <div className="d-md-flex">
        <p className="mb-3 text-size-s">
          You are currently sunscribed to our newsletter
        </p>
        <Button
          className={`${styles['subscribe-button']} py-2 px-4 text-weight-m text-size-s ml-auto mb-3"`}
          variant="outlined"
        >
          Unsubscribe
        </Button>
      </div>
    </>
  );
}
