import { Id, Image } from '../../api/type/common';
import { Rating, RecipeResponse } from '../../api/type/recipe';
import { useFetch } from '../../hooks/useFetch';
import { CardRecipe } from '../designSystem/card/cardRecipe/CardRecipe';

import styles from './RecipeList.module.css';

export type RecipeListType = Array<{
  id: Id;
  title: string;
  image: Image;
  rating: Rating;
}>;

export type RecipesResponse = RecipeResponse[];

//Переименовать
export function RecipeList() {
  const {
    response: recipes,
    error,
    loading,
  } = useFetch<RecipesResponse>({ endpoint: 'recipes' });

  let recipeList: RecipeListType;

  const convertToRecipeList = (recipes: RecipesResponse): RecipeListType => {
    return recipes.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.src.images[0],
        rating: recipe.rating,
      };
    });
  };

  if (recipes) {
    recipeList = convertToRecipeList(recipes);
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list">
          {recipeList.map((recipe) => (
            <li className="list-item-unmarker" key={recipe.id}>
              <CardRecipe
                headline={recipe.title}
                image={recipe.image}
                rating={recipe.rating}
                variant="row"
                className={`${styles['freshRecipe-crad']}`}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
