import { Icon } from '../../icon/Icon';
import { ICardAuthorProps } from '../@types/interface';
import cardAuthor from './CardAutor.module.css';

export function CardAuthor({
  fullName,
  rank,
  image,
  supportingText,
  meta,
}: ICardAuthorProps) {
  return (
    <div className={`${cardAuthor['card-author-container']}`}>
      <figure className={cardAuthor['card-author-top']}>
        <img
          className={cardAuthor['image-author']}
          src={image}
          alt={fullName}
        />
        <figcaption>
          <h5 className="text-size-base text-weight-l">{fullName}</h5>
          <span className="text-size-s">{rank}</span>
        </figcaption>
      </figure>
      <span
        className={`${cardAuthor['card-author-suppotingText']}  ${cardAuthor['card-author-bottom']} text-size-s`}
      >
        {supportingText}
      </span>
      <ul className="list-row list">
        {meta.map((metaItem) => (
          <li className="list-item-unmarker" key={metaItem.icon}>
            <a href="#">
              <Icon icon={metaItem.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
