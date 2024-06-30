import { Button } from '../../designSystem/button/Button';
import { InputField } from '../../designSystem/inputField/InputField';
import { Icon } from '../../designSystem/icon/Icon';
import styles from './DesignSystem.module.css';
import { withDialog } from '../../../hoc/withDialog';
import { WrappedComponentProps } from '../../@types/props/WrappedComponent';
import { CardCollection } from '../../designSystem/card/cardCollection/CardCollection';

import menu from '../../../assets/menu.jpg';
import menu2 from '../../../assets/menu2.jpg';
import shrimp from '../../../assets/shrimp.png';
import cheesecake from '../../../assets/mighty-super-cheesecake.jpg';

import { CardCategory } from '../../designSystem/card/cardCategory/CardCategory';
import { CardAuthor } from '../../designSystem/card/cardAuthor/CardAuthor';
import { CardFeature } from '../../designSystem/card/cardFeature/CardFeature';
import { CardRecipe } from '../../designSystem/card/cardRecipe/CardRecipe';

export const OpenModalWithDialog = withDialog(OpenModal, 'Test Modal');

const category = [{ id: 1, title: 'Sea', image: shrimp }];

const recipe = [{ id: 1, title: 'Cheesecake', image: menu2, rating: 5 }];

const feature = [
  {
    id: 1,
    title: 'Mighty Super Cheesecake',
    suppotingText:
      'Look no further for a creamy and ultra smooth classic cheesecake recipe! no one can deny its simple decadence.',
    image: cheesecake,
  },
];

function OpenModal({ toggleDialog, forwardRef }: WrappedComponentProps) {
  return <Button onClick={toggleDialog}>Open Modal</Button>;
}

export function DesignSystem() {
  return (
    <div className={styles['wrapper']}>
      <div>
        <h2>Buttons</h2>
        <Button> Join</Button>
        <Button className="text-size-3xl" variant="outlined">
          156 Recipes
        </Button>
        <Button
          className={styles['button-learn-more']}
          variant="outlined"
          disabled
        >
          Learn More
        </Button>
      </div>
      <div>
        <h2>Form Elements</h2>

        <form>
          <span className="error-message">*</span>
          <div className="form-group">
            <InputField
              name="test"
              placeholder="Email address"
              variant="unframed"
              className="input-left-spacing-m bg-lightest-gray text-size-base"
              required
            />
            <Button
              className={`${styles['button-join']} text-uppercase text-size-s text-weight-l`}
            >
              Join
            </Button>
          </div>
        </form>

        <InputField
          name="test"
          placeholder="Email address"
          variant="unframed"
          className={`${styles['input-mail']} input-left-spacing-xs bg-lightest-gray text-size-xs`}
          icon={
            <Icon
              icon="Mail"
              className={`${styles['input-unframed-icon']} ${styles['input-icon']}`}
            />
          }
          required
        />

        <InputField
          name="test"
          placeholder="Email"
          variant="outlined"
          className="input-left-spacing-l text-size-xs"
          icon={
            <Icon
              icon="Mail"
              className={`${styles['input-outlined-icon']} ${styles['input-icon']}`}
            />
          }
        />
        <InputField
          name="test"
          placeholder="Search Recipe"
          className="input-rigt-spacing-xl text-size-xs"
          icon={
            <Icon
              icon="Search"
              className={`${styles['input-icon-search-right']} ${styles['input-icon']}`}
            />
          }
        />
      </div>
      <div>
        <h2>Modal</h2>
        <OpenModalWithDialog />
      </div>
      <div>
        <h2>Card/Author</h2>
        <CardAuthor
          fullName="Julie Gomez"
          rank="Editor in chief"
          suppotingText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
        alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        If you are from repetition, injected humour, or non-characteristic words etc."
          image={shrimp}
          meta={[
            { icon: 'Facebook' },
            { icon: 'Twitter' },
            { icon: 'Instagram' },
          ]}
        />
      </div>
      <div>
        <h2>Card/Category</h2>
        {category.map((categoryItem) => (
          <CardCategory
            headline={categoryItem.title}
            image={categoryItem.image}
            key={categoryItem.id}
          />
        ))}
      </div>
      <div>
        <h2>Card/Collection</h2>
        <CardCollection headline="Exquisite Dinner Recipe Ideas" image={menu} />
      </div>
      <div className="container">
        <h2>Card/Feature</h2>
        {feature.map((featureItem) => (
          <CardFeature
            headline={featureItem.title}
            suppotingText={featureItem.suppotingText}
            image={featureItem.image}
            key={featureItem.id}
            demand={{
              value: 85,
              measure: '%',
            }}
          />
        ))}
      </div>
      <div>
        <h2>Card/Recipe</h2>
        {recipe.map((recipeItem) => (
          <CardRecipe
            headline={recipeItem.title}
            image={recipeItem.image}
            rating={recipeItem.rating}
            key={recipeItem.id}
          />
        ))}
      </div>
    </div>
  );
}
