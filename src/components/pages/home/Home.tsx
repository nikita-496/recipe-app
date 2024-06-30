import { CardFeature } from '../../designSystem/card/cardFeature/CardFeature';
import styles from './Home.module.css';

import cheesecake from '../../../assets/mighty-super-cheesecake.jpg';

import dataHome from '../../../db/home.json';
import { Button } from '../../designSystem/button/Button';
import { Form } from '../../forms/Form';
import { useFetch } from '../../../hooks/useFetch';
import { RecipeCollectionResponse } from '../../../api/type/collection';
import { RecipeCollections } from '../../recipeCollection/RecipeCollections';
import { PopularCategories } from '../../popularCategories/PopularCategories';
import { HandPickedCollections } from '../../handPickedCollection/HandPickedCollection';
import { Recipes } from '../../Recipes/Recipes';
import { recomendationSchema } from '../../../types/schema';

export function Home() {
  const {
    response: recipeCollection,
    error,
    loading,
  } = useFetch<RecipeCollectionResponse[]>({
    endpoint: 'collections',
    params: {
      queryParams: `?name=Super Delicious,Sweet Tooth`,
    },
  });

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="container">
        {dataHome.feature.map((featureItem) => (
          <CardFeature
            headline={featureItem.title}
            supportingText={featureItem.supportingText}
            demand={{ value: 85, measure: '%' }}
            key={featureItem.id}
            image={cheesecake}
            className={styles['home-card-feature']}
          />
        ))}

        {recipeCollection.map((recipeCollectionItem) => {
          return (
            <RecipeCollections
              name={recipeCollectionItem.name}
              recipeIds={recipeCollectionItem.recipes}
              key={recipeCollectionItem.id}
            />
          );
        })}
        <PopularCategories />
      </div>
      <section className="bg-primary-light section my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="card-col-gutter col-xl-6 col-lg-8 text-center mx-auto py-4 py-md-5">
              <h2
                className={`${styles['recommendations-title']} text-weight-xl text-accent text-size-xxl mb-3`}
              >
                Deliciousness to your inbox
              </h2>
              <p
                className={`${styles['recommendations-form-subtitle']} font-size-xl pb-3`}
              >
                Enjoy weekly hand picked recipes <br />
                and recommendations
              </p>
              <Form schema={recomendationSchema}>
                <Form.Recommendations></Form.Recommendations>
              </Form>
              <small className="d-inline-block mt-3 text-size-xs">
                By joining our newsletter you agree to our
                <a href="#0" className="link">
                  &nbsp;
                  <u
                    className={`${styles['recommendations-text-with-decoration']}`}
                  >
                    Terms and Conditions
                  </u>
                </a>
              </small>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <HandPickedCollections />
        <Recipes name="Last Recipes">
          <div className="text-center py-5">
            <Button
              className={`${styles['load-more']} text-size-s text-weight-m`}
              variant="outlined"
            >
              Load More
            </Button>
          </div>
        </Recipes>
      </div>
    </>
  );
}
