import { Demand } from '../card/@types/interface';
import { Icon } from '../icon/Icon';
import styles from './Subhead.module.css';

type SubheadProps = {
  demand: Demand;
};

export function Subhead({ demand }: SubheadProps) {
  return (
    <strong className={styles['subhead']}>
      <Icon icon="TrandingUp" className={styles['subhead-icon']} />
      &nbsp;
      <span className="text-size-xxs text-weight-m">{`${demand.value}${demand.measure} would make this again`}</span>
    </strong>
  );
}
