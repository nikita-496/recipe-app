import { StyleComponentProps } from '../../../@types/props/StyleComponent';
import { Icon } from '../../icon/Icon';
import { Subhead } from '../../subhead/Subhead';
import { ICardFeatureProps } from '../@types/interface';
import card from '../Card.module.css';
import cardFeature from './CardFeature.module.css';

export function CardFeature({
  headline,
  image,
  demand,
  supportingText,
  className = '',
}: ICardFeatureProps & StyleComponentProps) {
  return (
    <figure
      className={`${className} ${cardFeature['card-feature']} 
    ${card['card']} overlay-box row`}
    >
      <div className="col-lg-7">
        <img className="w-full" src={image} alt={headline} />
      </div>
      <div
        className={`${cardFeature['figcaption-wrapper']} col-lg-5 col-center`}
      >
        <figcaption className="pa-4 pa-md-5">
          <Subhead demand={demand} />
          <h4
            className={`${cardFeature['card-feature-headline']} my-3 text-size-2xl text-weight-xl text-accent`}
          >
            {headline}
          </h4>
          <p className="w-full mb-3 pr-0 pr-md-5 pb-3 pb-sm-5 pb-lg-0 text-size-s">
            {supportingText}
          </p>

          <a href="#" className="ml-auto item-circle">
            <Icon icon="ArrowLeft" />
          </a>
        </figcaption>
      </div>
    </figure>
  );
}
