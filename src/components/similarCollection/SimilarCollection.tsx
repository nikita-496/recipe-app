import { CardRecipe } from '../designSystem/card/cardRecipe/CardRecipe';

import cheesecake from '../../assets/mighty-super-cheesecake.jpg';

export function SimilarCollection() {
  return (
    <>
      <h5 className="py-3 text-accent text-weight-xl text-size-xl">
        You might also like
      </h5>
      <div className="card-row-gutter row">
        <div className="card-col-gutter col-lg-3 col-md-4 col-6">
          <CardRecipe
            headline="Cranberry Macaroon Ice Cream Cake"
            image={cheesecake}
          />
        </div>
        <div className="card-col-gutter col-lg-3 col-md-4 col-6">
          <CardRecipe
            headline="Cranberry Macaroon Ice Cream Cake"
            image={cheesecake}
          />
        </div>
        <div className="card-col-gutter col-lg-3 col-md-4 col-6">
          <CardRecipe
            headline="Cranberry Macaroon Ice Cream Cake"
            image={cheesecake}
          />
        </div>
        <div className="card-col-gutter col-lg-3 col-md-4 col-6">
          <CardRecipe
            headline="Cranberry Macaroon Ice Cream Cake"
            image={cheesecake}
          />
        </div>
        <div className="card-col-gutter col-lg-3 col-md-4 col-6">
          <CardRecipe
            headline="Cranberry Macaroon Ice Cream Cake"
            image={cheesecake}
          />
        </div>
        <div className="card-col-gutter col-lg-3 col-md-4 col-6">
          <CardRecipe
            headline="Cranberry Macaroon Ice Cream Cake"
            image={cheesecake}
          />
        </div>
        <div className="card-col-gutter col-lg-3 col-md-4 col-6">
          <CardRecipe
            headline="Cranberry Macaroon Ice Cream Cake"
            image={cheesecake}
          />
        </div>
        <div className="card-col-gutter col-lg-3 col-md-4 col-6">
          <CardRecipe
            headline="Cranberry Macaroon Ice Cream Cake"
            image={cheesecake}
          />
        </div>
      </div>
    </>
  );
}
