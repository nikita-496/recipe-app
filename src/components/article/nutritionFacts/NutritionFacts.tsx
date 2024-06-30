import styles from './NutritionFacts.module.css';

import { NutritionFactsType } from '../../../api/type/recipe';

export function NutritionFacts({
  nutritionFacts,
}: {
  nutritionFacts: NutritionFactsType;
}) {
  const keys = Object.keys(nutritionFacts);

  return (
    <aside className={`${styles['wrapper']} bg-lightest-gray pa-4`}>
      <h6 className="text-accent text-size-l text-weight-xl">
        Nutrition Facts
      </h6>
      <ul className={`${styles['nutritionFacts-list']} list`}>
        {keys.map((key: keyof NutritionFactsType, i) => (
          <li
            className={`${styles['list-item']} d-flex justify-between list-item-unmarker`}
            key={key}
          >
            <span className="text-dark-gray text-capitalize text-weight-s">
              {key}
            </span>
            <span>{nutritionFacts[key]} g</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
