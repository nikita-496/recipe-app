import { ArticleHeader } from './articleHeader/ArticleHeader';
import { NutritionFacts } from './nutritionFacts/NutritionFacts';
import styles from './Article.module.css';
import recipeArticleBody from './RecipeArticleBody.module.css';

import { Panel } from '../panel/Panel';
import { FreshRecipes } from '../freshRecipes/FreshRecipes';
//import { JoinForm } from '../designSystem/form/joinForm/JoinForn';
import { Icon } from '../designSystem/icon/Icon';
import { Subhead } from '../designSystem/subhead/Subhead';
import { StarRatings } from '../designSystem/starRatings/StarRatings';
import { ArticlePreview } from './articlePreview/ArticlePreview';
import { RecipeResponse } from '../../api/type/recipe';
import { useFetch } from '../../hooks/useFetch';
import { IngredientList } from '../ingredientList/IngredientList';
import { Instructions } from '../instructions/Instructions';
import { RecipeList } from '../recipeList/RecipeList';

export function RecipeArticle() {
  const {
    response: recipe,
    error,
    loading,
  } = useFetch<RecipeResponse>({ endpoint: 'recipes', params: { id: 2 } });

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ArticleHeader
            title={recipe.title}
            metaData={{
              articleCreated: recipe.created,
              articleRating: recipe.rating,
            }}
            subhead={<Subhead demand={{ value: 85, measure: '%' }} />}
          />

          <ArticlePreview
            description={recipe.description}
            source={recipe.src.images}
          />
          <div className="row mt-0 mt-md-5">
            <div className="col-lg-8 col-md-7">
              <Panel
                recipeMetaData={{
                  cookingTime: recipe.metaData.cookingTime,
                  prepTime: recipe.metaData.prepTime,
                  servings: recipe.metaData.servings,
                }}
                className={styles['panel-wrapper']}
              />
              <article className={recipeArticleBody['article-body']}>
                <div className="mt-4 mt-md-5">
                  <IngredientList ingredients={recipe.ingredients} />
                </div>
                <div
                  className={`${recipeArticleBody['ingredients-wrapper']} mt-3 mt-md-5`}
                >
                  <Instructions instructions={recipe.instructions} />
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-5">
              <NutritionFacts nutritionFacts={recipe.nutritionFacts} />
              <aside className="mt-4 mt-md-5 pt-3 pt-md-5">
                <h6 className="text-accent text-size-l text-weight-xl">
                  Fresh Recipes
                </h6>
                <RecipeList />
              </aside>
              <aside
                className={`${styles['join-form-wrapper']} text-center mt-5 px-4 py-5`}
              >
                {/*<JoinForm
              titleStyleSize={`${styles['join-form-title']} text-size-xl`}
              subheadStyleSize={`${styles['join-form-subhead']} text-size-s`}
              className="pl-5 text-size-s"
              icon={
                <Icon
                  icon="Mail"
                  className={`${styles['join-form-input-icon']}`}
                />
              }
            />*/}
              </aside>
            </div>
          </div>
        </>
      )}
    </>
  );
}
