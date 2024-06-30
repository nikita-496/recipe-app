import { CategoryResponse } from '../../../api/type/category';
import { useFetch } from '../../../hooks/useFetch';
import { CardGroup } from '../../cardGroup/CardGroup';
import { CardCategory } from '../../designSystem/card/cardCategory/CardCategory';
import styles from './Category.module.css';

export function Category() {
  const {
    response: categories,
    error,
    loading,
  } = useFetch<CategoryResponse[]>({ endpoint: 'categories' });
  return (
    <div className="container">
      <h5
        className={`${styles['category-title']} py-3 mb-3 mb-lg-5 h2 text-weight-xl text-size-xl text-accent`}
      >
        Categories
      </h5>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CardGroup>
          {categories.map((category) => (
            <div
              className="card-col-gutter col-lg-3 col-md-4 col-6"
              key={category.id}
            >
              <CardCategory
                headline={category.name}
                image={category.image}
              ></CardCategory>
            </div>
          ))}
        </CardGroup>
      )}
    </div>
  );
}
