import { ICardCategoryProps } from '../@types/interface';
import card from '../Card.module.css';
import cardCategory from './CardCategory.module.css';

export function CardCategory({ headline, image }: ICardCategoryProps) {
  return (
    <figure className={`${card['card-figure']} ${card['card']}`}>
      <a
        className={`${cardCategory['card-top-category']} ${card['card-top']} item-circle`}
      >
        <img
          className={`${cardCategory['card-category-image']} item-circle w-full`}
          src={image}
          alt={headline}
        />
      </a>
      <figcaption
        className={`${cardCategory['card-category-bottom']}  ${card['card-bottom']} bottom-rounded`}
      >
        <a
          className={`${card['card-headline']} text-size-m text-weight-l text-center`}
        >
          {headline}
        </a>
      </figcaption>
    </figure>
  );
}
