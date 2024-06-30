import { StyleComponentProps } from '../../../@types/props/StyleComponent';
import { StarRatings } from '../../starRatings/StarRatings';
import { ICardRecipeProps } from '../@types/interface';
import card from '../Card.module.css';
import cardRecipe from './CardRecipe.module.css';

export function CardRecipe({
  headline,
  image,
  rating,
  variant = 'col',
  className = '',
}: ICardRecipeProps & StyleComponentProps) {
  return (
    <figure
      className={`
        ${className}
        ${cardRecipe['card-recipe']} 
        ${card['card-figure']} 
        ${card['card']}
        flex-${variant}
        d-flex 
        `}
    >
      <a className={`full-rounded ${card['card-top']} h-full`}>
        <img
          src={image}
          alt={headline}
          className="full-rounded w-full h-full"
        />
      </a>
      <figcaption
        className={`${cardRecipe['card-recipe-bottom']}  ${card['card-bottom']} bottom-rounded`}
      >
        {rating && <StarRatings rating={rating} />}
        <a className={`${card['card-headline']} text-size-base text-weight-l`}>
          {headline}
        </a>
      </figcaption>
    </figure>
  );
}
