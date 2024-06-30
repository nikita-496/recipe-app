import { RecipeCollectionResponse } from '../../api/type/collection';
import { useFetch } from '../../hooks/useFetch';
import { CardGroup } from '../cardGroup/CardGroup';

import { CardCollection } from '../designSystem/card/cardCollection/CardCollection';

import styles from './HandPickedCollection.module.css';

export function HandPickedCollections() {
  const {
    response: recipeCollection,
    error,
    loading,
  } = useFetch<RecipeCollectionResponse[]>({
    endpoint: 'collections',
    params: {
      queryParams: `?name=Sushi Combos for your Next Party,Everything Bagel,Cook Like a Chef,Exquisite Dinner Recipe Ideas,The Ultimate Cookie Frenzy,For the Love of Donuts`,
    },
  });
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CardGroup
          name="Hand-Picked Collections"
          titleStyle={`${styles['hand-picked-collections-title']}`}
        >
          {recipeCollection.map((recipeCollectionItem) => (
            <div
              className="d-flex card-col-gutter col-md-6"
              key={recipeCollectionItem.id}
            >
              <CardCollection
                headline={recipeCollectionItem.name}
                image={recipeCollectionItem.image}
                supportingText={recipeCollectionItem.recipes.length.toString()}
              />
            </div>
          ))}
        </CardGroup>
      )}
    </>
  );
}
