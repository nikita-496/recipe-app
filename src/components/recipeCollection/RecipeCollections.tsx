import { Id } from '../../api/type/common';
import { RecipeResponse } from '../../api/type/recipe';
import { useFetch } from '../../hooks/useFetch';
import { CardGroup } from '../cardGroup/CardGroup';
import { CardRecipe } from '../designSystem/card/cardRecipe/CardRecipe';

type RecipeCollectionsProps = {
  name: string;
  recipeIds: Id[];
};

export function RecipeCollections({ name, recipeIds }: RecipeCollectionsProps) {
  const stringIds = recipeIds.map((id) => id.toString());

  const {
    response: recipes,
    error,
    loading,
  } = useFetch<RecipeResponse[]>({
    endpoint: 'recipes',
    params: { queryParams: `?id=${stringIds.join(',')}` },
  });

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CardGroup name={name}>
          {recipes.map((recipe) => (
            <div className="card-col-gutter col-md-4" key={recipe.id}>
              <CardRecipe
                headline={recipe.title}
                image={recipe.src.images[0]}
                rating={recipe.rating}
              />
            </div>
          ))}
        </CardGroup>
      )}
    </>
  );
}
