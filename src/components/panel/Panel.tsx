import { Icon } from '../designSystem/icon/Icon';
import styles from './Panel.module.css';

import { StyleComponentProps } from '../@types/props/StyleComponent';

type PanelProps = {
  recipeMetaData: {
    cookingTime: number;
    prepTime: number;
    servings: number;
  };
};

export function Panel({
  recipeMetaData,
  className,
}: PanelProps & StyleComponentProps) {
  const { cookingTime, prepTime, servings } = recipeMetaData;

  return (
    <ul className={`${className} list-row list`}>
      <li className={`${styles['list-item']} list-item-unmarker`}>
        <small className="d-block text-gray text-size-xs">Cooking Time</small>
        <span className="text-uppercase text-size-s">{cookingTime} min</span>
      </li>
      <li className={`${styles['list-item']} list-item-unmarker`}>
        <small className="d-block text-gray text-size-xs">Prep Time</small>
        <div className="text-uppercase text-size-s">{prepTime} min</div>
      </li>
      <li className={`${styles['list-item']} list-item-unmarker`}>
        <small className="d-block text-gray text-size-xs">Servings</small>
        <div className="text-uppercase text-size-s">{servings} people</div>
      </li>
      <li className={`${styles['list-item']} list-item-unmarker`}>
        <Icon icon="Printer" />
      </li>
    </ul>
  );
}
