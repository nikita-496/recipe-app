import { PropsWithChildren } from 'react';
import { RecipeResponse } from '../../api/type/recipe';
import { useFetch } from '../../hooks/useFetch';
import { CardGroup } from '../cardGroup/CardGroup';
import { CardRecipe } from '../designSystem/card/cardRecipe/CardRecipe';

type LastRecipeProps = {
  name: string;
};

export function Recipes({
  name,
  children,
}: LastRecipeProps & PropsWithChildren) {
  const {
    response: recipes,
    error,
    loading,
  } = useFetch<RecipeResponse[]>({
    endpoint: 'recipes',
    params: { queryParams: `?offset=0&limit=20` },
  });
  return loading ? (
    <p>Loading...</p>
  ) : (
    <CardGroup name={name}>
      {recipes.map((recipe) => (
        <div
          className="card-col-gutter col-lg-3 col-md-4 col-6"
          key={recipe.id}
        >
          <CardRecipe headline={recipe.title} image={recipe.src.images[0]} />
        </div>
      ))}
      {children}
    </CardGroup>
  );
}
