import styles from './FreshRecipes.module.css';

import dataHome from '../../db/home.json';
import { CardRecipe } from '../designSystem/card/cardRecipe/CardRecipe';

import cheesecake from '../../assets/mighty-super-cheesecake.jpg';

export function FreshRecipes() {
  return (
    <aside className="mt-4 mt-md-5 pt-3 pt-md-5">
      <h6 className="text-accent text-size-l text-weight-xl">Fresh Recipes</h6>
      <ul className="list">
        {dataHome.recipe.map((recipeItem) => (
          <li className="list-item-unmarker" key={recipeItem.id}>
            <CardRecipe
              headline={recipeItem.title}
              image={cheesecake}
              rating={recipeItem.rating}
              variant="row"
              className={`${styles['freshRecipe-crad']}`}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}
