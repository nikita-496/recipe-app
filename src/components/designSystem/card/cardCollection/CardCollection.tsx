import { ICardCollectionProps } from '../@types/interface';
import styles from '../Card.module.css';

export function CardCollection({
  headline,
  image,
  supportingText,
}: ICardCollectionProps) {
  return (
    <figure
      className={`${styles['card-figure']} ${styles['card']} d-flex flex-col`}
    >
      <a className={`top-rounded ${styles['card-top']}`}>
        <img src={image} alt={headline} className="top-rounded w-full" />
      </a>
      <figcaption
        className={`${styles['card-collection-bottom']} ${styles['card-bottom']} d-flex bottom-rounded`}
      >
        <div className={`${styles['card-collection-flex']} w-full`}>
          <h5 className={`${styles['card-headline']} mb-3 text-size-2xl`}>
            {headline}
          </h5>
          <span className="item-outlined text-size-xs text-weight-m">
            {supportingText} Recipes
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
