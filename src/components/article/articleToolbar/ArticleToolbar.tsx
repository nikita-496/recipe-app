import { StyleComponentProps } from '../../@types/props/StyleComponent';
import { Icon } from '../../designSystem/icon/Icon';
import styles from './ArticleToolbar.module.css';

export function ArticleToolbar({ className }: StyleComponentProps) {
  return (
    <ul className={`${className} list-row list`}>
      <li className={`${styles['list-item']} list-item-unmarker ml-4`}>
        <a href="#">
          <Icon icon="Share" width={20} height={20} />
        </a>
      </li>
      <li className={`${styles['list-item']} list-item-unmarker ml-4`}>
        <a href="#">
          <Icon icon="Save" width={20} height={20} />
        </a>
      </li>
    </ul>
  );
}
