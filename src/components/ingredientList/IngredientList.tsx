import styles from './IngredientList.module.css';

import { Ingredient } from '../../api/type/recipe';

export function IngredientList({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <>
      <h6 className="mb-2 text-accent text-size-l text-weight-xl">
        Ingredietns
      </h6>
      <ul className="list">
        {ingredients.map((ingredient) => (
          <li className="mt-4 pb-2 list-item-unmarker" key={ingredient.name}>
            <strong className="text-size-s">{ingredient.name}</strong>
            <ul>
              {ingredient.composition.map((compositionItem, i) => (
                <li className={styles['list-item']} key={compositionItem}>
                  <span className="text-size-m">{compositionItem}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
