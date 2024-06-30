import { Icon } from '../designSystem/icon/Icon';
import styles from './AccountManage.module.css';

export function AccountManage() {
  return (
    <div className="d-flex">
      <button className={`${styles['accountManage-button']} text-size-s`}>
        <Icon icon="Logout" className="align-middle" />
        &#32; Sign out
      </button>
      <button
        className={`${styles['accountManage-button']} ml-auto text-primary text-weight-m text-size-s`}
      >
        Delete Account
      </button>
    </div>
  );
}
