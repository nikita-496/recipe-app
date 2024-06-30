import { useFetch } from '../../hooks/useFetch';
import { CategoryResponse } from '../../api/type/category';
import { CardCategory } from '../designSystem/card/cardCategory/CardCategory';
import { CardGroup } from '../cardGroup/CardGroup';

export function PopularCategories() {
  const {
    response: popularCategories,
    error,
    loading,
  } = useFetch<CategoryResponse[]>({
    endpoint: 'popular-categories',
  });

  return loading ? (
    <p>Loading...</p>
  ) : (
    <CardGroup name="Popular Categories">
      {popularCategories?.map((categoryItem) => (
        <div
          className="card-col-gutter col-lg-2 col-md-4 col-4"
          key={categoryItem.id}
        >
          <CardCategory
            headline={categoryItem.name}
            image={categoryItem.image}
          />
        </div>
      ))}
    </CardGroup>
  );
}
